<template>
    <div class="product-detail-container">
        <div class="brief-intro">
            <div class="pic"></div>
            <div class="brief-specifi">
                <div class="title">{{product.name}}</div>
                <div class="price">$ {{product.price}}</div>
                <div class="spe-choose-area">
                    <div class="amount">數量</div>
                    <div class="amount-choose">
                        <button class="minus"><i class="fa-solid fa-minus"></i></button>
                        <input class="buyNum-input" type="text" value="1">
                        <button class="plus"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name:'ProductDetail',
        mounted(){

        },
        computed:{
            ...mapState('ProductDetail',['productDetail']),
            product(){
                return this.productDetail[0]
            }
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
        background-color: rgb(138, 204, 138);
        display:flex;
        flex-direction: column;
        .brief-intro {
            display:flex;
            .pic {
                width: 50%;
            }
            .brief-specifi {
                width: 50%;
                .spe-choose-area {
                    display:flex;
                    align-items: center;    
                    .amount {
                        width: 20%;
                    }
                    .amount-choose {
                        width: 80%;
                        display:flex;
                        .buyNum-input {
                            
                        }
                    }
                }
            }
        }
    }
</style>