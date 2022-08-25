import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'
import Member from '../pages/Member'



export default new VueRouter({
    routes:[
        {
            name:'Home',
            path:'/home',
            component:Home,
        },
        {
            name:'Products',
            path:'/products',
            component:Products,
        },
        {
            name:'About',
            path:'/about',
            component:About,
        },
        {
            name:'Member',
            path:'/member',
            component:Member,
        },
        {
            path:'/',
            redirect:Home
        }
    ]
})