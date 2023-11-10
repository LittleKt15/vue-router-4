import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
// const About = () => import('../views/About.vue')
// const Movies = () => import('../views/Movies.vue')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/movies',
        name: 'MovieList',
        component: () => import('../views/Movies.vue')
    },
    {
        path: '/movies/:id',
        name: 'MovieDetails',
        component: () => import('../views/MovieDetails.vue'),
        props: true, 
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;