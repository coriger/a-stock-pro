import { createRouter, createWebHistory } from 'vue-router';
import StockListView from '../views/StockListView.vue';

const routes = [
  {
    path: '/',
    name: 'StockList',
    component: StockListView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
