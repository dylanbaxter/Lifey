<style>
#app-menu-bar .mui-btn--primary.mui-btn--flat {
    height: 50px;
    margin:0;
}

#app-menu-bar .mui-btn--primary.mui-btn--flat:hover {
    background-color: #2196F3;
    color:white;
}
#app-menu-bar {
    border-bottom: 2px solid #2196F3;
    border-top: 2px solid #2196F3;
    height: 50px;
}
#app-menu-bar table { 
    border-spacing: 0px;
    border-collapse: separate;
}
#app-menu-bar table td { 
    padding: 0px;
}
.breadcrumb {
  text-align: center;
  display: inline-block;

  overflow: hidden;
  margin-left: -40px;
  padding-right: 40px;
}
.breadcrumb__step {
  text-decoration: none;
  outline: none;
  display: block;
  float: left;
  line-height: 50px;
  padding: 0 10px 0 60px;
  position: relative;
  background: #fff;
  color: #2196F3;
  transition: background 0.25s;
}
.breadcrumb__step::after {
  content: "";
  position: absolute;
  top: 0;
  right: -25px;
  width: 50px;
  height: 50px;
  transform: scale(0.707) rotate(45deg);
  z-index: 1;
  border-radius: 0 5px 0 50px;
  background: #fff;
  transition: background 0.25s;
}
.breadcrumb__step:hover,
.breadcrumb__step:hover::after {
  background: #2196F3;
}
.breadcrumb__step:hover {
  color: #fff;
}
</style>

<template>
    <div id="app-menu-bar">
        <table width="100%">
            <tr>
                <td>
                    <div class="breadcrumb">
                        <a class="breadcrumb__step breadcrumb__step--active" href="#">ECMAScript</a>
                        <a class="breadcrumb__step" href="#">HTML5</a><a class="breadcrumb__step" href="#">Node.js</a>
                        <a class="breadcrumb__step" href="#">Angular</a>
                    </div>
                </td>
                <td align="right">
                    <button class="mui-btn mui-btn--medium mui-btn--primary mui-btn--flat">Stuff</button>
                    <button class="mui-btn mui-btn--medium mui-btn--primary mui-btn--flat">Things</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    define(["Vue"], function (Vue) {
          Vue.component("app-bar", {
              template: template,
              data: function () { return {} }
          });
        });
</script>