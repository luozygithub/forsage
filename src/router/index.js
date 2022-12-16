import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from "@/layout";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: layout,
        redirect: '/',
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home.vue'),
            },
        ]
    }
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
