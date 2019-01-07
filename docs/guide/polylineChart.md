# 折线图
折线图具有多种形态，使用方法如下

```html
<polyline-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="polylineChartTag" />

## 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|折线图数据及相关配置|`Object`|`null`
labelLine|否|折线图底部标签数据|`Object`|`null`
colors|否|折线图全局配色|`Array`|`default`
</full-width-table>

## 基本折线图
<div class="chart-container">
  <polyline-chart :data="polylineChartData1" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/polylineChartData/polylineChartData1.js
</fold-box>

## 折线图（曲线）
<div class="chart-container">
  <polyline-chart :data="polylineChartData2" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/polylineChartData/polylineChartData2.js
</fold-box>

## 折线图（虚线）
<div class="chart-container">
  <polyline-chart :data="polylineChartData3" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/polylineChartData/polylineChartData3.js
</fold-box>

## 折线图（填充）
<div class="chart-container">
  <polyline-chart :data="polylineChartData4" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/polylineChartData/polylineChartData4.js
</fold-box>

## 折线图（边界间隔）
<div class="chart-container">
  <polyline-chart :data="polylineChartData5" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/polylineChartData/polylineChartData5.js
</fold-box>

## 折线图（混合）
<div class="chart-container">
  <polyline-chart :data="polylineChartData6" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/polylineChartData/polylineChartData6.js
</fold-box>

<script>
import polylineChartData from './chartData/polylineChartData'

export default {
  data () {
    return {
      ...polylineChartData,

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
