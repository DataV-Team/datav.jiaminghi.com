<template>
  <div id="dev-container">
    <dv-active-ring-chart :config="config" style="width:300px;height:300px" />
  </div>
</template>

<script>

export default {
  name: 'dev',
  data () {
    return {
      config: { data: [ { name: '周口', value: 16984 }, { name: '南阳', value: 48872 }, { name: '西峡', value: 17366 }, { name: '驻马店', value: 6101 }, { name: '新乡', value: 3197 }, { name: '郑州', value: 97 } ], showValue: true, fontSize: 14, digitalFlopToFixed: 2 }
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
