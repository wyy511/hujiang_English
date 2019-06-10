// pages/hearing/hearing.js
const { request } = require('../../utils/request.js')
const { articleListByCategoryId, webTouchZt } = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topData: [],
    topList: [],
    midData: [],
    midList: [],
    scroll_height: 0,
    isRequest: false,
    isloading: '正在加载中...',
    midPage: {
      categoryId: 11,
      pageSize: 4,
      pageIndex: 3,
      withTotalCount: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopContent()
    this.getMidContent()
    this.getMidListContent()
  },

  // 滚动时触发
  scroll(e) {
    // console.log(e)
  },

  // 滚动到底部时触发
  lower(e) {
    const { midPage } = this.data
    this.setData({
      midPage: {
        ...midPage,
        pageIndex: midPage.pageIndex + 1
      }
    })
    this.getMidListContent()
  },

  getTopContent() {
    const params = {
      ...articleListByCategoryId,
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

  getMidContent() {
    const params = {
      ...webTouchZt,
      data: {
        adType: 3,
        webTouchCategory: 11,
        langs: 'en',
        isBest: false,
        pageIndex: 1,
        pageSize: 1
      }
    }
    request(params, data => {
      this.setData({
        midData: data.items[0]
      })
    })
  },

  getMidListContent() {
    const { isRequest } = this.data 
    if (isRequest) return
    const params = {
      ...articleListByCategoryId,
      data: this.data.midPage
    }
    this.setData({
      isRequest: true
    })
    request(params, data => {
      const { midList } = this.data
      this.setData({
        midList: midList.concat(data.items),
        isRequest: false
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getScrollHeight()
  },

  // 设置滚动的高度
  getScrollHeight() {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
      scroll_height: windowHeight * 750 / windowWidth
    })
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