---
sidebarDepth: 2
---

# 百分比

百分比相关的组件有水位图、百分比环、进度池等

## 水位图

水位图有三种形态，多种配置，具体使用示例如下

```html
<dv-water-level-pond :level="level" :other-attribute="otherAttribute" />
```
<click-to-copy :info="waterPondChartTag" />

### 基本水位图
<div class="chart-container">
  <dv-water-level-pond :level="[60, 40]" class="chart" />
</div>

```html
<dv-water-pond-chart :level="[60, 40]" />
```
<click-to-copy :info="waterPondChartTag1" />

### 矩形水位图
<div class="chart-container">
  <dv-water-level-pond :level="[60, 40]" type="rect" :waveNum="2" :waveHeight="0.3" class="chart" />
</div>

```html
<dv-water-level-pond :level="[60, 40]" type="rect" :waveNum="2" :waveHeight="0.3" />
```
<click-to-copy :info="waterPondChartTag2" />

### 矩形水位图（圆角）
<div class="chart-container">
  <dv-water-level-pond :level="[60, 40]" type="roundRect" borderColor="#3ce7c9" class="chart" />
</div>

```html
<dv-water-level-pond :level="[60, 40]" type="roundRect" borderColor="#3ce7c9" />
```
<click-to-copy :info="waterPondChartTag3" />

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
level|是|水位位置|`[Int]`<sup>[1]</sup>|`null`
colors|否|全局配色|`String|[String]`<sup>[2]</sup>|`default`
type|否|水位图类型|`String`<sup>[3]</sup>|`circle`
noGradient|否|关闭水位渐变色|`Boolean`<sup>[4]</sup>|`false`
waveNum|否|水位波浪数量|`Boolean`|`3`
waveHeight|否|水位波峰高度|`Int`<sup>[5]</sup>|`default`
borderColor|否|边框色|`String`<sup>[6]</sup>|`inherit`
</full-width-table>

::: warning
**colors**属性为`[String]`时，单个颜色必须为hex十六位色，使用其他类型颜色将引起渐变计算异常从而抛出致命错误
:::

### 注释

[1] **level**属性应为整型数组，可以展示多个波浪，水位图展示百分比选用最大值

[2] **colors**可以为`String`或`[String]`，使用字符串数组时，波浪自动启用渐变效果。
如果想要关闭该效果，应设置**noGradient: true**，此时如果有多个水位，颜色将循环应用于每个水位，
你可以使用该设置给每个水位设置不同颜色

[3] **type**可选值有三个`circle|rect|roundRect`即`圆|矩形|圆角矩形`，默认为**circle**

[4] 当**colors**为`[String]`时，用来关闭水位渐变效果

[5] **waveHeight**应为一个不大于**1**的数值，即水位波峰高度占水位图高度的百分比

[1] **borderColor**被设置时，水位图百分比文字颜色将与其一样

## 进度池

进度池只有一个属性，具体使用示例如下

```html
<percent-pond :percent="66" />
```
<click-to-copy :info="percentPondTag" />

### 示例
<div class="chart-container" style="height: 150px;">
  <percent-pond :percent="66" class="chart3" />
</div>

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
      percentArcTag2: `<percent-arc :percent="66" arcType="round" :ringLineWidth="8" :arcLineWidth="15"
        ringColor="#8537e7" :arcColor="['#2755fe', '#ff12cb']">66</percent-arc>`,
      percentPondTag: `<percent-pond :percent="66" />`
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

  .c1 {
    color: #8537e7 !important;
  }

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

  .chart3 {
    position: absolute;
    height: 100px;
    width: 200px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #37e3cd;
  }
}
</style>