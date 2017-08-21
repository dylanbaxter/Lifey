<style>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  transition: left 0.2s;
  border-bottom: 1px solid #999;
  background: #eee;
}

header .mui-tabs__bar {
    margin-bottom: 0px;
} 

header .mui-tabs__bar > li.mui--is-active > a {
    color:black;
    background: #bbb;
}

header .mui-tabs__bar > li.mui--is-active {
    border-bottom: none;
}

header .mui-tabs__bar > li > a {
    padding-left:18px;
    padding-right:18px;
}

header .mui-tabs__bar > li > a:hover {
    background:#ddd;
}

header .mui-tabs__bar > li a span { cursor:pointer; }

header .mui-tabs__bar > li a span:hover { color:#aaa; }


header .mui-appbar {
    background-color: #eee;
    border-bottom: 2px solid #ccc;
    
}

header .mui-dropdown__menu { left: -320px; width:416px; padding:0; }
header .mui-dropdown__menu > li > a { white-space:normal; }

span.count-badge {
  color: black;
  display: inline-block;
  position:absolute;
  left: 32px;
  top: -4px;
  font-weight: bold;
  line-height: 1.6em;
  margin-right: 5px;
  text-align: center;
  width: 1.6em; 
}
</style>

<template>
    <header>
        <div class="mui-container-fluid">
            <table width="100%">
                <tr>
                    <td width="48">
                        <a class="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">☰</a>
                        <a class="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">☰</a>
                        <span class="mui--text-title mui--visible-xs-inline-block mui--visible-sm-inline-block">Brand.io</span>
                    </td>
                    <td style="vertical-align:bottom;">
                        <ul class="mui-tabs__bar">
                            <!--
                            <li v-bind:class="{ 'mui--is-active': tab.active }" @click="tab.active = ! tab.active" v-for="tab in tabs">
                                <a data-mui-toggle="tab" v-bind:data-mui-controls="tab.id">{{tab.application}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span class="icon-cancel-circle" @click="close"></span>
                                </a>
                            </li>    
                            -->
                            <li v-bind:class="{ 'mui--is-active': tab.active }" v-for="tab in tabs">
                                <a v-on:click.stop="activate(tab.id)">
                                    <span class="icon-power" v-if="isDirty(tab.application)"></span>
                                    {{tab.application}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span class="icon-cancel-circle" v-on:click.stop="close(tab.id)"></span>
                                </a>
                            </li>
                        </ul>
                    </td>
                    <td align="right">
                        <div id="status-bar">
                            <span class="icon-spinner6 spinner"></span>&nbsp;&nbsp;Loading...
                            <div class="mui-dropdown">
                                <button class="mui-btn mui-btn--flat" data-mui-toggle="dropdown"><span class="icon-bell"></span><span class="count-badge">{{notifications.length}}</span></button>
                                <ul class="mui-dropdown__menu">
                                    <li v-for="notification in notifications">
                                        <a href="#">
                                            <div class="">
                                                <h3>{{notification.application}}</h3>
                                                <p>{{notification.description}}</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <button class="mui-btn mui-btn--flat"><span class="icon-calendar"></span></button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </header>
</template>

<script>
    define(["Vue"], function (Vue) {
          Vue.component("header-bar", {
              template: template,
              computed: {
                  tabs () {
                      return this.$store.state.tasks
                  },
                  notifications () {
                      return this.$store.state.alerts
                  }
              },
              methods: {
                  activate: function (taskId) {
                      var task = this.$store.state.tasks.filter(function (obj) { return obj.id === taskId })[0];
                      this.$store.commit('activateTask', task);
                  },
                  close: function (taskId) {
                      var task = this.$store.state.tasks.filter(function (obj) { return obj.id === taskId })[0];
                      this.$store.commit('removeTask', task);
                  },
                  isDirty (taskApplication) { 
                      return this.$store.state.apps.filter(function (app) { return taskApplication === app.id })[0].isDirty // if the app is dirty, then so is the task
                  },
              }
          });
        });
</script>