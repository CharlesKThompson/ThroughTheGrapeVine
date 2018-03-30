import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import Home from '@/components/Home'
//@ts-ignore
import Search from '@/components/Search'
//@ts-ignore
import Login from '@/components/Login'
//@ts-ignore
import Sweetness from '@/components/Sweetness'
//@ts-ignore
import Corkboard from '@/components/Corkboard'
//@ts-ignore
import Pets from '@/components/Pets'
//@ts-ignore
import UserSearch from '@/components/UserSearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/sweetness',
      name: 'Sweetness',
      component: Sweetness
    },
    {
      path: '/corkboard',
      name: 'Corkboard',
      component: Corkboard
    },
    {
      path: '/pets',
      name: 'Pets',
      component: Pets
    },
    {
      path: '/UserSearch',
      name: 'UserSearch',
      component: UserSearch
    }
  ]
})
