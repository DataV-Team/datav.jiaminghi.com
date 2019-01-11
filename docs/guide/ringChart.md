# 环状图
环状图暂时具有两种形态，使用方法如下

```html
<ring-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="ringChartTag" />

## 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|环状图数据及相关配置|`Object`|`null`
labelLine|否|环状图底部标签数据|`Object`|`null`
colors|否|环状图全局配色|`Array`|`default`
</full-width-table>

## 静态环状图
<div class="chart-container">
  <ring-chart :data="ringChartData1" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/ringChartData/ringChartData1.js
</fold-box>

## 动态环状图
<div class="chart-container">
  <ring-chart :data="ringChartData2" :labelLine="labelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/ringChartData/ringChartData2.js
</fold-box>

<script>
import ringChartData from './chartData/ringChartData'

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