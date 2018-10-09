var SERCH_API = "https://douban.uieee.com/v2/movie/search";
var util = require('../../utils/util.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: "加载中...",
        movies: []
    },
    searchFun: function(e) {
      console.log("改变了...",e);
      var that = this;
        wx.showLoading({
            title: "加载中...",
        });
        
        util.requestMethod(SERCH_API+"?q="+e.detail.value, {}, "application/xml", function(res) {
            wx.hideLoading();
            that.setData({
                movies: res.data.subjects
            });
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {


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