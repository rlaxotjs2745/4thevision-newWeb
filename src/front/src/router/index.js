import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PersonalInfoPolicy from '../views/PersonalInfoPolicy.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personal-policy',
    name: 'PersonalInfoPolicy',
    component: PersonalInfoPolicy
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
