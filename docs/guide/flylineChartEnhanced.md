---
sidebarDepth: 2
---

# 飞线图增强版

配置若干飞线点后，你可以在任意两点间设置飞线，得到动态飞线图，组件提供的[dev模式](/guide/flylineChartEnhanced.html#dev模式)可以帮你快速配置飞线点位置。<react-page-btn />

```html
<dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
```
<click-to-copy :info="flylineChartTag" />

## 基本示例

<div class="chart-container">
  <dv-flyline-chart-enhanced :config="flylineChartEnhanced1" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChartEnhanced/demo1.js
</fold-box>

## 附带图标

<div class="chart-container">
  <dv-flyline-chart-enhanced :config="flylineChartEnhanced2" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChartEnhanced/demo2.js
</fold-box>

## 附带文本

<div class="chart-container">
  <dv-flyline-chart-enhanced :config="flylineChartEnhanced3" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChartEnhanced/demo3.js
</fold-box>

## 附带光晕

<div class="chart-container">
  <dv-flyline-chart-enhanced :config="flylineChartEnhanced4" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChartEnhanced/demo4.js
</fold-box>

## 凹聚飞线

<div class="chart-container">
  <dv-flyline-chart-enhanced :config="flylineChartEnhanced5" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChartEnhanced/demo5.js
</fold-box>

## 灵活配置

<div class="chart-container">
  <dv-flyline-chart-enhanced :config="flylineChartEnhanced6" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChartEnhanced/demo6.js
</fold-box>

## dev模式

组件提供了dev模式 (本页展示的Demo均已开启)，可以帮你快速确定飞线点位置，设置组件属性`dev`为`true`即可启用dev模式：

```html
<dv-flyline-chart-enhanced :config="config" :dev="true" style="width:200px;height:100px;" />
```
<click-to-copy :info="flylineChartTag2" />

::: tip TIP
开启dev模式后，请打开浏览器控制台，然后点击飞线图组件中你想要设置的飞线的起止点的位置，控制台会输出该点在组件中的位置信息即**Point**的`coordinate`属性：

`dv-flyline-chart-enhanced DEV:`

`Click Position is [100, 100]`

`Relative Position is [0.10, 0.10]`

组件默认使用相对坐标，应选用`Relative Position`，关闭相对坐标模式，则需要使用`Click Position`，如何开启和关闭相对坐标模式请查阅config属性。
:::

## config属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
points|飞线点|`Point[]`<sup>[1]</sup>|---|`[]`[Point](/guide/flylineChartEnhanced.html#point属性)
lines|飞线|`Flyline[]`<sup>[2]</sup>|---|`[]`[Flyline](/guide/flylineChartEnhanced.html#flyline属性)
halo|全局光晕配置|`Halo`|---|[halo](/guide/flylineChartEnhanced.html#halo属性)
text|全局文本配置|`Text`|---|[text](/guide/flylineChartEnhanced.html#text属性)
icon|全局图标配置|`Icon`|---|[icon](/guide/flylineChartEnhanced.html#icon属性)
line|全局飞线配置|`Line`|---|[line](/guide/flylineChartEnhanced.html#line属性)
bgImgSrc|背景图src|`String`|---|`''`
k|飞线收束程度<sup>[3]</sup>|`Number`|`-1 - 1`|`-0.5`
curvature|飞线曲率<sup>[4]</sup>|`Number`|`1 - 10`|`5`
relative|使用相对坐标<sup>[5]</sup>|`Boolean`|`true|false`|`true`
</full-width-table>

## Point属性

每个**Point**的`halo`、`text`、`icon`属性都会自动继承该属性的全局配置。

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
name|点名称|`String`|---|`-`
coordinate|点坐标|`Number[]`|---|`-`
halo|点光晕配置|`Halo`|---|[halo](/guide/flylineChartEnhanced.html#halo属性)
text|点文本配置|`Text`|---|[text](/guide/flylineChartEnhanced.html#text属性)
icon|点图标配置|`Icon`|---|[icon](/guide/flylineChartEnhanced.html#icon属性)
</full-width-table>

## Flyline属性

每个**Flyline**的`width`、`color`、`orbitColor`、`duration`、`radius`属性都会自动继承**config.line**下相同的属性配置。

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
source|飞线起点的点名称|`String`|---|`-`
target|飞线终点的点名称|`String`|---|`-`
width|飞线宽度|`Number`|---|`inherit`
color|飞线颜色|`String`|---|`inherit`
orbitColor|飞线轨迹颜色|`String`<sup>[6]</sup>|---|`inherit`
duration|飞线动画时长|`Number[]`<sup>[7]</sup>|---|`inherit`
radius|飞线显示半径|`Number`<sup>[8]</sup>|---|`inherit`
</full-width-table>

## halo属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
show|是否显示光晕|`Boolean`|---|`false`
duration|光晕动画时长|`Number[]`|---|`[20, 30]`
color|光晕颜色|`String`|---|`#fb7293`
radius|光晕最大半径|`Number`|---|`120`
</full-width-table>

## text属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
show|是否显示点名称|`Boolean`|---|`false`
offset|名称位置偏移|`Number[]`|---|`[0, 15]`
color|名称颜色|`String`|---|`#ffdb5c`
fontSize|名称文字大小|`Number`|---|`12`
</full-width-table>

## icon属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
show|是否显示点图标|`Boolean`|---|`false`
src|图标src|`String`|---|`''`
width|图标宽度|`Number`|---|`15`
height|图标高度|`Number`|---|`15`
</full-width-table>

## line属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
width|飞线宽度|`Number`|---|`1`
color|飞线颜色|`String`|---|`#ffde93`
orbitColor|轨迹颜色|`String`|---|`rgba(103, 224, 227, .2)`
duration|飞线动画时长|`Number[]`|---|`[20, 30]`
radius|飞线显示半径|`Number`|---|`100`
</full-width-table>

## 相关注释

[1] 飞线图的基本点，点的完整配置参见[Point属性](/guide/flylineChartEnhanced.html#point属性)

[2] 飞线图飞线，飞线完整配置参见[Flyline属性](/guide/flylineChartEnhanced.html#flyline属性)

[3] `k`值决定了飞线的收束程度，其取值范围为`-1 - 1`，当为负值时飞线呈凸形聚合，为正值时飞线呈凹形聚合。

[4] `curvature`决定了飞线的弯曲程度，其取值范围为`1 - 10`，该值越小，飞线曲率越大，该值越大，飞线曲率越小。

[5] `relative`用于控制是否启用**相对坐标模式**，因为飞线图组件的宽高可能是自适应的，如按百分比计算宽高，使用相对坐标模式可使飞线点的位置同样按飞线图组件宽高的百分比计算。默认启用相对坐标模式，请根据情况，选用Dev模式下输出的点坐标信息。

[6] 飞线的轨迹线默认颜色为`rgba(103, 224, 227, .2)`，如果想要隐藏轨迹线，可以设置`orbitColor`为`transparent`。

[7] `duration`用于计算动画时长（10 = 1s），`duration[0]`用于控制动画最短时长，`duration[1]`用于控制动画最长时长，动画时长将在此范围随机。如果想要设置固定的动画时长可以将他们的值设为相同的。

[8] `radius`控制了飞线的显示区域半径，该值越大，飞线显示范围越大，飞线越长，该值越小，飞线越短。

<script>
import flylineChartEnhanced from './codeData/flylineChartEnhanced/index.js'

export default {
  data () {
    return {
      flylineChartTag: '<dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />',
      flylineChartTag2: '<dv-flyline-chart-enhanced :config="config" :dev="true" style="width:200px;height:100px;" />',

      ...flylineChartEnhanced
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