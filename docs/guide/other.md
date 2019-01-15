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

## 标签行
主要用于图表类组件底部标签展示（图表类组件多已内置）

```html
<label-line :label="label" :colors="colors" />
```
<click-to-copy :info="''" />

### 基本属性

<full-width-table>
属性|是否必须|作用|类型|默认值
:--:|:--:|:--:|:--:|:--:
data|是|错位环状图数据及相关配置|`Object`|`null`
colors|否|错位环状图全局配色|`Array`|`default`
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
data|是|错位环状图数据及相关配置|`Object`|`null`
colors|否|错位环状图全局配色|`Array`|`default`
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