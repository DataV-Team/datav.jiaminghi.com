---
sidebarDepth: 2
---

# 数字翻牌器

<react-page-btn />

```html
<dv-digital-flop :config="config" style="width:200px;height:50px;" />
```
<click-to-copy :info="digitalFlopTag" />

## 基本示例

<div class="chart-container" style="height: 150px;">
  <for-digital-flop :data="digitalFlop1" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/digitalFlop/demo1.js
</fold-box>

## 浮点数

<div class="chart-container" style="height: 150px;">
  <for-digital-flop :data="digitalFlop2" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/digitalFlop/demo2.js
</fold-box>

## 多数值

<div class="chart-container" style="height: 150px;">
  <for-digital-flop :data="digitalFlop3" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/digitalFlop/demo3.js
</fold-box>

## config属性

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

## 注释

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
import digitalFlop from './codeData/digitalFlop/index.js'

export default {
  data () {
    return {
      digitalFlopTag: '<dv-digital-flop :config="config" style="width:100px;height:50px;" />',

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