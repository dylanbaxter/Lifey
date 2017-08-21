<style>

</style>

<template>

</template>

<script>
    define(["Vue"], function (Vue) {
          Vue.component("_boiler-plate", {
              template: template,
              data: function() {
                  return {};
              },
              beforeCreate: function () {
                  console.log("beforeCreate");
              },
              created: function () {
                  console.log("created");
              },
              beforeMount: function () {
                  console.log("beforeMount");
              },
              mounted: function () {
                  console.log("mounted");
              },
              beforeUpdate: function () {
                  console.log("beforeUpdate");
              },
              updated: function () {
                  console.log("updated");
              },
              beforeDestroy: function () {
                  console.log("beforeDestroy");
              },
              destroy: function () {
                  console.log("destroy");
              }
          });
        });
</script>