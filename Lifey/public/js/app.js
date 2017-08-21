function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

requirejs.config({
    paths: {
        'apps': 'apps',
        'Vue': 'vendor/vue',
        'Vuex': 'vendor/vuex.min',
        'vue': 'vendor/require-vuejs.min',
        'jquery': 'vendor/jquery.min',
        'jquery-ui': 'vendor/jquery-ui.min',
        'mui': 'vendor/mui.min',
        'socket.io': 'vendor/socket.io'
    },
    packages: [
        //{ name: 'app-bar', location: 'components', main: 'app-bar' },
        { name: 'app-content', location: 'components', main: 'app-content' },
        { name: 'header-bar', location: 'components', main: 'header-bar' },
        { name: 'side-drawer', location: 'components', main: 'side-drawer' },
        { name: 'budget-monster', location: 'apps/BudgetMonster', main: 'main' },
        { name: 'monitoring', location: 'apps/Monitoring', main: 'main' },
        { name: 'my-projects', location: 'apps/MyProjects', main: 'main' },
        //{ name: 'admin-footer', location: 'components', main: 'admin-footer' },
    ],
    "shim": {
        "jquery-ui": ["jquery"],
        "Vue": { "exports": "Vue" }
    }
});

require(['vue', 'Vue', 'Vuex', 'jquery', 'jquery-ui', 'mui', 'socket.io'], function (vue, Vue, Vuex, $, jui, mui, socket) {

    Vue.use(Vuex);

    var socket = socket('localhost:3001');

    socket.on('profile', function (data) {

        const store = new Vuex.Store({
            state: data.state,
            mutations: {
                activateTask(state, task) {
                    state.tasks.forEach(function (t) { t.active = t === task ? true : false });
                },
                addTask(state, task) {
                    var doAdd = function (state, task) {
                        task.id = uuidv4();
                        state.tasks.push(task);
                        state.tasks.forEach(function (t) { t.active = t === task ? true : false });
                    }
                    var app = state.apps.filter(function (a) { return a.id === task.application })[0];
                    if (app.isDirty) require(["vue!apps/" + app.id + "/main.vue"], function () {
                        app.isDirty = false;
                        doAdd(state, task);
                    });
                    else doAdd(state, task)
                },
                dirtyApp(state, app) {
                    app.isDirty = true;
                },
                removeTask(state, task) {
                    var taskActive = task.active === true, taskApp = task.application;
                    var arrLength = state.tasks.length;
                    var oldTaskIndex = state.tasks.indexOf(task);
                    state.tasks.splice(oldTaskIndex, 1);
                    if (taskActive && state.tasks.length > 0) {
                        var newActiveTaskIndex = oldTaskIndex === state.tasks.length ? oldTaskIndex - 1 : newActiveTaskIndex = oldTaskIndex;
                        state.tasks.forEach(function (t) { t.active = t.id === state.tasks[newActiveTaskIndex].id ? true : false });
                    }
                }
            },
            actions: {
                saveState({commit, state}, products) {
                    socket.emit('saveState', state);
                },
                getState({commit, state}, products) {
                    socket.on('state', function (state) {
                        $store.commit('setState', state);
                    });
                    socket.emit('getState', state);
                }
            }
        });

        require(requirejs.s.contexts._.config.packages.map(function (obj) { return "vue!" + obj.name }), function () {
            window.Lifey = new Vue({
                el: '#lifey-app',
                created: function () {
                    var self = this;
                    socket.on('file-change', function (obj) {
                        var appPath = obj.path.substring(obj.path.indexOf('apps'));
                        var appName = appPath.replace('apps\\', '').replace('\\main.vue', '');
                        var app = self.$store.state.apps.filter(function (obj) { return obj.id === appName })[0];
                        self.$store.commit('dirtyApp', app);
                    });
                },
                store
            });
        });
    });

    socket.emit('get-profile');

});
