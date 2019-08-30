<template>
  <div class="left-chart-2">
    <div class="lc2-header">李四收费站</div>
    <div class="lc2-details">设备运行总数<span>245</span></div>
    <dv-charts class="lc2-chart" :option="option" />
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
export default {
  name: 'LeftChart2',
  data () {
    return {
      option: {
        series: [
          {
            type: 'pie',
            data: [
              { name: '收费系统', value: 93 },
              { name: '通信系统', value: 32 },
              { name: '监控系统', value: 65 },
              { name: '供配电系统', value: 44 },
              { name: '其他', value: 52 }
            ],
            radius: ['45%', '65%'],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              labelLineEndLength: 10,
              formatter: '{percent}%\n{name}',
              style: {
                fontSize: 14,
                fill: '#fff'
              }
            }
          }
        ],
        color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
      }
    }
  }
}
</script>

<style lang="less">
.left-chart-2 {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;

  .lc2-header {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    text-indent: 20px;
    margin-top: 10px;
  }

  .lc2-details {
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

  .lc2-chart {
    height: calc(~"100% - 80px");
  }
}
</style>
