<template>
  <div id="dev-container">
    <dv-charts :option="option" style="width:300px;height:300px" />
  </div>
</template>

<script>
let option = `{"legend":{"data":[{"name":"下订单数量","color":"#ff5ca9"}],"textStyle":{"fill":"#fff"}},"xAxis":["2018-08-05","2018-08-06","2018-08-07","2018-08-08","2018-08-09"],"yAxis":{"data":"value","splitLine":{"show":false},"axisLine":{"style":{"stroke":"#999"}},"axisLabel":{"style":{"fill":"#999"}},"axisTick":{"show":false}},"series":[{"name":"下订单数量","data":[1,2,3,4,5],"type":"line","lineStyle":{"stroke":"#ff5ca9"},"lineArea":{"show":true,"gradient":["rgba(55, 162, 218, 0.6)","rgba(55, 162, 218, 0)"]},"linePoint":{"radius":4,"style":{"fill":"#ff5ca9","stroke":"transparent"}}}]}`

option = JSON.parse(option)

export default {
  name: 'dev',
  data () {
    return {
      option
    }
  }
}
</script>

<style lang="less">
#dev-container {
  width: 100%;
  height: 600px;
  box-shadow: 0 0 3px green;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: #fff;

  .dev {
    width: 300px;
    height: 200px;
  }
}
</style>
