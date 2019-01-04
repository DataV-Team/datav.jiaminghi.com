# 柱状图
柱状图是数据可视化的重要手段之一，它具有多种形态，通过配置不同的data可以达到不同的展示效果，使用方法如下

```html
<column-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="columnChartTag" />

## 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|柱状图数据及相关配置|`Object`|`null`
labelLine|否|柱状图底部标签数据|`Object`|`null`
colors|否|柱状图全局配色|`Array`|`default`
</full-width-table>

## 基本柱状图
<div class="chart-container">
  <column-chart :data="columnChartData1" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/columnChartData/columnChartData1.js
</fold-box>

## 阴影柱状图
<div class="chart-container">
  <column-chart :data="columnChartData2" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/columnChartData/columnChartData2.js
</fold-box>

## 多组柱状图
<div class="chart-container">
  <column-chart :data="columnChartData3" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/columnChartData/columnChartData3.js
</fold-box>

## 圆角柱状图
<div class="chart-container">
  <column-chart :data="columnChartData4" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/columnChartData/columnChartData4.js
</fold-box>

## 梯形柱状图
<div class="chart-container">
  <column-chart :data="columnChartData5" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/columnChartData/columnChartData5.js
</fold-box>

## 折线柱状图
<div class="chart-container">
  <column-chart :data="columnChartData6" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/columnChartData/columnChartData6.js
</fold-box>

## 折线柱状图(折线填充)
<div class="chart-container">
  <column-chart :data="columnChartData7" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/columnChartData/columnChartData7.js
</fold-box>

## 水平柱状图
<div class="chart-container">
  <column-chart :data="columnChartData8" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/columnChartData/columnChartData8.js
</fold-box>

## 极简柱状图
<div class="chart-container">
  <column-chart :data="columnChartData9" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/columnChartData/columnChartData9.js
</fold-box>

## Data特殊属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
horizon|否|柱状图是否为水平模式|`Boolean`|`false`
</full-width-table>

<script>
import columnChartData from './chart/columnChartData/index.js'

export default {
  data () {
    return {
      ...columnChartData,

      labelLine: {
        data: ['标签1'],
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
/* table {
  display: table;
  width: 100%;
} */
</style>