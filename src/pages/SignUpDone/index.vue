<template>
  <div class="SignUpDone-container">已註冊成功<br> 3秒後返回登入頁</div>
</template>

<script>
export default {
    name:"SignUpDone",
    mounted(){
        setTimeout(()=>{
            this.$router.push({
                name:'Member'
            })
        },3000)
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