# 散点图
散点图的形态较为单一，使用方法如下

```html
<point-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="pointChartTag" />

## 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|散点图数据及相关配置|`Object`|`null`
labelLine|否|散点图底部标签数据|`Object`|`null`
colors|否|散点图全局配色|`Array`|`default`
</full-width-table>

## 基本散点图
<div class="chart-container">
  <point-chart :data="pointChartData1" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/pointChartData/pointChartData1.js
</fold-box>

## 散点图（点半径）
<div class="chart-container">
  <point-chart :data="pointChartData2" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/pointChartData/pointChartData2.js
</fold-box>

## 散点图（点透明）
<div class="chart-container">
  <point-chart :data="pointChartData3" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/pointChartData/pointChartData3.js
</fold-box>

## 散点图（点颜色）
<div class="chart-container">
  <point-chart :data="pointChartData4" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/pointChartData/pointChartData4.js
</fold-box>

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