import Vue from 'vue';
import QuoteGun from './QuoteGun.vue';
import './main.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(QuoteGun),
}).$mount('#app')
