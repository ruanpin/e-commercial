<template>
    <div class="product-detail-container">
        <div class="brief-intro">
            <div class="pic">
                <div class="product-img">
                    <img :src="productImgZoomIn[currentIndex]" alt="Image of product">
                </div>
                <div class="product-img-group">
                    <div class="imgList">
                        <img :src="img" alt="Images of product" v-for="(img,index) in product.imgList" :key="index" :class="{active:index == currentIndex}" @click="changeCurIndex(index)">
                    </div>
                </div>
                
            </div>
            <div class="brief-specifi">
                <div class="title">{{product.name}}</div>
                <div class="price">$ {{product.price}}</div>
                <div class="spe-choose-area">
                    <div class="amount">數量</div>
                    <div class="amount-choose">
                        <button class="minus" @click="changeBuyNumBtn('minus')"><i class="fa-solid fa-minus" ></i></button>
                        <input class="buyNum-input" type="text" v-model="buyNum" @change="changeBuyNumInput">
                        <button class="plus" @click="changeBuyNumBtn('plus')"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div class="remaining">剩餘{{product.remaining}}件</div>
                </div>
                <div class="cta-button">
                    <button class="cart" @click="addingProducts"><i class="fa-solid fa-cart-shopping"></i>加入購物車</button>
                    <button class="buyNow" @click="buyProducts" >直接購買</button>
                </div>
                <div class="addingSuccessTip" v-show="isAddingSuccess"><div class="p"><i class="fa-regular fa-circle-check"></i>加入購物車成功</div></div>
                
            </div>
        </div>
        <div class="info">
            <Info />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Info from './Info'
    export default {
        name:'ProductDetail',
        data(){
            return {
                buyNum:1,
                currentIndex:0,
                isAddingSuccess:false,
            }
        },
        components:{
            Info
        },
        methods:{
            changeBuyNumBtn(caltype){
                if(caltype=='plus') {
                    if (this.buyNum >= this.product.remaining) return
                    this.buyNum += 1
                } else {
                    if(this.buyNum == 1) return
                    this.buyNum -= 1
                }
            },
            changeBuyNumInput(event){
                if (event.target.value > this.product.remaining) {
                    this.buyNum = this.product.remaining
                } else if(event.target.value < 1) {
                    this.buyNum = 1
                } else if( isNaN(new Number(event.target.value)) ){
                    this.buyNum = 1
                }
            },
            changeCurIndex(clickedIndex){
                this.currentIndex = clickedIndex;
            },
            tipsTurnOn(){
                this.isAddingSuccess = true
                setTimeout(()=>{
                    this.isAddingSuccess = false
                },1500)
            },
            addingProducts(){
                let cartProduct = {
                    id:this.$route.params.productID,
                    amount:this.buyNum,
                    check:false,
                    price:this.productDetail[0].price,
                    imgUrl:this.productDetail[0].imgUrl,
                    name:this.productDetail[0].name,

                }
                let targetItem = this.cartList.find(e => e.id == cartProduct.id) ||[]
                let availableQuantity = this.productDetail[0].remaining - targetItem.amount
                //避免購物車產品超過庫存量------------------------
                // 先判斷購物車有沒有同樣產品
                if (this.cartList.find(e => e.id == cartProduct.id)){
                    // 如果購物車內同產品數量已>=商品庫存量則return
                    if (this.cartList.find(e => e.id == cartProduct.id).amount>=this.product.remaining) {
                        alert(`超過可購買數量，購物車中已有 ${this.cartList.find(e => e.id == cartProduct.id).amount} 件`)
                        return
                    } else if (this.cartList.find(e => e.id == cartProduct.id).amount+this.buyNum>this.product.remaining) {
                        // 如果購物車內同產品數量+本次購買數量已>商品庫存量則return
                        alert(`超過可購買數量，購物車中已有 ${this.cartList.find(e => e.id == cartProduct.id).amount} 件，可再加入 ${availableQuantity} 件`)
                        return
                    }
                    this.$store.dispatch("Cart/addingProduct",cartProduct)
                    this.tipsTurnOn()
                } else if(!(this.cartList.find(e => e.id == cartProduct.id))) { 
                    //若購物車中無同產品則加入
                    this.$store.dispatch("Cart/addingProduct",cartProduct)
                    this.tipsTurnOn()
                }
            },
            buyProducts(){
                let targetProduct = {
                    id:this.$route.params.productID,
                    amount:this.buyNum,
                    check:true,
                    price:this.productDetail[0].price
                }
                let targetItem = this.cartList.find(e => e.id == targetProduct.id) ||[]
                let availableQuantity = this.productDetail[0].remaining - targetItem.amount

                if (this.cartList.find(e => e.id == targetProduct.id)) {
                    if (this.cartList.find(e => e.id == targetProduct.id).amount>=this.product.remaining){
                        alert(`超過可購買數量，購物車中已有 ${this.cartList.find(e => e.id == targetProduct.id).amount} 件`)
                        return
                    } else if (this.cartList.find(e => e.id == targetProduct.id).amount+this.buyNum>this.product.remaining) {
                        // 如果購物車內同產品數量+本次購買數量已>商品庫存量則return
                        alert(`購物車中已有 ${this.cartList.find(e => e.id == targetProduct.id).amount} 件，可再購買 ${availableQuantity} 件`)
                        return
                    }
                    this.$store.commit("Cart/ADDINGPRODUCT",targetProduct)
                    this.$router.push({
                        name:'Cart',
                        query:{
                            targetProduct
                        }
                    })
                } else if (!(this.cartList.find(e => e.id == targetProduct.id))) {
                    this.$store.commit("Cart/ADDINGPRODUCT",targetProduct)
                    this.$router.push({
                        name:'Cart',
                        query:{
                            targetProduct
                        }
                    })
                }
                

            }
        },
        computed:{
            ...mapState('ProductDetail',['productDetail']),
            ...mapState('Cart',['cartList']),
            
            product(){
                return this.productDetail[0]||{}
            },
            productImgZoomIn(){
                return this.product.imgList||[]
            }
        },
        mounted(){
            //解決重新整理後數據被清空問題
            this.$store.dispatch("ProductDetail/postProductDetail",this.$route.params.productID)
        }
    }
</script>

<style lang="scss" scoped>
    button {
        min-width: 2.2em;
        height:2.2em;
        border:0;
        cursor: pointer;
        
    }
    input {
        border:0;
        text-align: center;
        width: 3em;
        cursor: text;
    }

    .product-detail-container {
        min-width: 100%;
        // background-color: rgb(138, 204, 138);
        display:flex;
        flex-direction: column;
        .brief-intro {
            display:flex;
            // background-color: rgb(138, 204, 138);
            .pic {
                margin-top: 0.5em;
                width: 50%;
                display:flex;
                flex-direction: column;
                align-items: center;
                .product-img {
                    width: 90%;
                    margin:auto;
                    img {
                        width: 100%;
                    }
                }
                .product-img-group {
                    width: 90%;
                    white-space: nowrap;
                    overflow-x: auto;
                    &::-webkit-scrollbar {
                        height: 10px;
                    }
                    &::-webkit-scrollbar-track {
                        background-color: #aaaaaa;
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color: rgba(0, 0, 0, 0.6); 
                        border-radius: 30px;
                    }
                    // &::-webkit-scrollbar-button {
                    //      background-color: #000000;
                    // }
                    &::-webkit-scrollbar-corner {
                        background-color: black;
                    }
                    .imgList {
                        display:flex;
                        width: 30%;
                        margin-top:1em;
                        img {
                            width: 100%;
                            cursor:pointer;
                            margin-right:0.5em;
                            margin-bottom:0.5em;
                            border:3px solid transparent;
                        }
                        .active {
                            border:3px solid rgb(77,95,44);
                        }
                    }
                }
            }
            .brief-specifi {
                width: 50%;
                .title {
                    font-size:1.8em;
                    margin-top:0.5em;
                }
                .price {
                    padding:0.3em 0em;
                    width: 90%;
                    font-size:1.8em;
                    margin-top:0.5em;
                    color:rgb(208,1,27);
                    background-color: rgb(250,250,250);
                }
                .spe-choose-area {
                    display:flex;
                    align-items: center;  
                    margin-top:2em;
                    min-height: 10em;
                    .amount {
                        width: 20%;
                        color:rgb(53, 53, 53);
                    }
                    .amount-choose {
                        width: 20%;
                        display:flex;
                        align-items: center;
                        i {
                            font-size:1.2rem;
                        }
                    }
                    .remaining {
                        color:rgb(53, 53, 53);
                    }
                }
                .cta-button {
                    display:flex;
                    margin-top:3em;
                    margin-bottom:3em;
                    button {
                        height: 4rem; 
                        padding:0rem 2rem;
                        background-color: rgb(250,250,250);
                        border-radius: 0.5rem;
                        margin-right:2rem;
                        font-size:1.2em;
                    }
                    .cart {
                        border : 2px solid rgb(101,122,141);
                        color:rgb(101,122,141);
                    }
                    .buyNow {
                        background-color: rgb(101,122,141);
                        color:#fff;
                    }
                }
                .addingSuccessTip {
                    position: absolute;
                    width: 30vw;
                    height: 30vh;
                    background-color: rgba(87, 87, 87 ,0.75);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: translate(-50%,-180%);
                    pointer-events:none;
                    .p {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        font-size: 1.2rem;
                        i {
                            font-size: 5rem;
                            margin-bottom:1.2rem;
                        }
                    }
                }
            }
        }
        .info {
            margin-top:1em;
            // background-color: rgb(180, 84, 84);
        }
    }
</style>