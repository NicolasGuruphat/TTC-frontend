import Home from '@/views/Home.vue'
import Search from '@/views/Search.vue'
import Apropos from '@/views/Apropos.vue'
import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history : createWebHistory(), 
    routes : [
        {path : '/search', name : 'Search', component : Search},
        {path : '/home', name : 'Home', component : Home},
        {path : '/apropos', name : 'Apropos', component : Apropos},
    ]
})

export default router