<template>
  <div>
      <!-- 上 -->
    <button>
      上一頁
    </button>
    <button >
      1
    </button>
    <button >···</button>
    <!-- 中間 -->
    <button  v-for="(page,index) in optNumAroundPageNow.end" :key="index" v-show="page>=optNumAroundPageNow.start">
      {{page}}
    </button>

    <!-- 下 -->
    <button >···</button>
    <button >
      {{pageTotal}}
    </button>
    <button >
      下一頁
    </button>

    <button style="margin-left: 30px">共{{pageTotal}}頁</button>
  </div>
</template>

<script>
export default {
    name:"Pagination",
    //pageNow:目前頁面, productsTotal:一共多少產品, productsShowNumInOnePage:一頁展示多少產品,
    //optionalPage:當前頁面前後可跳轉頁面數量(含當前頁面)
    props:['pageNow','productsTotal','productsShowNumInOnePage','optionalPage'],
    computed:{
        pageTotal(){
            return Math.ceil(this.productsTotal / this.productsShowNumInOnePage);
        },
        optNumAroundPageNow(){
            let start, end;

            if (this.pageTotal < this.optionalPage) {
                start = 1
                end = this.pageTotal
            } else {
                start = this.pageNow - parseInt(this.optionalPage / 2)
                end = this.pageNow + parseInt(this.optionalPage / 2)

                if (start < 1) {
                    start = 1;
                    end = this.optionalPage;
                    }
                
                if (end > this.pageTotal) {
                    end = this.pageTotal;
                    start = this.pageTotal - this.optionalPage + 1;
                }
            }
            return {start, end}

        }
    }
}
</script>

<style lang="scss" scoped>

</style>