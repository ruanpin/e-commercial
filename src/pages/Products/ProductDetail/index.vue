<template>
    <div class="product-detail-container">
        <div class="brief-intro">
            <div class="pic">
                <div class="product-img">
                    <img :src="product.imgList[currentIndex]" alt="Image of product">
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
                    <button class="cart"><i class="fa-solid fa-cart-shopping"></i>加入購物車</button>
                    <button class="buyNow">直接購買</button>
                </div>
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
            }
        },
        computed:{
            ...mapState('ProductDetail',['productDetail']),
            product(){
                return this.productDetail[0]||{}
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
        min-width: 2em;
        height:2em;
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
            background-color: rgb(138, 204, 138);
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
                            border:3px solid rgb(255, 75, 75);
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
            }
        }
        .info {
            margin-top:1em;
            // background-color: rgb(180, 84, 84);
        }
    }
</style>