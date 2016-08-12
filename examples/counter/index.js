import Vue from 'vue';
import vueFlow from "vue-flow";
import App from "./components/Counter.vue";

Vue.use(vueFlow);

require('./models/main');

new Vue({
    el: 'body',
    components: { App }
})
