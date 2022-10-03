<template>
  <div class="SignUpDone-container">已註冊成功<br> 2秒後返回登入頁</div>
</template>

<script>
export default {
    name:"SignUpDone",
    data(){
        return {
            goBack:null
        }
    },
    mounted(){
        this.goBack = setTimeout(()=>{
            this.$router.push({
                name:'Member'
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
    .SignUpDone-container {
        text-align:center;
        font-size:1.5rem;
        padding:5rem 0; 
    }
</style>