# 散点图
散点图的形态较为单一，使用方法如下

```html
<point-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="pointChartTag" />

<script>
import pointChartData from './chartData/pointChartData'

export default {
  data () {
    return {
      ...pointChartData,

      labelLine: {
        data: ['标签1'],
        color: ['#3de7c9'],
        type: 'rectangle'
      },
      colors: ''
    }
  }
}
</script>

<style lang="less">
.chart-container {
  position: relative;
  height: 300px;
  background-color: #282c34;
  padding: 30px;
  overflow: hidden;

  .chart {
    position: absolute;
    height: 300px;
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>