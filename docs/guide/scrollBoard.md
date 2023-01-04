---
sidebarDepth: 2
---

# 轮播表

轮播表可以单条轮播也可以整页轮播，支持点击事件，展示数据使用**v-html**渲染，因此你可以传递`html`字符串，定制个性化元素。<react-page-btn />

::: tip TIP
组件内部没有设置`deep`监听props，数据变更时，请生成新的props，不然组件将无法刷新状态

`this.config.data = ['foo', 'foo']`是无效的

`this.config = { data: ['foo', 'foo'] }`才是有效的
:::

```html
<dv-scroll-board :config="config" style="width:500px;height:220px" />
```

<click-to-copy :info="scrollBoardTag" />

## 基本轮播表

<div class="chart-container">
  <dv-scroll-board :config="scrollBoard1" @click="clickHandler" style="width:500px;height:200px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollBoard/demo1.js
</fold-box>

## 附带表头

<div class="chart-container">
  <dv-scroll-board :config="scrollBoard2" @click="clickHandler" style="width:500px;height:220px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollBoard/demo2.js
</fold-box>

## 附带行号

<div class="chart-container">
  <dv-scroll-board :config="scrollBoard3" @click="clickHandler" style="width:500px;height:220px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollBoard/demo3.js
</fold-box>

## 整页滚动

<div class="chart-container">
  <dv-scroll-board :config="scrollBoard4" @click="clickHandler" style="width:500px;height:220px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollBoard/demo4.js
</fold-box>

## 定制元素

<div class="chart-container">
  <dv-scroll-board :config="scrollBoard5" @click="clickHandler" style="width:500px;height:220px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollBoard/demo5.js
</fold-box>

## config属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
header|表头数据|`Array<String>`|---|`[]`
data|表数据|`Array<Array>`|---|`[]`
rowNum|表行数|`Number`|---|`5`
headerBGC|表头背景色|`String`|---|`'#00BAFF'`
oddRowBGC|奇数行背景色|`String`|---|`'#003B51'`
evenRowBGC|偶数行背景色|`String`|---|`#0A2732`
waitTime|轮播时间间隔(ms)|`Number`|---|`2000`
headerHeight|表头高度|`Number`|---|`35`
columnWidth|列宽度|`Array<Number>`|[1]|`[]`
align|列对齐方式|`Array<String>`|[2]|`[]`
index|显示行号|`Boolean`|`true|false`|`false`
indexHeader|行号表头|`String`|`-`|`'#'`
carousel|轮播方式|`String`|`'single'|'page'`|`'single'`
hoverPause|悬浮暂停轮播|`Boolean`|---|`true`
</full-width-table>

## config相关注释

[1] `columnWidth`可以配置每一列的宽度，默认情况下每一列宽度相等。

[2] `align`可以配置每一列的对齐方式，可选值有`'left'|'center'|'right'`，默认值为`'left'`。

::: tip TIP
`columnWidth`与`align`允许尾部缺省：

```js
// 三列轮播表
columnWidth: [50]
// 剩下两列宽度将自动计算
```
:::

## click事件

当单元格被点击时（表头不支持），轮播表将抛出一个`click`事件，包含被点击的单元格的相关数据，打开控制台并点击上面例子中的轮播表可以查看事件数据。

## click事件数据属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
row|所在行数据|`Array<String>`|---|---
ceil|单元格数据|`Array<Array>`|---|`[]`
rowIndex|行索引|`Number`|---|---
columnIndex|列索引|`Number`|---|---
</full-width-table>

## mouseover事件

当鼠标悬浮在某个单元格上时（表头不支持），轮播表将抛出一个`mouseover`事件，包含被悬浮单元格的相关数据（与click事件数据相同）。

## updateRows方法<Badge>alpha</Badge>

如果想要不断**追加**行数据，又不想从头开始轮播，可以使用此方法更新行数据，不会导致从头轮播，也可以设置下次滚动的起始行。

```javascript
/**
 * @param {string[][]} rows 更新后的行数据
 * @param {number} index 下次滚动的起始行 （可缺省）
 */
function updateRows(rows, index) {
  // ...
}
```

```vue
<template>
  <dv-scroll-board :config="config" ref="scrollBoard" />
</template>

<script>
export default {
  data () {
    return () {
      config: {}
    }
  },
  methods () {
    doUpdate () {
      this.$refs['scrollBoard'].updateRows(rows, index)
    }
  }
}
</script>
```


<script>
import scrollBoard from './codeData/scrollBoard/index.js'

export default {
  data () {
    return {
      ...scrollBoard,

      scrollBoardTag: `<dv-scroll-board :config="config" style="width:500px;height:220px" />`,
    }
  },
  methods: {
    clickHandler (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  position: relative;
  height: 350px;
  background-color: #282c34;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
}
</style>
