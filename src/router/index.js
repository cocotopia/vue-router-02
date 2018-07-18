import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Nosotros from '@/components/Nosotros'
import Servicios from '@/components/Servicios'
import Portafolio from '@/components/Portafolio'
import Detalle from '@/components/Detalle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nosotros/',
      name: 'Nosotros',
      component: Nosotros
    },
    {
      path: '/servicios/',
      name: 'Servicios',
      component: Servicios
    },
    {
      path: '/portafolio/',
      name: 'Portafolio',
      component: Portafolio,
      children: [
        {
          path: 'detalle',
          component: Detalle
        }
      ]
    }
  ]
})
