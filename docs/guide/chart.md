# 图表

图表是数据可视化的主要手段，通过图表组件可以快速构建出绚丽多变的图表，
它们类似于eCharts，hightCharts，但更加轻量，使用时你需要设置他的宽高，并配置一些属性

::: tip
部分图表组件需要配置坐标轴，你可能需要先阅读坐标轴的相关配置项

[坐标轴](/axis/)
:::

## 基本属性
图表类组件具有三个固定的基本属性data、labelLine、和colors

## data
data属性的值应当为一个对象，包涵了图表的数据及相关配置。
该项为空、空对象或必填属性不存在时，图表不渲染，自动显示loading效果

## labelLine
labelLine用于配置底部标签，它的值也应当是一个对象。如果不配置该项，则不展示底部标签

## colors
colors用于配置图表的全局配色，如果不配置该项则采用默认配色方案，该值必须为hex十六进制色数组
```js
colors: ['#123456', '#654321']
```

::: tip
data及labelLine内部分颜色属性均可使用colors关键字指向全局配色
:::

## 柱状图
柱状图具有多种形态，通过配置不同的data可以达到不同的展示效果，使用方法如下

```html
<column-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="columnChartTag" />

## 基本柱状图
<div class="chart-container">
  <column-chart :data="columnChartData1" :colors="colors" class="chart" />
</div>

<<< @/test.js

<fold-box>
```js
```
</fold-box>

<script>
import columnChartData from './chart/columnChartData.js'

export default {
  data () {
    return {
      ...columnChartData,
      colors: ''
    }
  }
}
</script>

<style lang="less">
.chart-container {
  position: relative;
  height: 300px;
  min-width: 400px;
  background-color: #282c34;
  padding: 30px;

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