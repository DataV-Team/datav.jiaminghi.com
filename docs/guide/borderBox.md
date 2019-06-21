# 边框

边框均由**SVG**元素绘制，体积轻量不失真，它们的使用极为方便。

::: warning
设置边框组件的宽高是必须的，因为他们没有默认宽高。
:::

## dv-border-Box-1
<div class="border-box-contaier">
  <dv-border-box-1 class="box">dv-border-box-1</dv-border-box-1>
</div>

```html
<dv-border-box-1>dv-border-box-1</dv-border-box-1>
```
<click-to-copy :info="info1" />

## dv-border-box-2
<div class="border-box-contaier">
  <dv-border-box-2 class="box">dv-border-box-2</dv-border-box-2>
</div>

```html
<dv-border-box-2>dv-border-box-2</dv-border-box-2>
```
<click-to-copy :info="info2" />


## dv-border-box-3
<div class="border-box-contaier">
  <dv-border-box-3 class="box">dv-border-box-3</dv-border-box-3>
</div>

```html
<dv-border-box-3>dv-border-box-3</dv-border-box-3>
```
<click-to-copy :info="info3" />

## dv-border-box-4
<div class="border-box-contaier">
  <dv-border-box-4 class="box">dv-border-box-4</dv-border-box-4>
</div>

```html
<dv-border-box-4>dv-border-box-4</dv-border-box-4>
```
<click-to-copy :info="info4" />

## dv-border-box-4(reverse)
<div class="border-box-contaier">
  <dv-border-box-4 :reverse="true" class="box">dv-border-box-4</dv-border-box-4>
</div>

```html
<dv-border-box-4 :reverse="true">dv-border-box-4</dv-border-box-4>
```

与上边的边框组件略有不同的是，该组件具有翻转形态，你只需要设置reverse属性为true即可

<click-to-copy :info="info4Reverse" />

## dv-border-box-5
<div class="border-box-contaier">
  <dv-border-box-5 class="box">dv-border-box-5</dv-border-box-5>
</div>

```html
<dv-border-box-5>dv-border-box-5</dv-border-box-5>
```
<click-to-copy :info="info5" />

## dv-border-box-5(reverse)
<div class="border-box-contaier">
  <dv-border-box-5 :reverse="true" class="box">dv-border-box-5</dv-border-box-5>
</div>

```html
<dv-border-box-5 :reverse="true">dv-border-box-5</dv-border-box-5>
```
<click-to-copy :info="info5Reverse" />

## dv-border-box-6
<div class="border-box-contaier">
  <dv-border-box-6 class="box">dv-border-box-6</dv-border-box-6>
</div>

```html
<dv-border-box-6>dv-border-box-6</dv-border-box-6>
```
<click-to-copy :info="info6" />

## dv-border-box-7
<div class="border-box-contaier">
  <dv-border-box-7 class="box">dv-border-box-7</dv-border-box-7>
</div>

```html
<dv-border-box-7>dv-border-box-7</dv-border-box-7>
```
<click-to-copy :info="info7" />

## dv-border-box-8
<div class="border-box-contaier">
  <dv-border-box-8 class="box">dv-border-box-8</dv-border-box-8>
</div>

```html
<dv-border-box-8>dv-border-box-8</dv-border-box-8>
```
<click-to-copy :info="info8" />

<script>
export default {
  data () {
    return {
      info1: `<dv-border-box-1>dv-border-box-1</dv-border-box-1>`,
      info2: `<dv-border-box-2>dv-border-box-2</dv-border-box-2>`,
      info3: `<dv-border-box-3>dv-border-box-3</dv-border-box-3>`,
      info4: `<dv-border-box-4>dv-border-box-4</dv-border-box-4>`,
      info4Reverse: `<border-box-4 :reverse="true">dv-border-box-4</dv-border-box-4>`,
      info5: `<dv-border-box-5>dv-border-box-5</dv-border-box-5>`,
      info5Reverse: `<border-box-5 :reverse="true">dv-border-box-5</dv-border-box-5>`,
      info6: `<dv-border-box-6>dv-border-box-6</dv-border-box-6>`,
      info7: `<dv-border-box-7>dv-border-box-7</dv-border-box-7>`,
      info8: `<dv-border-box-8>dv-border-box-8</dv-border-box-8>`
    }
  }
}
</script>

<style lang="less">
.border-box-contaier {
  position: relative;
  height: 300px;
  background-color: #282c34;
  overflow: hidden;

  .box {
    position: absolute;
    width: calc(~"100% - 60px");
    height: calc(~"100% - 60px");
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .border-box-content {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #46bd87;
      font-weight: bold;
    }
  }
}
</style>
