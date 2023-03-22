import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
import TypeNav from '@/views/Home/TypeNav'; // 三级联动全局注册
Vue.component(TypeNav.name, TypeNav)

import { reqThreeList } from '@/api';

reqThreeList()

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
