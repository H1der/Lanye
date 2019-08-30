// pages/index/index.js
var url = 'https://interface.meiriyiwen.com/article';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    author: '',
    content: ''
  },

  /**
   * 获取今天的文章
   */
  getTodayArticle: function(e) {
    var that = this;
    wx: wx.request({
      url: url + '/today?dev=1',
      method: 'GET',
      success: function(res) {
        // console.log(res);
        that.setData({
          title: res.data.data.title,
          author: res.data.data.author,
          content: res.data.data.content
        })
      },
      complete: function(res) {
        wx.pageScrollTo({
          scrollTop: 0,
          duration: 300
        });
      },
    })
  },

  /**
   * 随机获取文章
   */
  getRandomArticle: function(e) {
    var that = this;
    wx: wx.request({
      url: url + '/random?dev=1',
      method: 'GET',
      success: function(res) {
        // console.log(res)
        that.setData({
          title: res.data.data.title,
          author: res.data.data.author,
          content: res.data.data.content
        })
      },
      complete: function(res) {
        wx.stopPullDownRefresh();
      },
    })
  },
/**
 * 跳转到帮助页
 */
  goHelp: function () {
    wx.navigateTo({
      url: "../help/help"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getTodayArticle();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.getRandomArticle();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})