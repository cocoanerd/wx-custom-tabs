// pages/tabs/tabs-item/tabs-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status: {
      type: String,
      value: '0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [],
    pageNum: 1,
    pageSize: 10,
    total: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onRetry() {
      console.log('刷新网络操作')
      this.refresh();
    },
    /* 下拉刷新 */
    refresh: function () {
      this.setData({
        pageNum: 1
      })
      this.netWork()
    },
    loadMore: function () {
      // 不分页不加载、加载完毕不加载
      if (this.data.total > this.data.list.length) {
        this.setData({
          pageNum: this.data.pageNum + 1
        })
        this.netWork()
      }
    },
    netWork: function () {
      this.setData({
        list: [{
          "id": 1,
          "contractNo": "001号",
          "totalGoodsValue": "10000.00",
          "businessStatus": null,
          "status": 1,
          "rentDesc": null
        }, {
            "id": 2,
            "contractNo": "001号",
            "totalGoodsValue": "10000.00",
            "businessStatus": null,
            "status": 1,
            "rentDesc": null
          }]
      })
      console.log(this.data.list)
      wx.stopPullDownRefresh()
    }
  }
})
