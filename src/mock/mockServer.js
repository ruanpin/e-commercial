import Mock from 'mockjs'

import products from './products.json'



Mock.mock('/mock/products','get',{code:200, data:products})


// 以下為POST，只回傳包含keyword的data(以JSON資料的name屬性查詢)
Mock.mock('/mock/products','post',function(options){
    // 將keyword抓出來，方便使用
    let filterKeyword = JSON.parse(options.body).data.keyword
    //過濾符合keyword的資料
    let filterData = products.filter((data)=>{
        return data.name.includes(filterKeyword)
    })
    // 過濾後回傳
    return {code:200, data:filterData}
})
