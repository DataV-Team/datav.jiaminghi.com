# 雷达图
雷达图具有多种形态，使用方法如下

```html
<radar-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="radarChartTag" />

## 基本雷达图
<div class="chart-container">
  <radar-chart :data="radarChartData1" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/radarChartData/radarChartData1.js
</fold-box>

## 雷达图（多边形）
<div class="chart-container">
  <radar-chart :data="radarChartData2" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/radarChartData/radarChartData2.js
</fold-box>

## 雷达图（平铺背景色）
<div class="chart-container">
  <radar-chart :data="radarChartData3" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/radarChartData/radarChartData3.js
</fold-box>

## 雷达图（层叠背景色）
<div class="chart-container">
  <radar-chart :data="radarChartData4" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/radarChartData/radarChartData4.js
</fold-box>

## 雷达图（环形背景色）
<div class="chart-container">
  <radar-chart :data="radarChartData5" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/radarChartData/radarChartData5.js
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
series|是|数据|`[Object]`|`null`
label|是|标题数据|`Object`|`null`
rayLineType|否|径向射线线条类型|`String`|`line`
rayLineColor|否|径向射线颜色|`String`|`default`
ringNum|否|雷达环数量|`Int`|`default`
ringType|否|雷达环类型|`Object`|`default`
ringFillType|否|雷达环色渲染类型|`String`|`default`
ringFillColor|否|雷达环渲染颜色|`String|[String]`|`null`
ringLineType|否|雷达环线条类型|`String`|`dashed`
ringLineColor|否|雷达环线条颜色|`String|[String]`|`dashed`
rayLineOffset|否|雷达图旋转角度|`Int`|`default`
radius|否|雷达环最大半径|`Int`|`default`
max|否|指定最大值|`Int`|`auto`
showValueText|否|是否显示数值|`Boolean`|`false`
valueTextFontSize|否|数值文字大小|`Boolean`|`false`
valueTextOffset|否|数值文字位置偏移|`Boolean`|`false`
valueTextColor|否|数值文字颜色|`Boolean`|`false`
</full-width-table>

## series元素属性表

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
value|是|数据|`[Int]`|`null`
dashed|否|指定本组区域虚线描边|`Boolean`|`false`
lineColor|否|指定本组区域描边颜色|`String`|`inherit`
fillColor|否|指定本组区域填充颜色|`String`|`inherit`
valueTextColor|否|指定本组数值颜色|`String`|`default`
</full-width-table>


<script>
import radarChartData from './codeData/radarChartData/index.js'

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