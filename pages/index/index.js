var TOP_API = "https://douban.uieee.com/v2/movie/top250";
var app = getApp();
var util = require('../../utils/util.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        start: 0,
        count: 20,
        text: "加载中......",
        movies: [],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.showLoading({
            title: "加载中...",
        });
        
        var param = {
            start: this.data.start,
            count: this.data.count
        }

        util.requestMethod(TOP_API, param, "application/xml", function(res) {
            wx.hideLoading();
            that.setData({
                text: res.data.title,
                movies: res.data.subjects
            });
        });


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
        console.log("下拉刷新...");
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        var that = this;
        var couT = this.data.count+20;
        console.log("上拉触底事件...",couT);
        this.setData({
          count:couT
        });
        var param = {
            start: this.data.start,
            count: this.data.count
        }

        util.requestMethod(TOP_API, param, "application/xml", function(res) {
            wx.hideLoading();
            that.setData({
                text: res.data.title,
                movies: res.data.subjects
            });
        });

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})