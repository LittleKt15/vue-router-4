import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
// const About = () => import('../views/About.vue')
// const Movies = () => import('../views/Movies.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: () => import('../views/About.vue') },
    { path: '/movies', component: () => import('../views/Movies.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;