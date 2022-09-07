<template>
    <div class="product-detail-container">
        {{product}}
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
    .product-detail-container {
        background-color: rgb(138, 204, 138);
    }
</style>