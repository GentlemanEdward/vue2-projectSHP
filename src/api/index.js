import requests from "./request";


// 首页三级分类
export const reqThreeList = () => requests({url: '/product/getBaseCategoryList', method: 'get'})

