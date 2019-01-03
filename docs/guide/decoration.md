# 装饰

你可以使用装饰去点缀你的页面，以增强视觉效果，类似于边框组件，大部分装饰组件也只需要设置宽高即可

## Decoration-1
<div class="decoration-contaier">
  <decoration-1 class="decoration width" />
</div>

```html
<decoration-1 />
```
<click-to-copy :info="info1" />

## Decoration-2
<div class="decoration-contaier">
  <decoration-2 class="decoration width" />
</div>

```html
<decoration-2 />
```
<click-to-copy :info="info2" />

## Decoration-2(reverse)
<div class="decoration-contaier">
  <decoration-2 :reverse="true" class="decoration height" />
</div>

```html
<decoration-2 :reverse="true" />
```
<click-to-copy :info="info2r" />

## Decoration-3
<div class="decoration-contaier">
  <decoration-3 class="decoration width" />
</div>

```html
<decoration-3 />
```
<click-to-copy :info="info3" />

## Decoration-4
<div class="decoration-contaier">
  <decoration-4 class="decoration height" />
</div>

```html
<decoration-4 />
```
<click-to-copy :info="info4" />

## Decoration-4(reverse)
<div class="decoration-contaier">
  <decoration-4 :reverse="true" class="decoration width" />
</div>

```html
<decoration-4 :reverse="true" />
```
<click-to-copy :info="info4r" />

## Decoration-5
<div class="decoration-contaier">
  <decoration-5 class="decoration width" />
</div>

```html
<decoration-5 />
```
<click-to-copy :info="info5" />

## Decoration-6
<div class="decoration-contaier">
  <decoration-6 class="decoration width" />
</div>

```html
<decoration-6 />
```
<click-to-copy :info="info6" />

## Decoration-7
<div class="decoration-contaier">
  <decoration-7 class="decoration width">Decoration</decoration-7>
</div>

```html
<decoration-7>Decoration</decoration-7>
```
<click-to-copy :info="info7" />

<script>
  export default {
    data () {
      return {
        info1: `<decoration-1 />`,
        info2: `<decoration-2 />`,
        info2r: `<decoration-2 :reverse="true" />`,
        info3: `<decoration-3 />`,
        info4: `<decoration-4 />`,
        info4r: `<decoration-4 :reverse="true" />`,
        info5: `<decoration-5 />`,
        info6: `<decoration-6 />`,
        info7: `<decoration-7>Decoration</decoration-7>`,
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
  }

  .width {
    width: 300px;
  }

  .height {
    height: 130px;
  }
}
</style>

