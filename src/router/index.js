/*
 * @file: 项目路由
 * @Date: 2020-09-10 16:36:46
 * @author: manyao.zhu
 */
import VueRouter from 'vue-router';

const Home = () => import(/*webpackChunkName: home*/'../views/home/home');
const Login = () => import(/*webpackChunkName: home*/'../views/home/login');

const router = new VueRouter({
    linkActiveClass: 'active-router',
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: Home,
            name: 'home',
            meta: { title: '首页'}
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {title: '登录'}
        },
        {
            path: '*',
            redirect: {
                name: 'home',
                component: Home
            }
        }
    ]
})

export default router;