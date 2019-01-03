# 边框

边框的使用尤其方便，对于大部分来说你只需要设置他们的宽高即可

::: tip
部分边框使用SVG绘制，如果你想要改变此类边框的线条颜色，可以通过CSS去覆盖该边框SVG曲线的stroke属性

```css
.some-svg-class {
  stroke: green;
}
```
:::

## Border-Box-1
<div class="border-box-contaier">
  <border-box-1 class="box" />
</div>

```html
<border-box-1></border-box-1>
```
<click-to-copy :info="info1" />

## Border-Box-2
<div class="border-box-contaier">
  <border-box-2 class="box" />
</div>

```html
<border-box-2></border-box-2>
```
<click-to-copy :info="info2" />


## Border-Box-3
<div class="border-box-contaier">
  <border-box-3 class="box" />
</div>

```html
<border-box-3></border-box-3>
```
<click-to-copy :info="info3" />

## Border-Box-4
<div class="border-box-contaier">
  <border-box-4 class="box" />
</div>

```html
<border-box-4></border-box-4>
```
<click-to-copy :info="info4" />

## Border-Box-4(reverse)
<div class="border-box-contaier">
  <border-box-4 class="box" :reverse="true" />
</div>

```html
<border-box-4 :reverse="true"></border-box-4>
```

与上边的边框组件略有不同的是，该组件具有旋转形态，你只需要设置reverse属性为true即可

<click-to-copy :info="info4Reverse" />

## Border-Box-5
<div class="border-box-contaier">
  <border-box-5 class="box" />
</div>

```html
<border-box-5></border-box-5>
```
<click-to-copy :info="info5" />

## Border-Box-5(reverse)
<div class="border-box-contaier">
  <border-box-5 class="box" :reverse="true" />
</div>

```html
<border-box-5 :reverse="true"></border-box-5>
```
<click-to-copy :info="info5Reverse" />

## Border-Box-6
<div class="border-box-contaier">
  <border-box-6 class="box" />
</div>

```html
<border-box-6></border-box-6>
```
<click-to-copy :info="info6" />

## Border-Box-7
<div class="border-box-contaier">
  <border-box-7 class="box" />
</div>

```html
<border-box-7></border-box-7>
```
<click-to-copy :info="info7" />

<script>
export default {
  data () {
    return {
      info1: `<border-box-1></border-box-1>`,
      info2: `<border-box-2></border-box-2>`,
      info3: `<border-box-3></border-box-3>`,
      info4: `<border-box-4></border-box-4>`,
      info4Reverse: `<border-box-4 :reverse="true"></border-box-4>`,
      info5: `<border-box-5></border-box-5>`,
      info5Reverse: `<border-box-5 :reverse="true"></border-box-5>`,
      info6: `<border-box-6></border-box-6>`,
      info7: `<border-box-7></border-box-7>`
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
  }
}
</style>
