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
        mounted(){
            console.log(this.product)
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
    }
</style>