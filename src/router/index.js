import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Sobre from '../views/sobre.vue'
import PageError from '../views/404.vue'
import LeandroCesar from '../views/user/leandro-cesar/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Sobre
    },
    {
      path: '/404',
      name: '404',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PageError,
      meta: { requiresAuth: false }
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import('../views/projetos.vue')
    },
    {
      path: '/projetos/ativos',
      name: 'projetos/ativos',
      component: () => import('../views/projetos/ativos.vue')
    },
    {
      path: '/projetos/em-desenvolvimento',
      name: 'projetos/em-desenvolvimento',
      component: () => import('../views/projetos/em-desenvolvimento.vue')
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: () => import('../views/servicos.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/personal.vue'),
      meta: { requiresAuth: true }
            /*redirect: '/sobre'*/
    },
    {
      path: '/consultoria',
      name: 'consultoria',
      component: () => import('../views/consultoria.vue')
    },
    {
      path: '/avaliacao',
      name: 'avaliacao',
      component: () => import('../views/avaliacao.vue')
    },
    {
      path: '/kravmaga',
      name: 'kravmaga',
      component: () => import('../views/kravmaga.vue')
    },
    {
      path: '/acupuntura',
      name: 'acupuntura',
      component: () => import('../views/acupuntura.vue')
    },
    {
      path: '/programacao',
      name: 'programacao',
      component: () => import('../views/programacao.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blog.vue')
    },
    {
      path: '/blog/index',
      name: 'blog/index',
      component: () => import('../views/blog/index.vue')
    },
    {
      path: '/blog/acupuntura',
      name: 'blog/acupuntura',
      component: () => import('../views/blog/acupuntura/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/recuperar',
      name: 'recuperar',
      component: () => import('../views/recuperar.vue')
    },
    {
      path: '/user/leandro-cesar',
      name: 'leandrocesar',
      component: LeandroCesar,
      meta: { requiresAuth: true },
    }
  ]
})

export default router
