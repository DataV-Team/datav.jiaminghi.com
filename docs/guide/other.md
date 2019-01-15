---
sidebarDepth: 2
---

# 其他

暂未分类的组件在这里，他们也都是非常有用

## 全屏容器

全屏容器将根据屏幕比例，自动进行等比缩放，浏览器全屏后，全屏容器将充满屏幕

```html
<full-screen-container>content</full-screen-container>
```

<click-to-copy :info="fullScreenContainerTag" />

::: tip
全屏容器的父节点应设置**overflow: hidden**以避免滚动条的影响
:::

## 标签行
主要用于图表类组件底部标签展示（图表类组件多已内置）

```html
<label-line :label="label" :colors="colors" />
```
<click-to-copy :info="labelLineTag" />

::: tip
在高级组件中展示标签行时，标签行的**colors**属性值同所在高级组件的**colors**属性值，
如果想要设置不同的值，可以在**label**内配置**colors**属性
:::

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
label|是|标签行数据及相关配置|`Object`|`null`
colors|否|标签行全局配色|`[String]`|`null`
</full-width-table>

### 基本标签行

<div class="chart-container">
  <label-line :label="labelLineData1" :colors="colors" class="component" />
</div>

<fold-box>
<<< @/docs/guide/codeData/labelLineData/labelLineData1.js
</fold-box>

### 标签行（矩形色块）

<div class="chart-container">
  <label-line :label="labelLineData2" :colors="colors" class="component" />
</div>

<fold-box>
<<< @/docs/guide/codeData/labelLineData/labelLineData2.js
</fold-box>

### label属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
labels|是|标签行标签数据|`[String]`|`null`
type|否|标签行色块形状|`String`|`rect`
colors|否|标签行全局配色|`[String]`|`null`
</full-width-table>

::: warning
基本属性**colors**与**label**的下属属性**colors**，应有一项被配置
(高级组件中例外)，用来渲染色块。**label**下**colors**的值优先级高于基本属性**colors**的值
:::

## 数值卡片

数值卡片用来展示数字，使用方法如下

```html
<number-show :number="9999" />
```
<click-to-copy :info="numberShowTag" />

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
number|是|用于展示的数值|`String|Int`|`null`
</full-width-table>

### 使用效果

<div class="chart-container">
  <number-show :number="9999" class="component" />
</div>

<script>
import labelLineData from './codeData/labelLineData/index.js'

export default {
  data () {
    return {
      fullScreenContainerTag: `<full-screen-container>content</full-screen-container>`,

      ...labelLineData,

      numberShowTag: `<number-show :number="9999" />`,

      colors: ['#66eece', '#ee66aa', '#66d7ee', '#eee966']
    }
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  position: relative;
  height: 150px;
  background-color: #282c34;
  padding: 30px;
  overflow: hidden;

  .component {
    position: absolute;
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
  }
}
</style>