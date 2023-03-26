import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
import store from '@/store';
import TypeNav from '@/components/TypeNav'; // 三级联动全局注册
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
