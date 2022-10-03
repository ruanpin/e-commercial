<template>
  <div class="cart-container">
        <div class="flowChart">
            <p class="page-title"><span>購物車</span></p>
            <p class="page-title space"><span :style="{backgroundColor: white, color:brown}">>></span></p>
            <p class="page-title"><span :style="{backgroundColor: white, color:brown}">結帳</span></p>
        </div>
      <div class="title-area">
            <div class="left">
                <div class="checkbox">
                    <input type="checkbox" id="allChecked" v-model="checkAll" :disabled="!cartList.length">
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
      <div class="cart-panel" v-for="eachProduct in cartList" :key="eachProduct.id">
          <div class="left">
                <div class="checkbox">
                    <input type="checkbox" id="allChecked" v-model="eachProduct.check" @change="checkhandler($event, eachProduct.id)">
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
                    <button class="minus" @click="changeBuyNumBtn('minus', eachProduct)"><i class="fa-solid fa-minus" ></i></button>
                    <input id="amount-input" class="buyNum-input" type="text" v-model.lazy="eachProduct.amount" @change="changeBuyNumInput($event, eachProduct)">
                    <button class="plus" @click="changeBuyNumBtn('plus', eachProduct)"><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="remaining">剩餘{{eachProduct.remaining}}件</div>
              </div>
              <div class="title cart-product-infos proPrice">
                  $ {{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[5]}}{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[4]}}{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[3]}},{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[2]}}{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[1]}}{{(eachProduct.amount*Number(eachProduct.price.split(',')[0]+eachProduct.price.split(',')[1])+'').split("").reverse()[0]}}
            </div>
              <div class="title cart-product-infos">
                  <a class="delete" @click="deleteCartProduct(eachProduct)">刪除</a>
              </div>
          </div>
      </div>
      <div class="checkout-panel">
          <div class="account-area">
              <div class="account">總金額 <span>$ {{finalTotalcheckedPrice}}</span></div>
              <button class="checkout-btn" @click="goOrder">去買單</button>
          </div>
          <div class="warn" v-show="isWarn">*請勾選至少一項</div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
// import Vue from 'vue'

    export default {
        name:'Cart',
        data(){
            return {
                totalcheckedPrice:0,
                isWarn:false,
                white:'rgb(255,255,255)',
                brown:'rgb(163,138,122)',
                pointer:'pointer'
            }
        },
        methods:{
            //caltype:計算方式，有plus和minus
            changeBuyNumBtn(caltype, eachProduct){
                if(caltype=='plus') {
                    if (eachProduct.amount >= eachProduct.remaining) return
                    this.$store.commit("Cart/CHANGECARTPRONUMPLUS",eachProduct)
                } else {
                    if(eachProduct.amount == 1) return
                    this.$store.commit("Cart/CHANGECARTPRONUMMINUS",eachProduct)

                }
            },
            changeBuyNumInput($event, eachProduct){
                if (Number($event.target.value) > eachProduct.remaining) {
                    this.$store.commit("Cart/CHANGECARTPRONUMINPUTREMAINING",eachProduct)
                } else if (Number($event.target.value) < 1) {
                    this.$store.commit("Cart/CHANGECARTPRONUMINPUTRSMALLTHAN0",eachProduct)                    
                } else if (isNaN(Number($event.target.value))) {
                    this.$store.commit("Cart/CHANGECARTPRONUMINPUTRSMALLTHAN0",eachProduct)                    
                } else {
                    let params = {
                        amount:Number($event.target.value),
                        eachProduct,
                    }
                    this.$store.commit("Cart/CHANGECARTPRONUMINPUTINRANGE",params)
                }
            },
            deleteCartProduct(product){
                // location.reload()
                // this.$forceUpdate();

                //發送刪除資訊至VueX中
                this.$store.commit("Cart/DELETECARTPRODUCT",product.id)

            },
            checkhandler($event, ID){
                // 更改vuex中指定產品勾選狀態
                let params = {
                    checkState : $event.target.checked,
                    id : ID
                }
                this.$store.commit("Cart/CHANGECHECKED",params)
            },
            goOrder(){
                let newCartList = this.cartList.filter( e => e.check == true)
                if (!newCartList.length) {
                    this.isWarn = true
                    
                } else {
                    if (!this.$store.state.Member.token) {
                        alert('請先登入')
                        this.$router.push({
                            name:'Member'
                        })  
                    } else {
                        this.$router.push({
                            name:'Order',
                            params:{
                                buyList:newCartList,
                                totalPrice:this.finalTotalcheckedPrice
                            }
                        })
                    }
                }
                
                
            }
        },
        computed:{
            ...mapState('Cart',['cartList']),
            finalTotalcheckedPrice(){
                //計算總金額
                let price 
                if (this.totalcheckedPrice>99999) {
                    price = ((this.totalcheckedPrice+'').split('').reverse()[6])||''+((this.totalcheckedPrice+'').split('').reverse()[5])+((this.totalcheckedPrice+'').split('').reverse()[4])+((this.totalcheckedPrice+'').split('').reverse()[3])+','+((this.totalcheckedPrice+'').split('').reverse()[2])+((this.totalcheckedPrice+'').split('').reverse()[1])+((this.totalcheckedPrice+'').split('').reverse()[0])
                } else if(this.totalcheckedPrice>9999) {
                    price = ((this.totalcheckedPrice+'').split('').reverse()[5])||''+((this.totalcheckedPrice+'').split('').reverse()[4])+((this.totalcheckedPrice+'').split('').reverse()[3])+','+((this.totalcheckedPrice+'').split('').reverse()[2])+((this.totalcheckedPrice+'').split('').reverse()[1])+((this.totalcheckedPrice+'').split('').reverse()[0])
                } else if (this.totalcheckedPrice>999) {
                    price = ((this.totalcheckedPrice+'').split('').reverse()[4])||''+((this.totalcheckedPrice+'').split('').reverse()[3])+','+((this.totalcheckedPrice+'').split('').reverse()[2])+((this.totalcheckedPrice+'').split('').reverse()[1])+((this.totalcheckedPrice+'').split('').reverse()[0])
                }
                
                if (this.totalcheckedPrice == 0) price = 0

                return price 
            },
            //判斷是否全選用變數
            checkedProduct(){
                return this.cartList.filter(e=>e.check == true)
            },
            //全選v-model綁定變數
            checkAll:{
                get(){
                    return this.checkedProduct.length === this.cartList.length && (this.cartList.length > 0)
                },
                set(value){
                    this.$store.commit("Cart/IFCHECKALL",value)
                }
            }
            
        },
        watch:{
            'cartList':{
                //偵測cartList中產品勾選狀態是否改變
                deep:true,
                handler(){
                    let result = 0
                    this.cartList.forEach(e=>{
                        if (e.check) {
                            result += Number(e.price.split(',')[0]+e.price.split(',')[1])*e.amount
                        }
                    })
                    this.totalcheckedPrice = result
                }
            }

        },
        mounted(){
            this.$store.dispatch("Cart/gettingProduct",JSON.parse(localStorage.getItem('cartProducts')) || [])
            //針對要直接購買的產品更改其勾選狀態
            if (this.$route.query.targetProduct) {
                this.$store.commit("Cart/DIRECTLYBUY",this.$route.query.targetProduct)
            }

        },
        
    
    }
</script>

<style lang="scss" scoped>
    // 以下通用-----------------------
    $gbc-color:rgb(245,245,245);
    .flowChart {
        display:flex;
        .page-title {
            font-size:1rem;
            font-weight: 700;
            margin-right:2rem;
        }
    }
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
                    
                    .delete {
                        cursor:pointer;
                    }
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
            .warn {
                position:absolute;
                transform:translate(-90%,-110%);
                color:rgb(220,53,69);
            }
        }
    }
</style>