---
sidebarDepth: 2
---

# 特殊图表

这里提供一些特殊图表，他们有的基于[Charts](http://charts.jiaminghi.com)封装，有的直接基于[CRender](http://crender.jiaminghi.com)开发。

## 水位图

水位图有三种形态，多种配置，具体使用示例如下：

```html
<dv-water-level-pond :config="config" style="width:150px;height:200px" />
```
<click-to-copy :info="waterLevelPondTag" />


### 基本水位图

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
shape|水位图形状|`String`|<sup>[2]</sup>|`'rect'`
colors|水位图配色|`Array<String>`|`hex|rgb|rgba`|<sup>[3]</sup>
waveNum|波浪数量|`Number`|---|`3`
waveHeight|波浪高度|`Number`|---|`40`
waveOpacity|波浪透明度|`Number`|---|`0.4`
formatter|信息格式化|`String`|---|`'{value}%'`<sup>[4]</sup>
</full-width-table>

### 注释

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

### 注释

[1] 默认配色为`['#3DE7C9', '#00BAFF']`, 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

[2] 自动使用`value`的值替换字符串中的`'{value}'`标记。

### 飞线图

大多数地图都提供了飞线


<script>
import waterLevelPond from './codeData/waterLevelPond/index.js'
import percentPond from './codeData/percentPond/index.js'

export default {
  data () {
    return {
      waterLevelPondTag: '<dv-water-level-pond :config="config" style="width:150px;height:200px" />',

      percentPondTag: '<dv-percent-pond :config="config" style="width:200px;height:100px;" />',

      ...waterLevelPond,
      ...percentPond
    }
  }
}
</script>

<style>
.chart-container {
  position: relative;
  height: 300px;
  background-color: #282c34;
  padding: 30px;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7ec699;
  font-weight: bold;
}
</style>
