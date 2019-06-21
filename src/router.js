
import VueRouter from 'vue-router'
import pagea from './pages/pagea.vue'
import pageb from './pages/pageb.vue'

const routes = [
    { path: '/pagea', component: pagea },
    { path: '/pageb', component: pageb }
]



const router =new VueRouter({
    routes
})

export default router;