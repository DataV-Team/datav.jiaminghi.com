# 环状图
环状图暂时具有两种形态，使用方法如下

```html
<ring-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="ringChartTag" />

## 静态环状图
<div class="chart-container">
  <ring-chart :data="ringChartData1" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/ringChartData/ringChartData1.js
</fold-box>

## 动态环状图
<div class="chart-container">
  <ring-chart :data="ringChartData2" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/ringChartData/ringChartData2.js
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
active|否|是否启用动态效果|`Boolean`|`false`
</full-width-table>

## series元素属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
value|是|单位数据值|`Int`|`null`
title|是|单位数据标题|`String`|`null`
</full-width-table>

<script>
import ringChartData from './codeData/ringChartData'

export default {
  data () {
    return {
      ...ringChartData,

      labelLine: {
        labels: 'inherit',
        type: 'rectangle'
      },
      colors: ['#66eece', '#ee66aa', '#66d7ee', '#eee966']
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