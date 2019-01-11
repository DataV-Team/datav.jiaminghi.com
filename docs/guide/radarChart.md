# 雷达图
雷达图具有多种形态，使用方法如下

```html
<radar-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="radarChartTag" />

## 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|雷达图数据及相关配置|`Object`|`null`
labelLine|否|雷达图底部标签数据|`Object`|`null`
colors|否|雷达图全局配色|`Array`|`default`
</full-width-table>

## 基本雷达图
<div class="chart-container">
  <radar-chart :data="radarChartData1" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/radarChartData/radarChartData1.js
</fold-box>

## 雷达图（多边形）
<div class="chart-container">
  <radar-chart :data="radarChartData2" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/radarChartData/radarChartData2.js
</fold-box>

## 雷达图（平铺背景色）
<div class="chart-container">
  <radar-chart :data="radarChartData3" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/radarChartData/radarChartData3.js
</fold-box>

## 雷达图（层叠背景色）
<div class="chart-container">
  <radar-chart :data="radarChartData4" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/radarChartData/radarChartData4.js
</fold-box>

## 雷达图（环形背景色）
<div class="chart-container">
  <radar-chart :data="radarChartData5" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/radarChartData/radarChartData5.js
</fold-box>

<script>
import radarChartData from './chartData/radarChartData/index.js'

export default {
  data () {
    return {
      ...radarChartData,

      labelLine: {
        labels: ['标签1'],
        color: ['#526df5', '#fc30db'],
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