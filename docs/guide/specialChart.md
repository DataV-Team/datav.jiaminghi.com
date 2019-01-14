---
sidebarDepth: 2
---

# 特殊图表
这里有一些特殊的图表介绍给你

## 错位环状图
```html
<arc-ring-chart :data="data" :labelLine="labelLine" :colors="colors" />
```
<click-to-copy :info="arcRingChartTag" />

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|环状图数据及相关配置|`Object`|`null`
labelLine|否|环状图底部标签数据|`Object`|`null`
colors|否|环状图全局配色|`Array`|`default`
</full-width-table>

<div class="chart-container">
  <arc-ring-chart :data="specialChartData1" :labelLine="specialLabelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/specialChartData/specialChartData1.js
</fold-box>

## 同心环状图

```html
<concentric-arc-chart :data="data" :colors="colors" />
```
<click-to-copy :info="concentricArcRingChartTag" />

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|环状图数据及相关配置|`Object`|`null`
colors|否|环状图全局配色|`Array`|`default`
</full-width-table>

<div class="chart-container">
  <concentric-arc-chart :data="specialChartData2" :colors="['#00c0ff', '#3de7c9']" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/chart/specialChartData/specialChartData2.js
</fold-box>

<script>
import specialChartData from './chartData/specialChartData'

export default {
  data () {
    return {
      ...specialChartData,

      specialLabelLine: {
        labels: 'inherit',
        type: 'rectangle'
      },

      labelLine: {
        labels: ['标签1'],
        color: ['#526df5', '#fc30db'],
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