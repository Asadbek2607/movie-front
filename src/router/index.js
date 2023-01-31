import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import FilterPage from "@/views/HomePage.vue";

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
      component: FilterPage
    },
    {
      path: '/WatchMoviePage',
      name: 'Watch Movie Online',
      component: ()=> import('@/views/WatchMoviePage.vue')

    },
    {
      path: '/search/:searchTerm',
      name: 'FilterPage',
      component: FilterPage
    },
    {
      path: '/login',
      name: 'Login page',
      component: ()=> import('@/views/LoginPage.vue')

    },
    {
      path: '/add-movie',
      name: 'Add movie page',
      component: ()=> import('@/views/AddMoviePage.vue')

    }
  ]
})

export default router
