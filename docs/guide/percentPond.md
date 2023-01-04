---
sidebarDepth: 2
---

# 进度池

<react-page-btn />

```html
<dv-percent-pond :config="config" style="width:200px;height:100px;" />
```
<click-to-copy :info="percentPondTag" />

## 基本示例
<div class="chart-container" style="height: 150px;">
  <dv-percent-pond :config="percentPond1" style="width:200px;height:100px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo1.js
</fold-box>

## 调节边框
<div class="chart-container" style="height: 150px;">
  <dv-percent-pond :config="percentPond2" style="width:200px;height:100px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo2.js
</fold-box>

## 线条间隙
<div class="chart-container" style="height: 150px;">
  <dv-percent-pond :config="percentPond3" style="width:200px;height:100px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo3.js
</fold-box>

## 局部渐变
<div class="chart-container" style="height: 150px;">
  <dv-percent-pond :config="percentPond4" style="width:200px;height:100px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo4.js
</fold-box>

## 定制块隙长度
<div class="chart-container" style="height: 150px;">
  <dv-percent-pond class="hidden-text" :config="percentPond5" style="width:300px;height:40px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/percentPond/demo5.js
</fold-box>

::: tip TIP
百分比标签已通过CSS`display:none`隐藏。
:::

## config属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
value|进度池数值|`Number`|`0-100`|`0`
colors|进度池配色|`Array<String>`|[1]|[2]
borderWidth|边框宽度|`Number`|---|`3`
borderGap|边框间隙|`Number`|---|`3`
lineDash|线条间隙|`Array<Number>`|---|`[5, 1]`
textColor|文字颜色|`String`|[1]|`#fff`
borderRadius|边框半径|`Number`|---|`5`
localGradient|局部渐变|`Boolean`|---|`false`
formatter|信息格式化|`String`|---|`'{value}%'`<sup>[3]</sup>
</full-width-table>

## 注释

[1] 颜色支持`hex|rgb|rgba|颜色关键字`等四种类型。

[2] 默认配色为`['#3DE7C9', '#00BAFF']`, 自动应用渐变色，若不想使用渐变色，请配置两个相同的颜色。

[3] 自动使用`value`的值替换字符串中的`'{value}'`标记。

<script>
import percentPond from './codeData/percentPond/index.js'

export default {
  data () {
    return {
      percentPondTag: '<dv-percent-pond :config="config" style="width:200px;height:100px;" />',

      ...percentPond
    }
  }
}
</script>

<style lang="less">
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

  .hidden-text {
    text {
      display: none;
    }
  }
}
</style>
