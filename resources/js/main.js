var Vue = require("vue/dist/vue.js");

Vue.component("hello", require("./components/Hello.vue"));

const app = new Vue({
    el: "#app"
});