<template>
  <div class="update-demo">
    <dv-percent-pond :config="config" style="width:200px;height:100px;" />
  </div>
</template>

<script>
export default {
  name: 'UpdateDemo',
  data () {
    return {
      config: {
        value: 66,
        lineDash: [10, 2]
      }
    }
  },
  methods: {
    // 更新数据的示例方法
    updateHandler () {
      const { config } = this

      /**
       * 只是这样做是无效
       * config指向的内存地址没有发生变化
       * 组件无法侦知数据变化
       */
      this.config.value = 90
      this.config.lineDash = [10, 4]

      /**
       * 使用ES6拓展运算符生成新的props对象
       * 组件侦知数据变化 自动刷新状态
       */
      this.config = { ...this.config }
    }
  }
}
</script>
