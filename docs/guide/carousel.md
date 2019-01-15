---
sidebarDepth: 2
---

# 轮播

轮播组件现仅有轮播表组件，其他相关组件正在开发中

## 轮播表
轮播表主要分为两种形态：单条轮播、整页轮播，使用示例如下

```html
<scroll-board :data="data" :other-attribute="otherAttribute" />
```
<click-to-copy :info="scrollBoardTag" />

::: tip
展示数据使用**v-html**渲染，因此你可以传递标签，定制个性化元素
:::

### 基本轮播表

<div class="chart-container">
  <scroll-board :data="scrollBoardData1" :textAlign="['center', 'center']" :columnWidth="[50, 50]" class="chart" />
</div>

```html
<scroll-board :data="data" :textAlign="['center', 'center']" :columnWidth="[50, 50]" />
```
<click-to-copy :info="scrollBoardTag1" />

<fold-box>
<<< @/docs/guide/codeData/scrollBoardData/scrollBoardData1.js
</fold-box>

### 轮播表（整页轮播）

<div class="chart-container">
  <scroll-board :data="scrollBoardData1" carousel="page" :textAlign="['center', 'center']" :columnWidth="[50, 50]" class="chart" />
</div>

```html
<scroll-board :data="data" carousel="page" :other-attribute="otherAttribute" />
```
<click-to-copy :info="scrollBoardTag2" />

<fold-box>
<<< @/docs/guide/codeData/scrollBoardData/scrollBoardData1.js
</fold-box>

### 轮播表（表头附带）

<div class="chart-container">
  <scroll-board :data="scrollBoardData2" :textAlign="['center', 'center']" :columnWidth="[50, 50]" class="chart" />
</div>

```html
<scroll-board :data="data" :textAlign="['center', 'center']" :columnWidth="[50, 50]" />
```
<click-to-copy :info="scrollBoardTag1" />

<fold-box>
<<< @/docs/guide/codeData/scrollBoardData/scrollBoardData2.js
</fold-box>

### 轮播表（索引附带）

<div class="chart-container">
  <scroll-board :data="scrollBoardData2" :index="true" :textAlign="['center', 'center']" :columnWidth="[40, 40, 40]" class="chart" />
</div>

```html
<scroll-board :data="data" :index="true" :other-attribute="otherAttribute" />
```
<click-to-copy :info="scrollBoardTag4" />

<fold-box>
<<< @/docs/guide/codeData/scrollBoardData/scrollBoardData2.js
</fold-box>

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|轮播表数据及相关配置|`Object`|`null`
index|否|轮播表行索引展示|`Boolean`|`false`
columnWidth|否|轮播表单列宽度|`[Int]`|`null`
textAlign|否|轮播表单列对齐方式|`[String]`|`null`
rowNum|否|轮播表固定行数|`Int`|`5`
oddBG|否|轮播表奇数行背景色|`String`|`default`
evenBG|否|轮播表偶数行背景色|`String`|`default`
titBG|否|轮播表表头背景色|`String`|`default`
carousel|否|轮播表轮播方式|`String`|`single`
waitTime|否|轮播表轮播等待时间|`Int(ms)`|`default`
</full-width-table>

::: tip
**columnWidth**与**textAlign**允许插入空串占位，占位自动使用默认值
:::

### data属性表
<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
series|是|轮播表展示数据|`[Array]`|`null`
title|否|轮播表表头数据|`[String]`|`null`
</full-width-table>

### 事件表
<full-width-table>
事件|触发|回调数据
:--:|:--:|:--:
click|点击表内元素|`Object`
</full-width-table>

#### click事件回调数据属性表
<full-width-table>
属性|作用|类型
:--:|:--:|:--:
data|点击行的数据|`Array`
rowIndex|点击行的行索引|`Int`
columnIndex|点击列的列索引|`Int`
</full-width-table>

::: tip
行列索引从**1**开始。使用**index: true**展示行索引时，行索引占一列
:::

<script>
import scrollBoardData from './codeData/scrollBoardData/index.js'

export default {
  data () {
    return {
      ...scrollBoardData,

      scrollBoardTag: `<scroll-board :data="data" />`,
      scrollBoardTag1: `<scroll-board :data="data" :textAlign="['center', 'center']" :columnWidth="[50, 50]" />`,
      scrollBoardTag2: `<scroll-board :data="data" carousel="page" :textAlign="['center', 'center']" :columnWidth="[50, 50]" />`,
      scrollBoardTag3: `<scroll-board :data="data" :textAlign="['center', 'center']" :columnWidth="[50, 50]" />`,
      scrollBoardTag4: `<scroll-board :data="data" :index="true" :textAlign="['center', 'center']" :columnWidth="[40, 40, 40]" />`
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
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
