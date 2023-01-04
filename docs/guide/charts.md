# 图表

图表组件基于[Charts](http://charts.jiaminghi.com)封装，只需要将对应图表`option`数据传入组件即可。<react-page-btn />

::: tip TIP
当窗口发生**resize**时，图表组件会重新计算宽高以便于自适应。
:::

相关示例请移步[Charts实例](http://charts.jiaminghi.com/example/)

相关配置项请移步[Charts配置项](http://charts.jiaminghi.com/config/)

<div class="demo-container">
  <dv-charts :option="option" />
</div>

```html
<dv-charts :option="option" />
```
<click-to-copy :info="html" />

<fold-box title="点击以展示/隐藏option数据">
<<< @/docs/guide/codeData/charts/demo.js
</fold-box>

<script>
import option from './codeData/charts/demo.js'

export default {
  data () {
    return {
      option,

      html: '<dv-charts :option="option" />'
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
}
</style>