var _config =
    {
        app: {
            enableDb: false,
            dbUrl: '', // mongodbUrl
            enableWebsockets: true,
            sockets: ['application', 'debug', 'system', 'user']
        },
        public: {
            profiles: {
                dylan: {
                    name: "User",
                    state: {
                        lastSaved: 'never',
                        alerts: [
                            { application: 'Monitoring', description: "There's a hard freeze tonight dude, cover the plants!" },
                            { application: 'Budget', description: "You are late on teh house payment!" },
                            { application: 'Monitoring', description: "Something else happened!" }
                        ],
                        apps: [
                            {
                                id: 'BudgetMonster',
                                title: 'Budget Monster',
                                description: 'An attempt at planning my income and bill payments over time.',
                                isDirty: false,
                                saves: []
                            },
                            { id: 'MyProjects', title: 'My Projects', description: 'Collecting some ideas and resources about the many projects I work on.', isDirty: false },
                            { id: 'Monitoring', title: 'Monitoring', description: 'Tracking and displaying real-time IoT device data for various projects, see above :)', isDirty: false }
                        ],
                        tasks: []
                    },
                }
            }
        }
    };


var Config = function () { };

Config.prototype.app = function () {
    return _config.app;
}

Config.prototype.WholeThing = function () {
    return _config;
}

Config.prototype.profile = function (name) {
    return _config.profiles[name];
}

module.exports = Config;

