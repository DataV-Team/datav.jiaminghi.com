---
sidebarDepth: 2
---

# 特殊图表

这里提供一些基于**Charts**封装的图表。

## 动态环图

```html
<dv-active-ring-chart :config="config" style="width:300px;height:300px" />
```

<click-to-copy :info="activeRingChartTag" />

### 基本示例

<div class="chart-container">
  <dv-active-ring-chart :config="activeRingChart1" style="width:300px;height:300px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/activeRingChart/demo1.js
</fold-box>

### 线条粗细

<div class="chart-container">
  <dv-active-ring-chart :config="activeRingChart2" style="width:300px;height:300px" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/activeRingChart/demo2.js
</fold-box>

### 调节半径

<div class="chart-container fontsize">
  <dv-active-ring-chart :config="activeRingChart3" style="width:300px;height:300px;" />
</div>

<fold-box title="点击以展示/隐藏config数据">
<<< @/docs/guide/codeData/activeRingChart/demo3.js
</fold-box>

<script>
import activeRingChart from './codeData/activeRingChart/index.js'

export default {
  data () {
    return {
      activeRingChartTag: '<dv-active-ring-chart :config="config" style="width:200px;height:200px" />',

      ...activeRingChart
    }
  }
}
</script>

<style lang="less">
.chart-container {
  position: relative;
  height: 300px;
  background-color: #282c34;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7ec699;
  font-weight: bold;
}
</style>
