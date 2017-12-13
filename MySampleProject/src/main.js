// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import PageBody from './components/nest_components/PageBody'
import HeaderComponent from './components/nest_components/HeaderComponent'
import FooterComponent from './components/nest_components/FooterComponent'

Vue.config.productionTip = false
Vue.component('barkada', PageBody);
Vue.component('app-header', HeaderComponent);
Vue.component('app-footer', FooterComponent);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})