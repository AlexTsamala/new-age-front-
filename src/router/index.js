import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterForm from '../views/RegisterForm.vue'
import SignUpForm from '../views/SignUpForm.vue'
import ShowData from '../views/ShowData.vue'
import UpdateUser from '../views/UpdateUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RegisterForm',
    component: RegisterForm
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component:SignUpForm
  },
  {
    path: '/profile',
    name: 'profile',
    component:ShowData
  },
  {
    path: '/profile/:userId/edit',
    name: 'editProfile',
    component:UpdateUser
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
