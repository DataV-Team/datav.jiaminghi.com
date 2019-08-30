<template>
  <div class="left-chart-1">
    <div class="lc1-header">张三收费站</div>
    <div class="lc1-details">设备运行总数<span>430</span></div>
    <dv-capsule-chart class="lc1-chart" :config="config" />
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart1',
  data () {
    return {
      config: {
        data: [
          {
            name: '收费系统',
            value: 167
          },
          {
            name: '通信系统',
            value: 67
          },
          {
            name: '监控系统',
            value: 123
          },
          {
            name: '供配电系统',
            value: 55
          },
          {
            name: '其他',
            value: 98
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
.left-chart-1 {
  width: 100%;
  height: 37%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;

  .lc1-header {
    text-align: center;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 20px;
  }

  .lc1-details {
    height: 50px;
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

  .lc1-chart {
    flex: 1;
  }
}
</style>
