---
sidebarDepth: 2
---

# 轮播表

轮播表可以单条轮播也可以整页轮播，支持点击事件，展示数据使用**v-html**渲染，因此你可以传递标签字符串，定制个性化元素。

```html
<dv-scroll-board :config="config" />
```

<click-to-copy :info="scrollBoardTag" />

<script>
import scrollBoardData from './codeData/scrollBoardData/index.js'

export default {
  data () {
    return {
      ...scrollBoardData,

      scrollBoardTag: `<dv-scroll-board :config="config" />`,
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
