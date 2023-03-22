import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 重写VueRouter原型push、replace方法，解决vue-router@4版本以下push方法报错问题
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) { 
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, ()=>{}, ()=>{});
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) { 
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, ()=>{}, ()=>{});
    }
}

export default new VueRouter({
    // 配置路由
    routes: [
        // 项目启动都是/ 当访问/时 重定向到/home
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/views/Home'),
            meta: { isShowFooter: true }
        },
        {
            // /:keyword?  
            // /:keyword为params参数传递时的占位符,即为key  
            // 后面加?的意思是 params参数可传可不传 不加?不传递params参数url路径会有问题
            path: '/search/:keyword?',
            name: 'search',
            component: () => import('@/views/Search'),
            meta: { isShowFooter: true },
            // 路由传参可以使用props进行传参，在组件内部使用props接收 只能用于params参数传递使用 有三种写法  布尔值 函数 对象
            // props: true
            // props: {a:'1', b: '2'}
            // props: ($route) => {
            //     return {keyword: $route.params.keyword, kw: $route.query.kw}
            // }
            // 解构赋值 箭头函数简写return 写法
            props: ({params, query}) => ({keyword: params.keyword, kw: query.kw})
        },
        {
            path: '/login',
            component: () => import('@/views/Login')
        },
        {
            path: '/register',
            component: () => import('@/views/Register')
        }
      ]
})