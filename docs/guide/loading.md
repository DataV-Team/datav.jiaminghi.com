# Loading加载

数据尚未加载完成时，可以显示Loading效果，增强用户体验。<react-page-btn />

<div class="chart-container">
  <dv-loading>Loading...</dv-loading>
</div>


```html
<dv-loading>Loading...</dv-loading>
```

<click-to-copy :info="loadingTag" />

<script>

export default {
  data () {
    return {
      loadingTag: `<dv-loading>Loading...</dv-loading>`
    }
  }
}
</script>

<style lang="less" scoped>
.chart-container {
  position: relative;
  height: 150px;
  background-color: #282c34;
  padding: 30px;
  overflow: hidden;
  color: #fff;
}
</style>