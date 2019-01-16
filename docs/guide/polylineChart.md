# 折线图
折线图具有多种形态，使用方法如下

```html
<polyline-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="polylineChartTag" />

## 基本折线图
<div class="chart-container">
  <polyline-chart :data="polylineChartData1" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/polylineChartData/polylineChartData1.js
</fold-box>

## 折线图（曲线）
<div class="chart-container">
  <polyline-chart :data="polylineChartData2" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/polylineChartData/polylineChartData2.js
</fold-box>

## 折线图（虚线）
<div class="chart-container">
  <polyline-chart :data="polylineChartData3" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/polylineChartData/polylineChartData3.js
</fold-box>

## 折线图（填充）
<div class="chart-container">
  <polyline-chart :data="polylineChartData4" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/polylineChartData/polylineChartData4.js
</fold-box>

## 折线图（边界间隔）
<div class="chart-container">
  <polyline-chart :data="polylineChartData5" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/polylineChartData/polylineChartData5.js
</fold-box>

## 折线图（混合）
<div class="chart-container">
  <polyline-chart :data="polylineChartData6" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/polylineChartData/polylineChartData6.js
</fold-box>

## 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|数据及相关配置|`Object`|`null`
labelLine|否|底部标签数据|`Object`|`null`
colors|否|全局配色|`Array`|`default`
</full-width-table>

## data属性表

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
series|是|数据及相关配置|`Object`|`null`
x|是|x轴数据|`Object`|`null`
y|否|y轴数据|`Object`|`null`
boundaryGap|否|启用两端间隙|`Boolean`|`false`
localGradient|否|启用局部填充渐变|`Boolean`|`false`
showValueText|否|是否显示数值|`Boolean`|`false`
valueTextFontSize|否|数值文字大小|`Int`|`default`
valueTextOffset|否|数值文字位置偏移|`[Int, Int]`|`default`
valueTextColor|否|数值文字颜色|`String`|`default`
-|否|[坐标轴基本属性](/axis/#基本属性)|`-`|`-`
</full-width-table>

## Series元素属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
value|是|单组数据|`[Int]`|`null`
type|否|设置线条类型（折线/曲线）|`String`<sup>[1]</sup>|`polyline`
lineType|否|线条类型（实线/虚线）|`String`<sup>[2]</sup>|`line`
lineColor|否|指定本组线条颜色|`String`|`inherit`
pointColor|否|指定本组点颜色|`String`|`inherit`
fillColor|否|指定本组填充颜色|`String|[String]`|`null`
</full-width-table>

## 注释

[1] **type**可选值有`polyline`和`smoothline`

[2] **lineType**可选值有`line`和`dashed`

<script>
import polylineChartData from './codeData/polylineChartData'

export default {
  data () {
    return {
      ...polylineChartData,

      labelLine: {
        labels: ['标签1'],
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
