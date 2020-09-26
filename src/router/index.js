import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/busqueda',
    name: 'Busqueda',
    component: () => import(/* webpackChunkName: "about" */ '../views/Busqueda.vue')
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ventas.vue')
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inventario.vue')
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
