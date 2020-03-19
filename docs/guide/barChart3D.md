---
sidebarDepth: 2
---

# 3D柱状图

```html
<bar-chart-3D :config="config" :data="data" />
```
<click-to-copy :info="barChart3DTag" />

::: warning 数据更新
`config`属性未使用`watch`监听,当修改配置时可能需要刷新界面才生效
:::

图表组件基于D3封装，只需要将对应图表data数据传入组件即可。

<div class="chart-container">
  <bar-chart-3D :data="data" :config="config">
    <template v-slot:default="{ tipInfo }">
      <h1>品种信息：{{ tipInfo.name }}</h1>
      <h1>成交量：{{ tipInfo.value }}</h1>
    </template>
  </bar-chart-3D>
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/barChart3D/index.js
</fold-box>

## data属性[Array]

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
name|名称|`String`|---|---
value|值|`Number`|---|---
</full-width-table>

## config属性[Object]

::: warning 使用提示
`tipShow`需配合插槽使用

```html
<template v-slot:default="{ tipInfo }">
  <h1>品种信息：{{ tipInfo.name }}</h1>
  <h1>成交量：{{ tipInfo.value }}</h1>
</template>
```
:::

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
tipShow|悬浮窗|`Boolean`|`true|false`|false
yScale|Y轴配置|`Object`|`color, fontSize`|#636363, 14px
XScale|X轴配置|`Object`|`color, fontSize`|#636363, 14px
</full-width-table>

<script>
import barChart3D from './codeData/barChart3D/index.js'

export default {
  data () {
    return {
      ...barChart3D,

      barChart3DTag: `<dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />`,
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
