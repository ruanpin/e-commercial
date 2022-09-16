<template>
  <div class="cart-container">
      <div class="title-area">
            <div class="left">
                <div class="checkbox">
                    <input type="checkbox" id="allChecked">
                    <label for="allChecked">全選</label>
                </div>
                <div class="title">商品</div>
            </div>
            <div class="right">
                <div class="title">單價</div>
                <div class="title">數量</div>
                <div class="title">總計</div>
                <div class="title">刪除</div>
            </div>
      </div>
      <div class="cart-panel" v-for="eachProduct in productInfo" :key="eachProduct.id">
          <div class="left">
                <div class="checkbox">
                    <input type="checkbox" id="allChecked">
                </div>
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
                    <button class="minus" @click="changeBuyNumBtn('minus', eachProduct, cartList.find(e=>e.id==eachProduct.id))"><i class="fa-solid fa-minus" ></i></button>
                    <input id="amount-input" class="buyNum-input" type="text" v-model.lazy="cartList.find(e=>e.id==eachProduct.id).amount" @change="changeBuyNumInput($event, eachProduct, cartList.find(e=>e.id==eachProduct.id))">
                    <button class="plus" @click="changeBuyNumBtn('plus', eachProduct, cartList.find(e=>e.id==eachProduct.id))"><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="remaining">剩餘{{eachProduct.remaining}}件</div>
              </div>
              <div class="title cart-product-infos">
                  $ {{(cartList.find(e=>e.id==eachProduct.id).amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[5]}}{{(cartList.find(e=>e.id==eachProduct.id).amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[4]}}{{(cartList.find(e=>e.id==eachProduct.id).amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[3]}},{{(cartList.find(e=>e.id==eachProduct.id).amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[2]}}{{(cartList.find(e=>e.id==eachProduct.id).amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[1]}}{{(cartList.find(e=>e.id==eachProduct.id).amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[0]}}
            </div>
              <div class="title cart-product-infos">
                  <a class="delete" @click="deleteCartProduct(eachProduct.id)">刪除</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'Cart',
        data(){
            return {
                
            }
        },
        methods:{
            //caltype:計算方式，有plus和minus
            //speCartProduct:觸發此更改數量函式時，要被修改數量的產品(cartList Array中物件)
            //eachProduct: vueX產品Info列表中與被修改的產品相同ID的物件(productInfo Array中物件)(因在此元件中v-for出來的結構並不是直接以購物車中產品Array(state.cartList)為模板，而是以另一個產品Info Array(state.productInfo)為模板v-for出來的，因此需此參數再次進行比對確認)
            changeBuyNumBtn(caltype, eachProduct, speCartProduct){
                if(caltype=='plus') {
                    if (speCartProduct.amount >= eachProduct.remaining) return
                    this.$store.commit("Cart/CHANGECARTPRONUMPLUS",speCartProduct)
                } else {
                    if(speCartProduct.amount == 1) return
                    this.$store.commit("Cart/CHANGECARTPRONUMMINUS",speCartProduct)

                }
            },
            //speCartProduct:觸發此更改數量函式時，要被修改數量的產品(cartList Array中物件)
            //eachProduct: vueX產品Info列表中與被修改的產品相同ID的物件(productInfo Array中物件)(因在此元件中v-for出來的結構並不是直接以購物車中產品Array(state.cartList)為模板，而是以另一個產品Info Array(state.productInfo)為模板v-for出來的，因此需此參數再次進行比對確認)
            changeBuyNumInput($event, eachProduct, speCartProduct){
                if (Number($event.target.value) > eachProduct.remaining) {
                    this.$store.commit("Cart/CHANGECARTPRONUMINPUTREMAINING",eachProduct)
                } else if (Number($event.target.value) < 1) {
                    this.$store.commit("Cart/CHANGECARTPRONUMINPUTRSMALLTHAN0",eachProduct)                    
                } else if (isNaN(Number($event.target.value))) {
                    this.$store.commit("Cart/CHANGECARTPRONUMINPUTRSMALLTHAN0",eachProduct)                    
                }
            },
            deleteCartProduct(productID){
                this.$store.commit("Cart/DELETECARTPRODUCT",productID)
            }
        },
        computed:{
            ...mapState('Cart',['cartList','productInfo']),
        },
        mounted(){
            setTimeout(() => {
                //撈購物車中產品的資訊(如圖片、庫存量、名稱等)
                this.cartList.forEach(e => {
                    this.$store.dispatch("Cart/getCartProductInfo",e.id)
                })
            }, 10);
        },
    }
</script>

<style lang="scss" scoped>
    // 以下通用-----------------------
    $gbc-color:rgb(175, 224, 226);
    button {
        min-width: 2.5em;
        height:2.5em;
        border:0;
        cursor: pointer;
        
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
        background-color: rgb(174, 212, 158);
        .title-area {
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding:1.5rem;
            margin-top:1.5rem;
            background-color: $gbc-color;
            // .left {
            //     display:flex;
            //     align-items: center;
            //     .checkbox {
            //         display:flex;
            //         align-items: center;
            //         margin-right:1.5em;
            //     }
            // }
            // .right {
            //     display:flex;
            //     align-items: center;
            //     width: 50%;
            //     .title {
            //         width: 25%;
            //         text-align: center;
            //     }
            // }
        }
        .cart-panel {
            display:flex;
            align-items: center;
            justify-content: space-between;
            padding:1.5em;
            margin:1em 0;
            background-color:$gbc-color;
            .left {
                .product {
                    display:flex;
                    .img {
                        height: 6rem;
                        margin-right:1em;
                        margin-left:2em;
                        img {
                            height: 100%;
                        }
                    }
                }
            }
            .right {
                .cart-product-infos {
                    color:black;
                    // .amount-choose {
                    //     display:flex;
                    // }
                    .delete {
                        cursor:pointer;
                    }
                }
                #amount-relative {
                    display:flex;
                    flex-direction: column;
                }
            }
        }
    }
</style>