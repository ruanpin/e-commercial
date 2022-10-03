<template>
  <div class="OrderDone-container">訂單完成<br> 2秒後返回主頁</div>
</template>

<script>
export default {
    name:"OrderDone",
    data(){
        return {
            goBack:null
        }
    },
    mounted(){
        this.goBack = setTimeout(()=>{
            this.$router.push({
                name:'Home'
            })
        },2000)
    },
    beforeDestroy(){
        clearTimeout(this.goBack)
        this.goBack = null
    }
}
</script>

<style lang="scss" scoped>
    .OrderDone-container {
        text-align:center;
        font-size:1.5rem;
        padding:5rem 0; 
    }
</style>