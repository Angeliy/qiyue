// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  // 开发性的数据定义在properties中,后台中获取
  properties: {
    like:{
      type:Boolean   
      // value的默认值是false
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

    yesSrc:'images/like.png',
    noSrc : 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function (event) {
     let like = this.properties.like;
     let count = this.properties.count;
     count = like?count-1:count+1;
    //  数据更新 serData
     this.setData({
       like:!like,
       count:count
     })
     //自定义事件
     let behavior = this.properties.like?'like':'cancel';
     //激活 triggerEvent()
     this.triggerEvent('like',{
       behavior: behavior
     },{})

    }
  }
})
