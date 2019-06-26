import Vue from 'vue'
import VueRouter from 'vue-router'
import pagea from './pages/pagea.vue'
import pageb from './pages/pageb.vue'
Vue.use(VueRouter)
const routes = [
    { path: '/', component: pagea },
    { path: '/pageb', component: pageb }
]



const router =new VueRouter({
    routes
})

export default router;