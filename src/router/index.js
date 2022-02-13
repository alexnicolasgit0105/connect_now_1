import { createRouter, createWebHashHistory } from 'vue-router'
import Games from '../views/Games.vue'
import Contact from '../views/Contact.vue'

const routes = [{
        path: '/',
        name: 'Games',
        component: Games
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/abount',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router