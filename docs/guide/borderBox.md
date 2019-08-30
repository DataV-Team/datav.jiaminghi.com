# 边框

边框均由**SVG**元素绘制，体积轻量不失真，它们的使用极为方便。

::: tip TIP
边框组件默认宽高均为100%，组件内容将被slot插槽分发至边框组件下class为`border-box-content`的容器内，如有布局需要，请针对该容器布局，以免产生样式冲突，导致边框显示异常。
:::

## dv-border-Box-1
<div class="border-box-contaier">
  <dv-border-box-1>dv-border-box-1</dv-border-box-1>
</div>

```html
<dv-border-box-1>dv-border-box-1</dv-border-box-1>
```
<click-to-copy :info="info1" />

## dv-border-box-2
<div class="border-box-contaier">
  <dv-border-box-2>dv-border-box-2</dv-border-box-2>
</div>

```html
<dv-border-box-2>dv-border-box-2</dv-border-box-2>
```
<click-to-copy :info="info2" />


## dv-border-box-3
<div class="border-box-contaier">
  <dv-border-box-3>dv-border-box-3</dv-border-box-3>
</div>

```html
<dv-border-box-3>dv-border-box-3</dv-border-box-3>
```
<click-to-copy :info="info3" />

## dv-border-box-4
<div class="border-box-contaier">
  <dv-border-box-4>dv-border-box-4</dv-border-box-4>
</div>

```html
<dv-border-box-4>dv-border-box-4</dv-border-box-4>
```
<click-to-copy :info="info4" />

## dv-border-box-4(reverse)
<div class="border-box-contaier">
  <dv-border-box-4 :reverse="true">dv-border-box-4</dv-border-box-4>
</div>

```html
<dv-border-box-4 :reverse="true">dv-border-box-4</dv-border-box-4>
```

与上边的边框组件略有不同的是，该组件具有翻转形态，你只需要设置reverse属性为true即可

<click-to-copy :info="info4Reverse" />

## dv-border-box-5
<div class="border-box-contaier">
  <dv-border-box-5>dv-border-box-5</dv-border-box-5>
</div>

```html
<dv-border-box-5>dv-border-box-5</dv-border-box-5>
```
<click-to-copy :info="info5" />

## dv-border-box-5(reverse)
<div class="border-box-contaier">
  <dv-border-box-5 :reverse="true">dv-border-box-5</dv-border-box-5>
</div>

```html
<dv-border-box-5 :reverse="true">dv-border-box-5</dv-border-box-5>
```
<click-to-copy :info="info5Reverse" />

## dv-border-box-6
<div class="border-box-contaier">
  <dv-border-box-6>dv-border-box-6</dv-border-box-6>
</div>

```html
<dv-border-box-6>dv-border-box-6</dv-border-box-6>
```
<click-to-copy :info="info6" />

## dv-border-box-7
<div class="border-box-contaier">
  <dv-border-box-7>dv-border-box-7</dv-border-box-7>
</div>

```html
<dv-border-box-7>dv-border-box-7</dv-border-box-7>
```
<click-to-copy :info="info7" />

## dv-border-box-8
<div class="border-box-contaier">
  <dv-border-box-8>dv-border-box-8</dv-border-box-8>
</div>

```html
<dv-border-box-8>dv-border-box-8</dv-border-box-8>
```
<click-to-copy :info="info8" />

## dv-border-box-9
<div class="border-box-contaier">
  <dv-border-box-9>dv-border-box-9</dv-border-box-9>
</div>

```html
<dv-border-box-9>dv-border-box-9</dv-border-box-9>
```
<click-to-copy :info="info9" />

## dv-border-box-10
<div class="border-box-contaier">
  <dv-border-box-10>dv-border-box-10</dv-border-box-10>
</div>

```html
<dv-border-box-10>dv-border-box-10</dv-border-box-10>
```
<click-to-copy :info="info10" />

<script>
export default {
  data () {
    return {
      info1: `<dv-border-box-1>dv-border-box-1</dv-border-box-1>`,
      info2: `<dv-border-box-2>dv-border-box-2</dv-border-box-2>`,
      info3: `<dv-border-box-3>dv-border-box-3</dv-border-box-3>`,
      info4: `<dv-border-box-4>dv-border-box-4</dv-border-box-4>`,
      info4Reverse: `<dv-border-box-4 :reverse="true">dv-border-box-4</dv-border-box-4>`,
      info5: `<dv-border-box-5>dv-border-box-5</dv-border-box-5>`,
      info5Reverse: `<border-box-5 :reverse="true">dv-border-box-5</dv-border-box-5>`,
      info6: `<dv-border-box-6>dv-border-box-6</dv-border-box-6>`,
      info7: `<dv-border-box-7>dv-border-box-7</dv-border-box-7>`,
      info8: `<dv-border-box-8>dv-border-box-8</dv-border-box-8>`,
      info9: `<dv-border-box-9>dv-border-box-9</dv-border-box-9>`,
      info10: `<dv-border-box-10>dv-border-box-10</dv-border-box-10>`,
    }
  }
}
</script>

<style lang="less">
.border-box-contaier {
  height: 300px;
  padding: 30px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #282c34;

  .border-box-content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #46bd87;
    font-weight: bold;
  }
}
</style>
