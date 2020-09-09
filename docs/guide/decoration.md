---
sidebarDepth: 2
---

# 装饰

你可以使用装饰去点缀你的页面，以增强视觉效果，与边框组件相同，他们也是用**SVG**元素绘制的。<react-page-btn />

## 自定义颜色
所有装饰均支持自定义颜色，配置项及示例如下。

```html
<dv-decoration-1 :color="['red', 'green']" />
```

<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
color|自定义颜色|`string[]`|`-`|`-`
</full-width-table>

::: tip TIP
`color`属性支持配置两个颜色，一主一副。

颜色类型可以为颜色关键字、十六进制色、RGB及RGBA。
:::

## dv-decoration-1
<div class="decoration-contaier">
  <dv-decoration-1 style="width:200px;height:50px;" />
</div>

```html
<dv-decoration-1 style="width:200px;height:50px;" />
```
<click-to-copy :info="info1" />

## dv-decoration-2
<div class="decoration-contaier">
  <dv-decoration-2 style="width:200px;height:5px;" />
</div>

```html
<dv-decoration-2 style="width:200px;height:5px;" />
```
<click-to-copy :info="info2" />

### 配置
<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
dur|单次动画时长(秒)|`Number`|`-`|`6`
</full-width-table>

## dv-decoration-2(reverse)
<div class="decoration-contaier">
  <dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
</div>

```html
<dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
```
<click-to-copy :info="info2r" />

## dv-decoration-3
<div class="decoration-contaier">
  <dv-decoration-3 style="width:250px;height:30px;" />
</div>

```html
<dv-decoration-3 style="width:250px;height:30px;" />
```
<click-to-copy :info="info3" />

## dv-decoration-4
<div class="decoration-contaier">
  <dv-decoration-4 style="width:5px;height:150px;" />
</div>

```html
<dv-decoration-4 style="width:5px;height:150px;" />
```
<click-to-copy :info="info4" />

### 配置
<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
dur|单次动画时长(秒)|`Number`|`-`|`3`
</full-width-table>

## dv-decoration-4(reverse)
<div class="decoration-contaier">
  <dv-decoration-4 :reverse="true" style="width:250px;height:5px;" />
</div>

```html
<dv-decoration-4 :reverse="true" style="width:250px;height:5px;" />
```
<click-to-copy :info="info4r" />

## dv-decoration-5
<div class="decoration-contaier">
  <dv-decoration-5 style="width:300px;height:40px;" />
</div>

```html
<dv-decoration-5 style="width:300px;height:40px;" />
```
<click-to-copy :info="info5" />

### 配置
<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
dur|单次动画时长(秒)|`Number`|`-`|`1.2`
</full-width-table>

## dv-decoration-6
<div class="decoration-contaier">
  <dv-decoration-6 style="width:300px;height:30px;" />
</div>

```html
<dv-decoration-6 style="width:300px;height:30px;" />
```
<click-to-copy :info="info6" />

## dv-decoration-7
<div class="decoration-contaier font1">
  <dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>
</div>

```html
<dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>
```
<click-to-copy :info="info7" />

## dv-decoration-8
<div class="decoration-contaier">
  <dv-decoration-8 style="width:300px;height:50px;" />
</div>

```html
<dv-decoration-8 style="width:300px;height:50px;" />
```
<click-to-copy :info="info8" />

## dv-decoration-8(reverse)
<div class="decoration-contaier">
  <dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
</div>

```html
<dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />
```
<click-to-copy :info="info8r" />

## dv-decoration-9
<div class="decoration-contaier font2">
  <dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
</div>

```html
<dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
```
<click-to-copy :info="info9" />

### 配置
<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
dur|单次动画时长(秒)|`Number`|`-`|`3`
</full-width-table>

## dv-decoration-10
<div class="decoration-contaier font2">
  <dv-decoration-10 style="width:90%;height:5px;" />
</div>

```html
<dv-decoration-10 style="width:90%;height:5px;" />
```
<click-to-copy :info="info10" />

## dv-decoration-11
<div class="decoration-contaier font1">
  <dv-decoration-11 style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
</div>

```html
<dv-decoration-11 style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>
```
<click-to-copy :info="info11" />

## dv-decoration-12
<div class="decoration-contaier font1">
  <dv-decoration-12 style="width:150px;height:150px;" />
</div>

```html
<dv-decoration-12 style="width:150px;height:150px;" />
```
<click-to-copy :info="info12" />

### 配置
<full-width-table>
属性|说明|类型|可选值|默认值
:--:|:--:|:--:|:--:|:--:
scanDur|扫描动画时长(秒)|`Number`|`-`|`3`
haloDur|光晕动画时长(秒)|`Number`|`-`|`2`
</full-width-table>

<script>
  export default {
    data () {
      return {
        info1: `<dv-decoration-1 style="width:200px;height:50px;" />`,
        info2: `<dv-decoration-2 style="width:200px;height:5px;" />`,
        info2r: `<dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />`,
        info3: `<dv-decoration-3 style="width:250px;height:30px;" />`,
        info4: `<dv-decoration-4 style="width:5px;height:150px;" />`,
        info4r: `<dv-decoration-4 :reverse="true" style="width:250px;height:5px;" />`,
        info5: `<dv-decoration-5 style="width:300px;height:40px;" />"`,
        info6: `<dv-decoration-6 style="width:300px;height:30px;" />`,
        info7: `<dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>`,
        info8: `<dv-decoration-8 style="width:300px;height:50px;" />`,
        info8r: `<dv-decoration-8 :reverse="true" style="width:300px;height:50px;" />`,
        info9: `<dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>`,
        info10: `<dv-decoration-10 style="width:90%;height:5px;" />`,
        info11: `<dv-decoration-11 style="width:200px;height:60px;">dv-decoration-11</dv-decoration-11>`,
        info12: `<dv-decoration-12 style="width:150px;height:150px;" />`
      }
    }
  }
</script>

<style lang="less">
.decoration-contaier {
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  overflow: hidden;
  color: #fff;
}

.font1 {
  color: #7ec699;
  font-weight: bold;
}

.font2 {
  color: #7ec699;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 0 0 3px #7acaec;
}
</style>

