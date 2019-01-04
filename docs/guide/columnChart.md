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

## Data属性表

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
series|是|柱状图绘制数据|`[Object]`|`null`
x|否|柱状图x轴数据|`Object`|`null`
y|否|柱状图y轴数据|`Object`|`null`
rx|否|柱状图x轴对侧数据|`Object`|`null`
ry|否|柱状图y轴对侧数据|`Object`|`null`
showColumnBG|否|是否显示柱背景|`boolean`|`false`
columnBGColor|否|柱背景色|`String`|`default`
roundColumn|否|是否设置圆角柱|`Boolean`|`false`
spaceBetween|否|柱间间隔（多列柱）|`Boolean`|`false`
localGradient|否|局部渐变<sup>[1]</sup>|`Boolean`|`false`
showValueText|否|是否显示柱值|`Boolean`|`false`
valueTextColor|否|全局柱值色彩|`String`|`default`
valueTextOffset|否|柱值偏移量|`[Int, Int]`|`default`
horizon|否|柱状图是否为水平模式|`Boolean`|`false`
</full-width-table>

## Series元素属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
value|是|柱状图单组数据|`Array`|`null`
fillColor|否|本组柱填充颜色|`String|Array`<sup>[2]</sup>|`null`
valueTextColor|否|本组柱值颜色|`String`<sup>[3]</sup>|`null`
type|否|本组数据展示状态|`String`<sup>[4]</sup>|`default`
lineType|否|线条类型（虚线或实线）|`String`|`default`
againstAxis|否|本组数据是否以对轴为基准|`Boolean`|`false`
lineColor|否|线条颜色(柱状形态无效)|`String`|`default`
pointColor|否|点颜色(柱状形态无效)|`String`|`default`
</full-width-table>

## 注释
[1] 仅在`fillColor`为数组时生效，默认全局渐变：渐变色起始位置为坐标轴顶部，结束位置为坐标轴底部；
局部渐变：渐变色起始位置为所在柱顶部，结束位置同全局渐变

[2]`fillColor`可以为字符串或数组，为字符串时，它应当是一个有效的颜色，例如`red`、`rgb(100, 100, 100)`、
`rgba(100, 100, 100, 0.5)`、`#123456`，如果是数组，每个数组元素应当满足上述要求。当为数组时，
本组柱的填充色将自动应用渐变（除非本组柱是多组柱），数组颜色渐变从柱顶部开始。当本组柱为多组柱时，
数组颜色将循环应用于构成多组柱的单柱

[3]`valueTextColor`可以强制指定本组柱值颜色，颜色类型要求同`fillColor`，当其值为`inherit`时，
本组柱值颜色将继承本组柱的填充颜色

[4]`type`的默认值是`column`：柱，它具有如下可选值`polyline`：折线、`smoothline`：平滑曲线、`leftEchelon`：左梯形、
`rightEchelon`：右梯形

<script>
import columnChartData from './chartData/columnChartData/index.js'

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
</style>