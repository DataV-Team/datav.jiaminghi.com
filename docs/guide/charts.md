# 图表

图表组件基于[Charts](http://charts.jiaminghi.com)封装，只需要将对应图表数据传入组件即可。

::: tip
图表组件的宽高是必须的，因为他们没有默认宽高。当窗口发生`resize`时，图表组件会重新计算宽高以便于自适应。
:::

相关示例请移步[Charts实例](http://charts.jiaminghi.com/example/)

相关配置项请移步[Charts配置项](http://charts.jiaminghi.com/config/)

## 示例

<div class="demo-container">
  <dv-charts :config="config" />
</div>

```html
<dv-charts :config="config" />
```
<click-to-copy :info="html" />

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/charts/demo.js
</fold-box>

<script>
import config from './codeData/charts/demo.js'

export default {
  data () {
    return {
      config,

      html: '<dv-charts :config="config" />'
    }
  }
}
</script>

<style lang="less">
.demo-container {
  width: 100%;
  height: 300px;
  background-color: #282c34;
  border-radius: 6px;

  .dv-charts-container {
    width: 100%;
    height: 100%;
  }
}
</style>