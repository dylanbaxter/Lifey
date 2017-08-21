<style>
#sidedrawer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 198px;
  left: -200px;
  overflow: hidden;
  z-index: 2;
  background-color: #fff;
  transition: transform 0.2s;
}

#sidedrawer-footer {
    position:fixed;
    bottom:0;
  height: 64px;
  transition: margin-left 0.2s;
}

#sidedrawer.active { transform: translate(200px) } /* Toggle Sidedrawer */

.sidedrawer-toggle {
  color: #333;
  cursor: pointer;
  font-size: 20px;
  line-height: 20px;
  margin-right: 10px;
}

.sidedrawer-toggle:hover {
  color: #2196F3;
  text-decoration: none;
}

#sidedrawer {
    border-right: 2px solid #2196F3;
}

#sidedrawer-brand {
  padding-left: 2px;
  height:48px;
  border-bottom: 1px solid #2196F3;
}

#sidedrawer-brand img {
    margin-left: 5px;
}

#sidedrawer-brand h1 {
    margin: 0px 0px 0px 14px;
    color: #2196F3;
}

#sidedrawer ul {
  list-style: none;
}

#sidedrawer > ul {
  padding-left: 0px;
}

#sidedrawer > ul > li:first-child {
  /*padding-top: 15px;*/
}

#sidedrawer strong {
  display: block;
  padding: 10px 22px;
  cursor: pointer;
/*  color: #2196F3;*/
  color: #333;
}

#sidedrawer strong:hover {
  background-color: #E0E0E0;
}

#sidedrawer strong + ul > li {
  padding: 6px 0px;
}

#sidedrawer-footer .mui-btn {
    text-align: center;
}

#sidedrawer-footer .mui-btn {
    padding: 0 22px;
}

@media (min-width: 768px) {
  header {
    left: 200px;
  }
  
  #sidedrawer {
    transform: translate(200px);
  }
  
  #content-wrapper {
    margin-left: 200px;
  }
  
  footer {
    margin-left: 200px;
  }
  
  body.hide-sidedrawer header {
    left: 0;
  }
  
  body.hide-sidedrawer #sidedrawer {
    transform: translate(0px);
  }
  
  body.hide-sidedrawer #content-wrapper {
    margin-left: 0;
  }
  
  body.hide-sidedrawer footer {
    margin-left: 0;
  }
}
</style>

<template>
    <div id="sidedrawer" class="mui--no-user-select">
        <div id="sidedrawer-brand">
            <table border="0">
                <tr>
                    <td valign="top">
                        <h1>Lifey</h1>
                    </td>
                    <td>
                        <img src="img/happy-cloud-48px.png" style="margin-top:-2px" />
                    </td>
                </tr>
            </table>
        </div>
        <div class="mui-divider"></div>
        <ul>
            <li v-for="app in apps">
                <strong v-on:click="startApp(app.id)" v-bind:title="app.description">{{app.title}}</strong>
            </li>
        </ul>
        <div id="sidedrawer-footer">
            <div id="sidedrawer-footer-menu" class="mui--appbar-line-height">
                <button class="mui-btn mui-btn--flat"><span class="icon-spinner6 spinner"></span></button>
                <button class="mui-btn mui-btn--flat"><span class="icon-spinner6 spinner"></span></button>
                <button class="mui-btn mui-btn--flat"><span class="icon-spinner6 spinner"></span></button>
            </div>
        </div>
    </div>
</template>

<script>
    define(["Vue"], function (Vue) {
          Vue.component("side-drawer", {
              template: template,
              computed: {
                  apps () { return this.$store.state.apps }
              },
              methods: {
                  startApp: function (appId) {
                      var app = this.$store.state.apps.filter(function (obj) { return obj.id === appId })[0];
                      var newTask = { application: app.id, title: app.title, active: true, description: app.description };
                      this.$store.commit('addTask', newTask);
                  }
              },
              mounted: function () {
                  $('.js-show-sidedrawer').on('click', function () {
                      var $sidedrawerEl = $('#sidedrawer');
                      $sidedrawerEl.appendTo($(mui.overlay('on', { onclose: function () { $sidedrawerEl.removeClass('active').appendTo(document.body) } })));
                      setTimeout(function () { $sidedrawerEl.addClass('active') }, 20);
                  });
                  $('.js-hide-sidedrawer').on('click', function () { $('body').toggleClass('hide-sidedrawer') });
              },
          });
        });
</script>