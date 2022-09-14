import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from '../pages/Products/ProductDetail'
import About from '../pages/About'
import Cart from '../pages/Cart'
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
            children:[
                {
                    name:'ProductDetail',
                    path:'productDetail/:productID',
                    component:ProductDetail,
                }
            ]
        },
        {
            name:'About',
            path:'/about',
            component:About,
        },
        {
            name:'Cart',
            path:'/cart',
            component:Cart,
        },
        {
            name:'Member',
            path:'/member',
            component:Member,
        },
        {
            // Landing page設為Home component
            path:'/',
            redirect:Home
        }
    ]
})