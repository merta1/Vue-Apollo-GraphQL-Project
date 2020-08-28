import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CodesOfConduct from '../views/CodesOfConduct.vue'
import MarketPlace from '../views/MarketPlace.vue'
import IssueComments from '../views/IssueComments.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/codesOfConduct',
    name: 'codesOfConduct',
    component: CodesOfConduct
  }, 
  {
    path: '/marketPlace',
    name: 'marketPlace',
    component: MarketPlace
  },
  {
    path: '/issueComments',
    name: 'issueComments',
    component: IssueComments
  }
]

const router = new VueRouter({
  routes
})

export default router
