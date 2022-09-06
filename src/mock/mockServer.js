import Mock from 'mockjs'

import products from './products.json'



Mock.mock('/mock/products','get',{code:200, data:products, amount:products.length})


// 以下為POST---------------------------------------------------
Mock.mock('/mock/products','post',function(options){
    // 將傳過來的params抓出來
    let reqParams = JSON.parse(options.body).data
    // 將keyword抓出來，方便使用
    let filterKeyword = reqParams.keyword
    // 將一頁呈現幾個拿出來
    let productsShowNumInOnePage = reqParams.productsShowNumInOnePage
    
    //過濾符合keyword的資料，保存在filterData變數
    let filterData = products.filter((data)=>{
        return data.name.includes(filterKeyword)
    })
    //先在Server處理要在頁面呈現那些資料，再回傳給前端，讓前端直接呈現，不需再做處理
    let slicedData = filterData


    // 過濾後回傳
    //(data:要被呈現的資料(不包含全部))
    //(amount:關鍵字查詢後總共的數據量)
    return {code:200, data:slicedData, amount:filterData.length}


})
