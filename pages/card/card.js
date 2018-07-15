//引入模块
var util = require('../../util/util.js');

Page({
  submitForm: function(e){
    //获取value
    var obj = e.detail.value;
    //第一种传递方式，通过query
    //console.log(util.objToQuery(obj));
    //第二种通过storage存储
    wx.setStorage({
      key: 'cardData',
      data: obj,
      success:function(){
        //打开页面
        wx.navigateTo({
          url: '../index/index',
        })
      }
    })
  }
})