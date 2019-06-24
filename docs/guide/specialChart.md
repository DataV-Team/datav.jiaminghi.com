---
sidebarDepth: 2
---

# 特殊图表

这里提供一些特殊图表，他们有的使用`SVG`开发，有的则基于[Charts](http://charts.jiaminghi.com)或[CRender](http://crender.jiaminghi.com)封装。

## 动态环图

```html
<dv-active-ring-chart :config="config" style="width:200px;height:200px" />
```
<click-to-copy :info="activeRingChartTag" />

## 水位图

水位图有三种形态，多种配置，具体使用示例如下：

```html
<dv-water-level-pond :config="config" style="width:150px;height:200px" />
```
<click-to-copy :info="waterLevelPondTag" />

### 矩形水位图

<div class="chart-container">
  <dv-water-level-pond :config="waterLevelPond1" style="width:150px;height:200px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/waterLevelPond/demo2.js
</fold-box>

### 圆角水位图

<div class="chart-container">
  <dv-water-level-pond :config="waterLevelPond2" style="width:150px;height:200px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/waterLevelPond/demo2.js
</fold-box>

### 圆形水位图

<div class="chart-container">
  <dv-water-level-pond :config="waterLevelPond3" style="width:150px;height:200px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/waterLevelPond/demo3.js
</fold-box>

### config属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
data|水位位置<sup>[1]</sup>|`Arrya<Number>`|---|`[]`
shape|水位图形状|`String`|[2]|`'rect'`
colors|水位图配色|`Array<String>`|`hex|rgb|rgba`|<sup>[3]</sup>
waveNum|波浪数量|`Number`|---|`3`
waveHeight|波浪高度|`Number`|---|`40`
waveOpacity|波浪透明度|`Number`|---|`0.4`
formatter|信息格式化|`String`|---|`'{value}%'`<sup>[4]</sup>
</full-width-table>

### 水位图注释

[1] 可以有多个水位，但默认显示值最大的水位信息。

[2] 有三种形状可供选择：矩形`rect`、圆角矩形`roundRect`、圆形`round`。

[3] 默认配色为`['#00BAFF', '#3DE7C9']`, 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

[4] 自动使用最大的水位值替换字符串中的`'{value}'`标记。

## 进度池

```html
<dv-percent-pond :config="config" style="width:200px;height:100px;" />
```
<click-to-copy :info="percentPondTag" />

### 基本示例
<div class="chart-container" style="height: 150px;">
  <dv-percent-pond :config="percentPond1" style="width:200px;height:100px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo1.js
</fold-box>

### 调节边框
<div class="chart-container" style="height: 150px;">
  <dv-percent-pond :config="percentPond2" style="width:200px;height:100px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo2.js
</fold-box>

### 线条间隙
<div class="chart-container" style="height: 150px;">
  <dv-percent-pond :config="percentPond3" style="width:200px;height:100px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo3.js
</fold-box>

### 局部渐变
<div class="chart-container" style="height: 150px;">
  <dv-percent-pond :config="percentPond4" style="width:200px;height:100px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo4.js
</fold-box>

### config属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
value|进度池数值|`Number`|`0-100`|`0`
colors|进度池配色|`Array<String>`|`hex|rgb|rgba`|<sup>[1]</sup>
borderWidth|边框宽度|`Number`|---|`3`
borderGap|边框间隙|`Number`|---|`3`
lineDash|线条间隙|`Array<Number>`|---|`[5, 1]`
textColor|文字颜色|`String`|`hex|rgb|rgba`|`#fff`
borderRadius|边框半径|`Number`|---|`5`
localGradient|局部渐变|`Boolean`|---|`false`
formatter|信息格式化|`String`|---|`'{value}%'`<sup>[2]</sup>
</full-width-table>

### 进度池注释

[1] 默认配色为`['#3DE7C9', '#00BAFF']`, 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

[2] 自动使用`value`的值替换字符串中的`'{value}'`标记。

## 飞线图

设置一个中心点，若干飞线点，即可得到动态飞线图，组件提供的[dev模式](/guide/specialChart.html#dev模式)可以帮你快速配置飞线点位置。

```html
<dv-flyline-chart :config="config" style="width:100%;height:100%;" />
```
<click-to-copy :info="flylineChartTag" />

### 基本示例

<div class="chart-container" style="height: 600px;">
  <dv-flyline-chart :config="flylineChart1" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChart/demo1.js
</fold-box>

### 附带图标

<div class="chart-container" style="height: 600px;">
  <dv-flyline-chart :config="flylineChart2" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChart/demo2.js
</fold-box>

### 附带文本

<div class="chart-container" style="height: 600px;">
  <dv-flyline-chart :config="flylineChart3" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChart/demo3.js
</fold-box>

### 凹聚飞线

<div class="chart-container" style="height: 600px;">
  <dv-flyline-chart :config="flylineChart4" :dev="true" style="width:100%;height:100%;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/flylineChart/demo4.js
</fold-box>

### dev模式

组件提供了dev模式，可以帮你快速确定飞线点位置，设置组件属性`dev`为`true`即可启用dev模式：

```html
<dv-flyline-chart :config="config" :dev="true" style="width:200px;height:100px;" />
```
<click-to-copy :info="flylineChartTag2" />

::: tip
开启dev模式后，请打开浏览器控制台，然后点击飞线图组件中你想要设置的飞线的起始点位置或中心点位置，控制台会输出该点在组件中的位置信息：

`dv-flyline-chart DEV:`

`Click Position is [100, 100]`

`Relative Position is [0.10, 0.10]`

组件默认使用相对坐标，应选用`Relative Position`，关闭相对坐标模式，则需要使用`Click Position`，如何开启和关闭相对坐标模式请查阅config属性。
:::

### config属性

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
text|文本配置项|`Object`|---|[text](/guide/specialChart.html#text属性)
halo|光晕环配置项|`Object`|---|[halo](/guide/specialChart.html#halo属性)
centerPointImg|中心点图片配置|`Object`|---|[centerPointImg](/guide/specialChart.html#centerpointimg属性)
pointsImg|飞线点图片配置|`Object`|---|[pointsImg](/guide/specialChart.html#pointsimg属性)
</full-width-table>

### 进度池config相关注释

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

### text属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
offset|文本位置偏移|`Array<Number>`|---|`[0, 15]`
color|文本颜色|`String`|---|`#ffdb5c`
fontSize|文本文字大小|`Number`|---|`12`
</full-width-table>

### halo属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
show|是否显示光晕环|`Boolean`|---|`true`
duration|动画时长|`Number`|---|`30`
color|光晕颜色|`String`|---|`#fb7293`
radius|光晕最大半径|`Number`|---|`120`
</full-width-table>

### centerPointImg属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
width|图片宽度|`Number`|---|`40`
height|图片高度|`Number`|---|`40`
url|图片url|`String`|---|`''`
</full-width-table>

### pointsImg属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
width|图片宽度|`Number`|---|`15`
height|图片高度|`Number`|---|`15`
url|图片url|`String`|---|`''`
</full-width-table>

## 数字翻牌器

```html
<dv-digital-flop :config="config" style="width:200px;height:50px;" />
```
<click-to-copy :info="digitalFlopTag" />

### 基本示例

<div class="chart-container" style="height: 150px;">
  <for-digital-flop :data="digitalFlop1" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/digitalFlop/demo1.js
</fold-box>

### 浮点数

<div class="chart-container" style="height: 150px;">
  <for-digital-flop :data="digitalFlop2" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/digitalFlop/demo2.js
</fold-box>

### 多数值

<div class="chart-container" style="height: 150px;">
  <for-digital-flop :data="digitalFlop3" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/digitalFlop/demo3.js
</fold-box>

### config属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
number|数字数值<sup>[1]</sup>|`Array<Number>`|---|`[]`
content|内容模版<sup>[1]</sup>|`String`|---|`''`
toFixed|小数位数|`Number`|---|`0`
textAlign|水平对齐方式|`String`|[2]|`'center'`
style|样式配置|`Object`|[CRender Style](http://crender.jiaminghi.com/guide/style.html)|[3]
animationCurve|动效曲线|`String`|[Transition](http://transition.jiaminghi.com/curveTable/)|`'easeOutCubic'`
animationFrame|动效帧数|`Number`|[4]|`50`
</full-width-table>

### 数字翻牌器注释

[1] `number`中的元素将被用于替换`content`内容模版中的`{nt}`标记，其替换顺序与模版标记的顺序一一对应：

```js
const number = [1, 2, 3, 4]
const content = '数字{nt},数字{nt},数字{nt},数字{nt}'
// 实际显示效果：'数字1,数字2,数字3,数字4'
```

[2] `textAlign`用于设置文字的水平对齐方式，可选值为`'center'|'left'|'right'`，该值将覆盖`style`属性中的`textAlign`属性。

[3] `style`是[CRender](http://crender.jiaminghi.com)中用于配置样式的类，可使用`fill`属性设置字体颜色、`stroke`属性设置字体描边颜色、`fontSize`属性设置文字大小，更多配置请查阅[CRender Style](http://crender.jiaminghi.com/guide/style.html)。

```js
// 数字翻牌器style默认配置
style: {
  fontSize: 30,
  fill: '#3de7c9'
}
```

[4] `animationFrame`用于配置动画过程的帧数即动画时长。

<script>
import waterLevelPond from './codeData/waterLevelPond/index.js'
import percentPond from './codeData/percentPond/index.js'
import flylineChart from './codeData/flylineChart/index.js'
import digitalFlop from './codeData/digitalFlop/index.js'

export default {
  data () {
    return {
      waterLevelPondTag: '<dv-water-level-pond :config="config" style="width:150px;height:200px" />',
      percentPondTag: '<dv-percent-pond :config="config" style="width:200px;height:100px;" />',
      flylineChartTag: '<dv-flyline-chart :config="config" style="width:100%;height:100%;" />',
      flylineChartTag2: '<dv-flyline-chart :config="config" :dev="true" style="width:200px;height:100px;" />',
      digitalFlopTag: '<dv-digital-flop :config="config" style="width:100px;height:50px;" />',
      activeRingChartTag: '<dv-active-ring-chart :config="config" style="width:200px;height:200px" />',

      ...waterLevelPond,
      ...percentPond,
      ...flylineChart,
      ...digitalFlop
    }
  }
}
</script>

<style>
.chart-container {
  position: relative;
  height: 300px;
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
