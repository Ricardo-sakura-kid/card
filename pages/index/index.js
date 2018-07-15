Page({
  //监听onload方法
  onLoad:function(){
    //获取storage存储
    wx.getStorage({
      key: 'cardData',
      success: function(res) {
        console.log(res);
      },
    })
  },
	gotoCreateCard:function(){
		//进入编辑页面
		wx.navigateTo({
			url: '../card/card'
		})
	}
})