/*
 * @Author: your name
 * @Date: 2020-05-27 20:44:32
 * @LastEditTime: 2020-05-28 10:47:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \government-service-assessment\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Dashboard',
    component: () => import( /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue')
  },
  // 城市详情信息
  {
    path: '/citydetail/:cityname',
    name: 'Citydetail',
    component: () => import( /* webpackChunkName: "dashboard" */ '@/views/dashboard/citydetail.vue')
  },
  // 总体排名
  {
    path: '/overrank',
    name: 'Overrank',
    component: () => import( /* webpackChunkName: "dashboard" */ '@/views/overrank/overrank.vue')
  },
  {
    path: '/servemethod',
    name: 'Overrank',
    component: () => import( /* webpackChunkName: "dashboard" */ '@/views/servemethod/servemethod.vue')
  },
  // 404
  {
    path: '/404',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "dashboard" */ '@/views/404.vue')
  },
  // 重定向
  {
    path: '*',
    name: 'other',
    redirect: '/404'
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
