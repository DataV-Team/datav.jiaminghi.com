---
sidebarDepth: 2
---

# 飞线图

::: tip TIP
建议使用[飞线图增强版](/guide/flylineChartEnhanced.html)。
:::

设置一个中心点，若干飞线点，即可得到动态飞线图，组件提供的[dev模式](/guide/flylineChart.html#dev模式)可以帮你快速配置飞线点位置。<react-page-btn />

```html
<dv-flyline-chart :config="config" style="width:100%;height:100%;" />
```
<click-to-copy :info="flylineChartTag" />

## 基本示例

<div class="chart-container">
  <dv-flyline-chart :config="flylineChart1" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChart/demo1.js
</fold-box>

## 附带图标

<div class="chart-container">
  <dv-flyline-chart :config="flylineChart2" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChart/demo2.js
</fold-box>

## 附带文本

<div class="chart-container">
  <dv-flyline-chart :config="flylineChart3" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChart/demo3.js
</fold-box>

## 凹聚飞线

<div class="chart-container">
  <dv-flyline-chart :config="flylineChart4" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChart/demo4.js
</fold-box>

## dev模式

组件提供了dev模式 (本页展示的Demo均已开启)，可以帮你快速确定飞线点位置，设置组件属性`dev`为`true`即可启用dev模式：

```html
<dv-flyline-chart :config="config" :dev="true" style="width:200px;height:100px;" />
```
<click-to-copy :info="flylineChartTag2" />

::: tip TIP
开启dev模式后，请打开浏览器控制台，然后点击飞线图组件中你想要设置的飞线的起始点位置或中心点位置，控制台会输出该点在组件中的位置信息：

`dv-flyline-chart DEV:`

`Click Position is [100, 100]`

`Relative Position is [0.10, 0.10]`

组件默认使用相对坐标，应选用`Relative Position`，关闭相对坐标模式，则需要使用`Click Position`，如何开启和关闭相对坐标模式请查阅config属性。
:::

## config属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
centerPoint|中心点坐标|`Array<Number>`|---|`[0, 0]`
points|飞线起始点数据|`Array`<sup>[1]</sup>|---|`[]`
lineWidth|飞线宽度|`Number`|---|`1`
orbitColor|轨迹颜色|`String`|---|[2]
flylineColor|飞线颜色|`String`|---|`#ffde93`
k|飞线收束程度<sup>[3]</sup>|`Number`|`-1 - 1`|`-0.5`
curvature|飞线曲率<sup>[4]</sup>|`Number`|`1 - 10`|`5`
flylineRadius|飞线显示半径<sup>[5]</sup>|`Number`|---|`100`
duration|飞线动画时长|`Array<Number>`|---|`[20, 30]`<sup>[6]</sup>
relative|使用相对坐标<sup>[7]</sup>|`Boolean`|`true|false`|`true`
bgImgUrl|背景图url|`String`|---|`''`
text|文本配置项|`Object`|---|[text](/guide/flylineChart.html#text属性)
halo|光晕环配置项|`Object`|---|[halo](/guide/flylineChart.html#halo属性)
centerPointImg|中心点图片配置|`Object`|---|[centerPointImg](/guide/flylineChart.html#centerpointimg属性)
pointsImg|飞线点图片配置|`Object`|---|[pointsImg](/guide/flylineChart.html#pointsimg属性)
</full-width-table>

## config相关注释

[1] 飞线起始点数据的子元素可以为**数组**或**对象**，当为数组时，即点坐标数据；当为对象时，该对象包涵点坐标位置和文本信息。两种示例如下：

```js
// 子元素为数组
points = [
  // 飞线起始点的坐标
  [10, 10],
  [100, 100]
]

// 子元素为对象
points = [
  {
    position: [0.33, 0.52],
    // 飞线图自动显示该点文本信息
    text: '飞线点A'
  }
]
```

[2] 飞线的轨迹线默认颜色为`rgba(103, 224, 227, .2)`，如果想要隐藏轨迹线，可以设置`orbitColor`为`transparent`。

[3] `k`值决定了飞线的收束程度，其取值范围为`-1 - 1`，当为负值时飞线呈凸形聚合，为正值时飞线呈凹形聚合。

[4] `curvature`决定了飞线的弯曲程度，其取值范围为`1 - 10`，该值越小，飞线曲率越大，该值越大，飞线曲率越小。

[5] `flylineRadius`控制了飞线的显示区域半径，该值越大，飞线显示范围越大，飞线越长，该值越小，飞线越短。

[6] `duration`用于计算每一条飞线的动画时长（10 = 1s），`duration[0]`用于控制动画最短时长，`duration[1]`用于控制动画最长时长，飞线的动画时长将在此范围随机。如果想要每一条飞线的动画时长都相等可以将他们的值设为相同的。

[7] `relative`用于控制是否启用**相对坐标模式**，因为飞线图组件的宽高可能是自适应的，如按百分比计算宽高，使用相对坐标模式可使飞线点的位置同样按飞线图组件宽高的百分比计算。默认启用相对坐标模式，请根据情况，选用Dev模式下输出的点坐标信息。

## text属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
offset|文本位置偏移|`Array<Number>`|---|`[0, 15]`
color|文本颜色|`String`|---|`#ffdb5c`
fontSize|文本文字大小|`Number`|---|`12`
</full-width-table>

## halo属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
show|是否显示光晕环|`Boolean`|---|`true`
duration|动画时长|`Number`|---|`30`
color|光晕颜色|`String`|---|`#fb7293`
radius|光晕最大半径|`Number`|---|`120`
</full-width-table>

## centerPointImg属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
width|图片宽度|`Number`|---|`40`
height|图片高度|`Number`|---|`40`
url|图片url|`String`|---|`''`
</full-width-table>

## pointsImg属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
width|图片宽度|`Number`|---|`15`
height|图片高度|`Number`|---|`15`
url|图片url|`String`|---|`''`
</full-width-table>

<script>
import flylineChart from './codeData/flylineChart/index.js'

export default {
  data () {
    return {
      flylineChartTag: '<dv-flyline-chart :config="config" style="width:100%;height:100%;" />',
      flylineChartTag2: '<dv-flyline-chart :config="config" :dev="true" style="width:200px;height:100px;" />',

      ...flylineChart
    }
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  position: relative;
  height: 600px;
  background-color: #282c34;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7ec699;
  font-weight: bold;
}
</style>