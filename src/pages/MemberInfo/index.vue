<template>
    <div class="MemberInfo-container">
        <div class="list">
            <div class="menu-title">我的訂單</div>
        </div>
        <div class="orders" v-for="order in targetOrders" :key="order._id">
            <p class="page-title"><span>訂單編號: {{order._id}}</span></p>
            <div class="title-area">
                    <div class="left">
                        <div class="title">商品</div>
                    </div>
                    <div class="right">
                        <div class="title">單價</div>
                        <div class="title">數量</div>
                        <div class="title">總計</div>
                    </div>
            </div>
            <div class="cart-panel" v-for="eachProduct in order.buyList" :key="eachProduct._id">
                <div class="left">
                        <div class="product">
                            <div class="img">
                                <img :src='eachProduct.imgUrl' alt="">
                            </div>
                            <div class="product-info">
                                {{eachProduct.name}}
                                {{eachProduct.id}}
                            </div>
                        </div>
                </div>
                <div class="right">
                    <div class="title cart-product-infos">$ {{eachProduct.price}}</div>
                    <div id="amount-relative" class="title cart-product-infos">
                        <div class="amount-choose">
                            <p class="buyNum-order">{{eachProduct.amount}}</p>
                        </div>
                    </div>
                    <div class="title cart-product-infos proPrice">
                        $ {{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[5]}}{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[4]}}{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[3]}},{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[2]}}{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[1]}}{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[0]}}
                    </div>
                </div>
            </div>
            <div class="checkout-panel">
                <div class="account-area">
                    <div class="account">總金額 <span>$ {{order.totalPrice}}</span></div>
                </div>
            </div>
        </div>
        <div class="msg" v-show="!targetOrders.length">
            目前無訂單
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'MemberInfo',
    mounted(){
        this.$nextTick(()=>{
            this.$store.dispatch('MemberInfo/getOrder',this.$store.state.Member.token)
        })
    },
    computed:{
        ...mapState('MemberInfo',['targetOrders'])
    }
    
}
</script>

<style lang="scss" scoped>
    $gbc-color:rgb(245,245,245);

    .title {
        color:rgb(153,153,153);
    }
    .menu-title {
        font-size:1.4rem;
    }
    .left {
        display:flex;
        align-items: center;
        .checkbox {
            display:flex;
            align-items: center;
            margin-right:1.5em;
        }
    }
    .right {
        display:flex;
        align-items: center;
        width: 50%;
        .title {
            width: 25%;
            text-align: center;
        }
    }
    // ------------------------------------


    .MemberInfo-container {
        display:flex;
        flex-direction: column;
            .orders {
                margin-top : 2.5rem;
                display:flex;
                flex-direction: column;
                // background-color: rgb(245,245,245);
                .page-title {
                    margin-top:1.3rem;
                    span {
                        // color:#fff;
                        border-radius: 5px;
                        // padding:0.6rem;
                        // background-color: rgb(163,138,122);
                        font-size:1.3rem;
                        // font-weight: 500;
                    }
                }
                .title-area {
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                    padding:1.5rem;
                    margin-top:1.5rem;
                    background-color: $gbc-color;
                }
                .cart-panel {
                    display:flex;
                    align-items: center;
                    justify-content: space-between;
                    padding:1.5em;
                    margin-top:0.2rem;
                    background-color:$gbc-color;
                    .left {
                        .product {
                            display:flex;
                            .img {
                                height: 6rem;
                                margin-right:1em;
                                img {
                                    height: 100%;
                                }
                            }
                        }
                    }
                    .right {
                        .cart-product-infos {
                            color:black;
                            display:flex;
                            justify-content: center;
                            align-items: center;
                        }
                        .proPrice {
                            color:rgb(208,1,27);
                        }
                        #amount-relative {
                            display:flex;
                            flex-direction: column;
                        }
                    }
                }
                .checkout-panel {
                    display:flex;
                    justify-content: flex-end;
                    background-color: $gbc-color;
                    padding:1.3em ;
                    margin-top:0.2em;
                    .account-area {
                        display:flex;
                        align-items: center;
                        font-size: 1.2rem;
                        margin-right:13rem;
                        span {
                            color:rgb(208,1,27);
                            font-size: 1.2rem;
                        }

                    }
                }
            }
            .msg {
                margin-top:2rem;
                font-size:1.2rem;
            }
        
        
    }
</style>