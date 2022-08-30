<template>
  <div>
    <input type="text" placeholder="搜尋..." name="q" v-model="keyword">
    <button >搜尋</button>

  </div>
</template>

<script>
import {mapState} from 'vuex'

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
    },
    computed:{
      ...mapState({
        productsList : state => state.Search.productsList,
      })
    }
}
</script>

<style lang="scss" scoped>

</style>