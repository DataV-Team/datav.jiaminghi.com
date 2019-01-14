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

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|错位环状图数据及相关配置|`Object`|`null`
labelLine|否|错位环状图底部标签数据|`Object`|`null`
colors|否|错位环状图全局配色|`Array`|`default`
</full-width-table>

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
