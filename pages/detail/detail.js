var util = require('../../utils/util.js');
var DETAIL_API = "https://douban.uieee.com/v2/movie/subject/";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgSrc: null,
        title: null,
        year: null,
        rating: null,
        artists: [],
        casts: [],
        summary:null

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        console.log(options);

        util.requestMethod(DETAIL_API + options.id, {}, "application/xml", function(res) {
            console.log(res);
            that.setData({
                imgSrc: res.data.images.large,
                title: res.data.title,
                year: res.data.year,
                rating: res.data.rating.average,
                artists: res.data.directors,
                casts: res.data.casts,
                summary:res.data.summary
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