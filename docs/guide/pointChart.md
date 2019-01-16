# 散点图
散点图的形态较为单一，使用方法如下

```html
<point-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="pointChartTag" />

## 基本散点图
<div class="chart-container">
  <point-chart :data="pointChartData1" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/pointChartData/pointChartData1.js
</fold-box>

## 散点图（点半径）
<div class="chart-container">
  <point-chart :data="pointChartData2" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/pointChartData/pointChartData2.js
</fold-box>

## 散点图（点透明）
<div class="chart-container">
  <point-chart :data="pointChartData3" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/pointChartData/pointChartData3.js
</fold-box>

## 散点图（点颜色）
<div class="chart-container">
  <point-chart :data="pointChartData4" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/pointChartData/pointChartData4.js
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
radius|否|散点半径|`Int`|`default`
-|否|[坐标轴基本属性](/axis/#基本属性)|`-`|`-`
</full-width-table>

## Series元素属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
value|是|单组数据|`[Int]`|`null`
opacity|否|指定本组散点透明效果|`Boolean`|`false`
edgeColor|否|指定本组散点边线颜色|`String`|`inherit`
fillColor|否|指定本组散点填充颜色|`String`|`inherit`
</full-width-table>

<script>
import pointChartData from './codeData/pointChartData'

export default {
  data () {
    return {
      ...pointChartData,

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