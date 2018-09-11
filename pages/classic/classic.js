
import {ClassicModel} from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'


let classicModel = new ClassicModel();
let likeModel = new LikeModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null,
    test:1

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res)=>{
      //数据绑定
      this.setData({
        classic : res
      })
    })
 
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   header:{
    //     appkey: 'hhA53iG9I2daVqND'
    //   },
    //   success:(res)=>{
    //     console.log(this.data.test)
    //   }
    // })
  },

  onLike: function (event) {
    console.log(event);
    //拿到like组件当前的状态
    let behavior = event.detail.behavior;
    likeModel.like(behavior,this.data.classic.id,this.data.classic.type);
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