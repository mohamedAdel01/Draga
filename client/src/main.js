import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import AOS from 'aos'
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';
import 'aos/dist/aos.css'
import VueApexCharts from 'vue-apexcharts'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'chart.js'
import 'hchs-vue-charts'
import VueFlashMessage from 'vue-flash-message'
import InfiniteLoading from 'vue-infinite-loading';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'



Vue.config.productionTip = false
Vue.use(require('vue-moment'));
Vue.use(Vuelidate);
Vue.use(Toasted, {})
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);
Vue.use(VueAxios, axios);
Vue.use(window.VueCharts);
Vue.use(VueFlashMessage);
Vue.use(InfiniteLoading, {});
//require("./assets/main.scss")

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
