import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Practice from '../views/practice.vue'
import Search from '../views/search.vue'
import Details from '../views/details.vue'
import Create from '../views/create.vue'
import Tag from '../views/Tag.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name : 'Search',
    component : Search
  },
  {
    path: '/practice',
    name : 'Practice',
    component : Practice
  },
  {
    path: '/posts/:id',
    name : 'Details',
    component : Details,
    props : true
  },
  {
    path: '/create',
    name : 'Create',
    component : Create
  },
  {
    path: '/tags/:tag',
    name : 'Tag',
    component : Tag,
    props : true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
