import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterForm from '../views/RegisterForm.vue'
import SignUpForm from '../views/SignUpForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/SignUp',
    name: 'SignU',
    component:SignUpForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
