# 全屏容器

数据可视化页面一般在浏览器中进行全屏展示，全屏容器将根据屏幕比例及当前浏览器窗口大小，自动进行缩放处理。浏览器全屏后，全屏容器将充满屏幕。

::: tip TIP
建议在全屏容器内使用**百分比**搭配**flex**进行布局，以便于在不同的分辨率下得到较为一致的展示效果。
:::

```html
<dv-full-screen-container>content</dv-full-screen-container>
```

<click-to-copy :info="fullScreenContainerTag" />

<script>

export default {
  data () {
    return {
      fullScreenContainerTag: `<dv-full-screen-container>content</dv-full-screen-container>`
    }
  }
}
</script>