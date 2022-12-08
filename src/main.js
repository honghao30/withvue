import { createApp } from 'vue'
import App from './App.vue'
//import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
//import 'bootstrap/dist/css/bootstrap.min.css';


//import axios from "axios";
import router from '@/router';

loadFonts()

createApp(App).use(router).mount('#app');
//.use(BootstrapVue)  
  
//Vue.prototype.$axios = axios;  
//Vue.prototype.$http = axios;
//app.config.globalProperties.$axios = axios;
//import 'bootstrap/dist/js/bootstrap.js';




