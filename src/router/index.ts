import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import HelloWorld from '../components/HelloWorld.vue';

// 创建路由对象
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/hello',
        name: 'Hello',
        component: HelloWorld,
    },
];

// 创建路由器实例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;