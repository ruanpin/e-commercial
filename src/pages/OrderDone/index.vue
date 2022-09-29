<template>
  <div class="OrderDone-container">訂單完成<br> 3秒後返回主頁</div>
</template>

<script>
export default {
    name:"OrderDone",
    mounted(){
        setTimeout(()=>{
            this.$router.push({
                name:'Home'
            })
        },3000)
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