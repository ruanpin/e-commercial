<template>
  <div class="cart-container">
      <p class="page-title"><span>結帳</span></p>
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
      <div class="cart-panel" v-for="eachProduct in $route.params.buyList" :key="eachProduct.id">
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
              <div class="account">總金額 <span>$ {{$route.params.totalPrice}}</span></div>
              <button class="checkout-btn" @click="buyAction">下訂單</button>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name:'Order',
        watch:{
            '$store.state.Member.order_success'(newValue){
                if (newValue) {
                    this.$store.state.Member.order_success=false
                    this.$store.commit('Cart/ORDERDONERESET',this.$route.params.buyList)
                    this.$router.push({
                        name:'OrderDone'
                    })
                }
            }
        },
        methods:{
            buyAction(){
                
                let buyInfo = {
                    token:this.$store.state.Member.token,
                    buyList:this.$route.params.buyList,
                    totalPrice:this.$route.params.totalPrice,
                }
                this.$store.dispatch('Member/reqBuyAction',buyInfo)
            }
        }
    }
</script>

<style lang="scss" scoped>
    // 以下通用-----------------------
    $gbc-color:rgb(245,245,245);
    .page-title {
        font-size:1.5rem;
        font-weight: 700;
    }
    button {
        min-width: 2.5em;
        height:2.5em;
        border:0;
        cursor: pointer;
        background-color: rgb(214, 214, 214);
    }

    input {
        width: 1.2rem;
        height: 1.2rem;
        appearance: checkbox;
        margin-right:0.3rem;
    }
    #amount-input {
        border:0;
        text-align: center;
        width: 3em;
        height: 2.5em;
        cursor: text;
        margin-right:0rem;
        margin-bottom:0.5rem;
    }
    .title {
        color:rgb(153,153,153);
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
    // 以上通用-----------------------

    .cart-container {
        display:flex;
        flex-direction: column;
        // background-color: rgb(245,245,245);
        .page-title {
            margin-top:0.4rem;
            span {
                color:#fff;
                border-radius: 5px;
                padding:0.6rem;
                background-color: rgb(163,138,122);
                font-size:1.35rem;
                font-weight: 500;
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
            padding:1.3em 0;
            margin-top:1em;
            .account-area {
                display:flex;
                align-items: center;
                font-size: 1.2rem;
                span {
                    color:rgb(208,1,27);
                    font-size: 1.4rem;
                }

            }
            .checkout-btn {
                min-width: 13rem;
                height:3rem;
                font-size: 1.2rem;
                background-color: rgb(101,122,141);
                color:#fff;
                font-weight: 500;
                margin-right:4rem;
                margin-left:4rem;
            }
        }
    }
</style>