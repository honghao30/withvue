// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostList from '@/views/posts/PostList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/post',
    name: 'List',
    component: PostList,
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
