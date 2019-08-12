// components/custom-tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleList: {//标题列表
      type: Array,
      value: []
    },
    currentTab: {//当前选中的标签
      type: Number,
      value: 0,
      observer: function (newVal, oldVal) {
        this.setData({
          currentTab: newVal
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击tab切换
    _swichNav: function (e) {
      this.triggerEvent('changeCurrent', {
        currentNum: e.currentTarget.dataset.current
      })
    }
  }
})
