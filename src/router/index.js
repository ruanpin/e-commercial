import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetail from '../pages/Products/ProductDetail'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Order from '../pages/Order'
import OrderDone from '../pages/OrderDone'
import Member from '../pages/Member'
import MemberInfo from '../pages/MemberInfo'
import SignUp from '../pages/SignUp'
import SignUpDone from '../pages/SignUpDone'
import ChangePolicy from '../pages/ChangePolicy'
import Maintain from '../pages/Maintain'
import PrivacyPolicy from '../pages/PrivacyPolicy'





const router = new VueRouter({
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
            meta:{isAuth:true}
        },
        {
            name:'OrderDone',
            path:'/orderDone',
            component:OrderDone,
            meta:{isTipPage:true}
        },
        {
            name:'Member',
            path:'/member',
            component:Member,
        },
        {
            name:'MemberInfo',
            path:'/memberInfo',
            component:MemberInfo,
            meta:{isAuth:true}
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
            meta:{isTipPage:true}
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
            // Landing page??????Home component
            path:'/',
            redirect:Home
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // ?????????????????????
        return { x: 0 , y:0}
    }
})

router.beforeEach((to, from, next)=>{
    if(to.meta.isAuth){
        if (localStorage.getItem('to')){
            next()
        } else {
            alert('????????????')
            next({ name: 'Member' })
        }
    } else if (to.meta.isTipPage) {
        if (from.path =='/signUp' || from.path == '/order'){
            next()
        } else {
            next({name:'Home'})
        }
    } else {
        next()
    }
})

export default router