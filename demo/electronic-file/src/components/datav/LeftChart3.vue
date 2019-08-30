<template>
  <div class="left-chart-3">
    <div class="lc3-header">王五收费站</div>
    <div class="lc3-details">设备运行总数<span>245</span></div>
    <dv-capsule-chart class="lc3-chart" :config="config" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart3',
  data () {
    return {
      config: {
        data: [
          {
            name: '收费系统',
            value: 78
          },
          {
            name: '通信系统',
            value: 54
          },
          {
            name: '监控系统',
            value: 123
          },
          {
            name: '供配电系统',
            value: 167
          },
          {
            name: '其他',
            value: 77
          }
        ],
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
        unit: '件'
      }
    }
  }
}
</script>

<style lang="less">
.left-chart-3 {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;

  .lc3-header {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    text-indent: 20px;
    margin-top: 10px;
  }

  .lc3-details {
    height: 40px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-indent: 20px;

    span {
      color: #096dd9;
      font-weight: bold;
      font-size: 35px;
      margin-left: 20px;
    }
  }

  .lc3-chart {
    flex: 1;
  }
}
</style>
