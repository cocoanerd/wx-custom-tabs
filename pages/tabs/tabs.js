// pages/tabs/tabs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabsType: [//标签数组
      { name: "待审核" },
      { name: "已通过" },
      { name: "已拒绝" }
    ],
    currentType: 0,//当前选中的标签类型
    loadFlags: 0x0000,//各tab是否加载
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let curPage = this.selectComponent("#page0");
    curPage.refresh();
    this.setData({
      loadFlags: 0x0001
    });
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
    this.refresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let curPageIndex = `#page${this.data.currentType}`;
    let curPage = this.selectComponent(curPageIndex);
    curPage.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 点击tab切换 
  swichNav: function (res) {
    if (this.data.currentType == res.detail.currentNum) return;
    this.setData({
      currentType: res.detail.currentNum
    })
    this.calculate();
  },

  bindChange: function (e) {
    this.setData({
      currentType: e.detail.current
    })
    this.calculate();
  },

  //我在这里注释一下，怕以后在看的时候自己再费时间理解
  calculate: function () {
    //次方运算 1 2 4
    let tempFlag = Math.pow(2, this.data.currentType);
    // 按位与
    // 0x0001 & 0x0001 = 0x0001 1 已加载
    // 0x0001 & 0x0010 = 0x0000 0 未加载
    // 0x0001 & 0x0100 = 0x0000 0 未加载
    let hasLoaded = this.data.loadFlags & tempFlag;
    if (!hasLoaded) {//未加载
      this.refresh();//加载数据
      //获取当前加载状态 0x0001 已加载
      let curFlags = this.data.loadFlags;
      //修改状态
      this.setData({
        // 按位或
        // 0x0001 | 0x0000 = 0x0001
        // 0x0001 | 0x0000 = 0x0001
        loadFlags: (curFlags | tempFlag),
      });
    }
  },

  refresh: function () {
    let curPageIndex = `#page${this.data.currentType}`;
    let curPage = this.selectComponent(curPageIndex);
    curPage.refresh();
  },
})