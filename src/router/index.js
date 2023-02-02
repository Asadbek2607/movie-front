import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import FilterPage from "@/views/FilterPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/categories/:id',
            name: 'filter',
            component: HomePage
        },
        {
            path: '/search/:searchTerm',
            name: 'FilterPage',
            component: FilterPage
        },
        {
            path: '/watch-movie/:movieId',
            name: 'Watch Movie Online',
            component: () => import('@/views/WatchMoviePage.vue')

        },

        {
            path: '/login',
            name: 'Login page',
            component: () => import('@/views/LoginPage.vue')

        },
        {
            path: '/add-movie',
            name: 'Add movie page',
            component: () => import('@/views/AddMoviePage.vue')

        },
        {
            path: '/remove-movie',
            name: 'Remove movie page',
            component: () => import('@/views/RemoveMoviePage.vue')

        }
    ]
})

export default router
