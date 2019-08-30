<template>
  <div class="right-chart-1">
    <div class="rc1-header">赵六收费站</div>

    <div class="rc1-chart-container">
      <div class="left">
        <div class="number">262</div>
        <div>设备运行总数</div>
      </div>

      <dv-capsule-chart class="right" :config="config" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightChart1',
  data () {
    return {
      config: {
        data: [
          {
            name: '收费系统',
            value: 25
          },
          {
            name: '通信系统',
            value: 66
          },
          {
            name: '监控系统',
            value: 123
          },
          {
            name: '供配电系统',
            value: 72
          },
          {
            name: '其他',
            value: 99
          }
        ],
        unit: '件'
      }
    }
  }
}
</script>

<style lang="less">
.right-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc1-header {
    font-size: 24px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }

  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }

  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
</style>
