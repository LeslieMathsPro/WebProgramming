import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router/index.js"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import axios from 'axios'

Vue.use(VueRouter);
Vue.use(ElementUI, { locale });
Vue.prototype.axios = axios;

new Vue({
	el:"#app",
	router,
	render: h => h(App), // ElementUI initialize
})
