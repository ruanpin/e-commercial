<template>
  <div>
    <input type="text" placeholder="搜尋..." name="q" v-model="keyword">
    <button >搜尋</button>
  </div>
</template>

<script>
export default {
    name:'Products',
    data(){
      return{
        keyword:'',
      }
    },
    methods:{
      // sendKeyword(){
      //   this.$router.push({})
      // }
    }
}
</script>

<style lang="scss" scoped>

</style>