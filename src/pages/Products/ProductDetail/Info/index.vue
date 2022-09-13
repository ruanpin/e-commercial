<template>
    <div class="info-container">
        <div class="product-intro-brief">
            <div class="product-info-title">商品規格</div>
            <div class="product-list">
                <div class="list-container" v-for="(detail,index) in product" :key="index">
                    <div class="info-title">{{detail.info.split(":")[0]}}</div>
                    <div class="info-detail">{{detail.info.split(":")[1]}}</div>
                </div>
            </div>
            
        </div>
        <div class="product-intro-detail">
            <div class="product-info-title">商品詳情</div>
            <div class="remider">
                <p>【溫馨提醒】</p>
                <p>◆ 退換貨須知：<br>商品到貨隔日享10天鑑賞(猶豫)期之權益【鑑賞(猶豫)期非試用期】，辦理退貨商品及贈品必須是全新狀態且包裝完整，否則將會影響退貨權益。</p>
                <p>◆ 商品會因為使用不同的品牌螢幕以及解析度不同，造成圖片顏色呈現略有不同，請以實品顏色為準。</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'Info',
        computed:{
            ...mapState('ProductDetail',['productDetail']),
            product(){
                return this.productDetail[0].detailInfo||[]
            },
        },
    }
</script>

<style lang="scss" scoped>
// 以下通用--------------------------
    .product-info-title {
        padding:1rem;
        background-color: rgb(250,250,250);
        font-size:1.3rem;
        margin-bottom:1rem;
    }
// 以上通用-----------------------------

    .info-container {
        padding:1rem;
        .product-intro-brief {
            .product-list {
                padding:1rem;
                .list-container {
                    display: flex;
                    margin-top: 1rem;
                    .info-title {
                        color:rgb(153,153,153);
                        width: 6rem;
                        font-size:1.15rem;
                    }
                    .info-detail {
                        font-size:1.15rem;
                    }
                }
            }
        }
        .product-intro-detail {
            line-height: 2rem;
            font-size: 1.15rem; 
        }
    }
</style>