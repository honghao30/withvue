import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from "axios";

loadFonts()

createApp(App)
  .use(vuetify)  
  .mount('#app')
  //Vue.prototype.$axios = axios;
  app.config.globalProperties.$axios = axios;
