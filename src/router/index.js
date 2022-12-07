import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostLIstView from '@/views/posts/PostLIstView.vue';

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
    path: '/posts/Create',
    name: 'PostCreateView',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',
    name: 'PostDetailView',
    component: PostDetailView,
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEditView',
    component: PostEditView,
  },
  {
    path: '/posts',
    name: 'PostLIstView',
    component: PostLIstView,
  },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;