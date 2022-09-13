<template>
    <div class="info-container">
        <div class="product-intro-brief">
            <div class="product-info-title">商品規格</div>
            <ul class="product-list">
                <li>產地:義大利</li>
            </ul>
            
        </div>
        <div class="product-intro-detail">
            <div class="product-info-title">商品詳情</div>

        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'Info',
        computed:{
            ...mapState('ProductDetail',['productDetail']),

        }
    }
</script>

<style lang="scss" scoped>
// 以下通用--------------------------
    .product-info-title {
        padding:1rem;
        background-color: rgb(250,250,250);
        font-size:1.3rem;
    }
// 以上通用-----------------------------

    .info-container {
        padding:1rem;
        .product-intro-brief {
            .product-list {
                padding:1rem;
            }
        }
    }
</style>