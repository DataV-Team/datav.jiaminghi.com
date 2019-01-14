---
sidebarDepth: 2
---

# 百分比

百分比相关的组件有水位图、百分比环、进度池等


## 水位图

水位图有三种形态，多种配置，具体使用示例如下

```html
<water-level-pond :level="level" :other-attribute="otherAttribute" />
```
<click-to-copy :info="waterPondChartTag" />

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|错位环状图数据及相关配置|`Object`|`null`
labelLine|否|错位环状图底部标签数据|`Object`|`null`
colors|否|错位环状图全局配色|`Array`|`default`
</full-width-table>

### 基本水位图
<div class="chart-container">
  <water-level-pond :level="[60, 40]" class="chart" />
</div>

```html
<water-pond-chart :level="[60, 40]" />
```
<click-to-copy :info="waterPondChartTag1" />

### 矩形水位图
<div class="chart-container">
  <water-level-pond :level="[60, 40]" type="rect" :waveNum="2" :waveHeight="0.3" class="chart" />
</div>

```html
<water-level-pond :level="[60, 40]" type="rect" :waveNum="2" :waveHeight="0.3" />
```
<click-to-copy :info="waterPondChartTag2" />

### 矩形水位图（圆角）
<div class="chart-container">
  <water-level-pond :level="[60, 40]" type="roundRect" borderColor="#3ce7c9" class="chart" />
</div>

```html
<water-level-pond :level="[60, 40]" type="roundRect" borderColor="#3ce7c9" />
```
<click-to-copy :info="waterPondChartTag3" />

## 百分比环

百分比环也具有多种配置，具体使用示例如下

```html
<percent-arc :percent="66" :other-attribute="otherAttribute" />
```
<click-to-copy :info="percentArcTag" />

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|错位环状图数据及相关配置|`Object`|`null`
labelLine|否|错位环状图底部标签数据|`Object`|`null`
colors|否|错位环状图全局配色|`Array`|`default`
</full-width-table>

### 基本百分比环
<div class="chart-container">
  <percent-arc :percent="66" class="chart2">66</percent-arc>
</div>

```html
<percent-arc :percent="66">66</percent-arc>
```
<click-to-copy :info="percentArcTag1" />

### 圆角百分比环
<div class="chart-container">
  <percent-arc :percent="66" :arcLineWidth="15" arcType="round" class="chart2">66</percent-arc>
</div>

```html
<percent-arc :percent="66" :arcLineWidth="15" arcType="round">66</percent-arc>
```
<click-to-copy :info="percentArcTag2" />

<script>
export default {
  data () {
    return {
      waterPondChartTag: `<water-level-pond :level="level" />`,
      waterPondChartTag1: `<water-level-pond :level="[60, 40]" />`,
      waterPondChartTag2: `<water-level-pond :level="[60, 40]" type="rect" :waveNum="2" :waveHeight="0.3" />`,
      waterPondChartTag3: `<water-level-pond :level="[60, 40]" type="roundRect" borderColor="#3ce7c9" />`,
      percentArcTag: `<percent-arc :percent="66" />`,
      percentArcTag1: `<percent-arc :percent="66">66</percent-arc>`,
      percentArcTag2: `<percent-arc :percent="66" :arcLineWidth="15" arcType="round">66</percent-arc>`
    }
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  position: relative;
  height: 300px;
  background-color: #282c34;
  padding: 30px;
  overflow: hidden;

  .chart {
    position: absolute;
    height: 200px;
    width: 150px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .chart2 {
    position: absolute;
    height: 200px;
    width: 200px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #37e3cd;
    font-size: 50px;
    font-weight: bold;
  }
}
</style>