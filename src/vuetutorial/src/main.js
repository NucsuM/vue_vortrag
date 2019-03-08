import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
Vue.use(Bootstrap);

new Vue({
  render: function (h) { return h(App) },
  data: function () { return {
    currentLocation: ""
  }
    
  }
}).$mount('#app')
