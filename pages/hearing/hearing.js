// pages/hearing/hearing.js
const { request } = require('../../utils/request.js')
const { hearingTop } = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topData: [],
    topList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const params = {
      ...hearingTop,
      data: {
        categoryId: 11,
        pageSize: 4,
        pageIndex: 1,
        withTotalCount: false
      }
    }
    request(params, data => {
      this.setData({
        topData: data.items[0],
        topList: data.items.slice(1)
      })
    })
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