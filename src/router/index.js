import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from '../pages/Products/ProductDetail'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Order from '../pages/Order'
import Member from '../pages/Member'
import SignUp from '../pages/SignUp'
import SignUpDone from '../pages/SignUpDone'
import ChangePolicy from '../pages/ChangePolicy'
import Maintain from '../pages/Maintain'
import PrivacyPolicy from '../pages/PrivacyPolicy'





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
            name:'Order',
            path:'/order',
            component:Order,
        },
        {
            name:'Member',
            path:'/member',
            component:Member,
        },
        {
            name:'SignUp',
            path:'/signUp',
            component:SignUp,
        },
        {
            name:'SignUpDone',
            path:'/signUpDone',
            component:SignUpDone,
        },
        {
            name:'ChangePolicy',
            path:'/changePolicy',
            component:ChangePolicy,
        },
        {
            name:'Maintain',
            path:'/maintain',
            component:Maintain,
        },
        {
            name:'PrivacyPolicy',
            path:'/privacyPolicy',
            component:PrivacyPolicy,
        },
        {
            // Landing page設為Home component
            path:'/',
            redirect:Home
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { x: 0 , y:0}
    }
})