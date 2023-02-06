import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";


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
            path: '/watch-movie/:movieId',
            name: 'Watch Movie Online',
            component: () => import('@/views/WatchMoviePage.vue')

        },

        {
            path: '/login',
            name: 'Login page',
            component: () => import('@/components/LoginRow.vue')

        },
        {
            path: '/add-movie',
            name: 'Add movie page',
            component: () => import('@/components/AddMovie.vue')

        },
        {
            path: '/movie-list',
            name: 'movie list page',
            component: () => import('@/views/MovieListPage.vue')

        },
        {
            path: '/edit-movie/:movieId',
            name: 'edit-movie',
            component: () => import('@/components/EditMovie.vue')
        }

    ]
})

export default router
