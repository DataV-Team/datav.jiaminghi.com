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

### 示例

<div class="chart-container">
  <arc-ring-chart :data="specialChartData1" :labelLine="specialLabelLine" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/specialChartData/specialChartData1.js
</fold-box>

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|数据及相关配置|`Object`|`null`
labelLine|否|底部标签数据|`Object`|`null`
colors|否|全局配色|`Array`|`default`
</full-width-table>

### data属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
series|是|数据|`[Object]`|`null`
</full-width-table>

### series元素属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
value|是|单位数据值|`Int`|`null`
title|是|单位数据标题|`String`|`null`
</full-width-table>

## 同心环状图

```html
<concentric-arc-chart :data="data" :colors="colors" />
```
<click-to-copy :info="concentricArcRingChartTag" />

### 示例

<div class="chart-container">
  <concentric-arc-chart :data="specialChartData2" :colors="['#00c0ff', '#3de7c9']" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/specialChartData/specialChartData2.js
</fold-box>

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|数据及相关配置|`Object`|`null`
colors|否|全局配色|`Array`|`default`
</full-width-table>

### data属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
series|是|数据|`Object`|`null`
arcArea|否|环区域范围区间|`[Int, Int]`|`default`
arcGap|否|环间距|`Int`|`default`
fontSize|否|标题文字大小|`Int`|`default`
</full-width-table>

### series元素属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
value|是|单位数据值|`Int`|`null`
title|是|单位数据标题|`String`|`null`
</full-width-table>

## 简易胶囊图

```html
<capsule-chart :data="data" :colors="colors" />
```
<click-to-copy :info="capsuleChartTag" />

### 示例

<div class="chart-container">
  <capsule-chart :data="specialChartData3" :colors="colors" class="chart" />
</div>

<fold-box>
<<< @/docs/guide/codeData/specialChartData/specialChartData3.js
</fold-box>

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|数据及相关配置|`Object`|`null`
colors|否|全局配色|`Array`|`default`
</full-width-table>

### data属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
series|是|数据|`[Object]`|`null`
</full-width-table>

### series元素属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
value|是|单位数据值|`Int`|`null`
title|是|单位数据标题|`String`|`null`
</full-width-table>

<script>
import specialChartData from './codeData/specialChartData'

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