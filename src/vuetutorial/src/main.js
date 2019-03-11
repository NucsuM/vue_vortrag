import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Bootstrap);
Vue.use(axios);

new Vue({
  render: function (h) { return h(App) },
  data: function () { return {
    currentLocation: ""
  }
    
  }
}).$mount('#app')
