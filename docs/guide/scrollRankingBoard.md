---
sidebarDepth: 2
---

# 排名轮播表

排名轮播表同轮播表类似，也可以选择单条轮播或整页轮播。<react-page-btn />

```html
<dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
```

<click-to-copy :info="scrollRankingBoardTag" />

## 单条滚动

<div class="chart-container">
  <dv-scroll-ranking-board :config="scrollRankingBoard1" style="width:500px;height:300px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollRankingBoard/demo1.js
</fold-box>

## 整页滚动

<div class="chart-container">
  <dv-scroll-ranking-board :config="scrollRankingBoard2" style="width:500px;height:300px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollRankingBoard/demo2.js
</fold-box>

## 数值单位

<div class="chart-container">
  <dv-scroll-ranking-board :config="scrollRankingBoard3" style="width:500px;height:300px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollRankingBoard/demo3.js
</fold-box>

## 数值格式化

<div class="chart-container">
  <dv-scroll-ranking-board :config="scrollRankingBoard4" style="width:500px;height:300px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/scrollRankingBoard/demo4.js
</fold-box>

## config属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
data|表数据|`Array<Object>`|[data属性](/guide/scrollRankingBoard.html#data属性)|`[]`
rowNum|表行数|`Number`|---|`5`
waitTime|轮播时间间隔(ms)|`Number`|---|`2000`
carousel|轮播方式|`String`|`'single'|'page'`|`'single'`
unit|数值单位|`String`|---|`''`
sort|自动排序|`Boolean`|---|`true`
valueFormatter|数值格式化|`Function`|---|`undefined`
</full-width-table>

## data属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
name|名称|`String`|---|---
value|数值|`Number`|---|---
</full-width-table>

## valueFormatter参数属性

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
name|名称|`String`|---|---
value|数值|`Number`|---|---
percent|百分比|`Number`|---|---
ranking|排名|`Number`|---|---
</full-width-table>

::: tip TIP
`name`属性使用`v-html`进行渲染，因此你可以使用`html标签`来定制个性化的name展示效果。
:::

<script>
import scrollRankingBoard from './codeData/scrollRankingBoard/index.js'

export default {
  data () {
    return {
      ...scrollRankingBoard,

      scrollRankingBoardTag: `<dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />`,
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
