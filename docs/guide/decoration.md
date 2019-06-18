# 装饰

你可以使用装饰去点缀你的页面，以增强视觉效果，与边框组件相同，他们也是用**SVG**元素绘制的。

::: warning
设置装饰组件的宽高是必须的，因为他们没有默认宽高。
:::

## dv-decoration-1
<div class="decoration-contaier">
  <dv-decoration-1 class="decoration" style="width:200px;height:50px;" />
</div>

```html
<dv-decoration-1 style="width:200px;height:50px;" />
```
<click-to-copy :info="info1" />

## dv-decoration-2
<div class="decoration-contaier">
  <dv-decoration-2 class="decoration" style="width:200px;height:5px;" />
</div>

```html
<dv-decoration-2 style="width:200px;height:5px;" />
```
<click-to-copy :info="info2" />

## dv-decoration-2(reverse)
<div class="decoration-contaier">
  <dv-decoration-2 :reverse="true" class="decoration" style="width:5px;height:150px;" />
</div>

```html
<dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
```
<click-to-copy :info="info2r" />

## dv-decoration-3
<div class="decoration-contaier">
  <dv-decoration-3 class="decoration" style="width:250px;height:30px;" />
</div>

```html
<decoration-3 style="width:250px;height:30px;" />
```
<click-to-copy :info="info3" />

## dv-decoration-4
<div class="decoration-contaier">
  <dv-decoration-4 class="decoration" style="width:5px;height:150px;" />
</div>

```html
<dv-decoration-4 style="width:5px;height:150px;" />
```
<click-to-copy :info="info4" />

## dv-decoration-4(reverse)
<div class="decoration-contaier">
  <dv-decoration-4 :reverse="true" class="decoration" style="width:250px;height:5px;" />
</div>

```html
<dv-decoration-4 :reverse="true" style="width:250px;height:5px;" />
```
<click-to-copy :info="info4r" />

## dv-decoration-5
<div class="decoration-contaier">
  <dv-decoration-5 class="decoration" style="width:300px;height:40px;" />
</div>

```html
<dv-decoration-5 style="width:300px;height:40px;" />
```
<click-to-copy :info="info5" />

## dv-decoration-6
<div class="decoration-contaier">
  <dv-decoration-6 class="decoration" style="width:300px;height:30px;" />
</div>

```html
<dv-decoration-6 style="width:300px;height:30px;" />
```
<click-to-copy :info="info6" />

## dv-decoration-7
<div class="decoration-contaier">
  <dv-decoration-7 class="decoration" style="width:150px;height:30px;">Decoration</dv-decoration-7>
</div>

```html
<dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>
```
<click-to-copy :info="info7" />

<script>
  export default {
    data () {
      return {
        info1: `<dv-decoration-1 style="width:200px;height:50px;" />`,
        info2: `<dv-decoration-2 style="width:200px;height:5px;" />`,
        info2r: `<dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />`,
        info3: `<decoration-3 style="width:250px;height:30px;" />`,
        info4: `<dv-decoration-4 style="width:5px;height:150px;" />`,
        info4r: `<dv-decoration-4 :reverse="true" style="width:250px;height:5px;" />`,
        info5: `<dv-decoration-5 style="width:300px;height:40px;" />"`,
        info6: `<dv-decoration-6 style="width:300px;height:30px;" />`,
        info7: `<dv-decoration-7 style="width:150px;height:30px;">Decoration</dv-decoration-7>`,
      }
    }
  }
</script>

<style lang="less">
.decoration-contaier {
  position: relative;
  height: 200px;
  background-color: #282c34;
  overflow: hidden;
  color: #fff;

  .decoration {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #7ec699;
    font-weight: bold;
  }
}
</style>

