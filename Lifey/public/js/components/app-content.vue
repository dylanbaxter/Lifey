<style>
#content-wrapper {
  min-height: 100%;
  overflow-x: hidden;
  margin-left: 0px;
  transition: margin-left 0.2s;
  min-height: 300px;
}
.fade-transition {
  transition: opacity 0.2s ease;
}

.fade-enter, .fade-leave {
  opacity: 0;
}
</style>

<template>
    <content>
        <div class="mui-container-fluid">
            <component :is="currentView" transition="fade" transition-mode="out-in"></component>
        </div>
    </content>
</template>

<script>
    define(["Vue"], function (Vue) {
        Vue.component("app-content", {
            template: template,
            computed: {
                currentView () {
                    if (this.$store.state.tasks.length === 0) return null;
                    var task = this.$store.state.tasks.filter(function (t) { return t.active === true })[0];
                    return task.application.replace(' ', '');
                }
            }
        });
    });
</script>