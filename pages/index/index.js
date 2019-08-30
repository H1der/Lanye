// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:'',
      author:'',
      content:''
  },

  /**
   * 获取今天的文章
   */
  getTodayArticle:function(e){
    var that = this;
    wx: wx.request({
      url: 'https://interface.meiriyiwen.com/article/today?dev=1',
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) { 
       console.log(res);
        that.setData({
          title:res.data.data.title,
          author: res.data.data.author,
          content:res.data.data.content
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTodayArticle();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})