import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Items from '../views/Items.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/items', component: Items }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
