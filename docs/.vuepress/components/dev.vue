<template>
  <div id="dev-container">
    <dv-scroll-ranking-board :config="config" style="width:400px;height:300px" />
  </div>
</template>

<script>
export default {
  name: 'dev',
  data () {
    return {
      config: {
        sort: false,
        data: [
          {
            name: '周口<span style="color:red">AAAA</span>',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '信阳',
            value: 45
          },
          {
            name: '漯河',
            value: 29
          }
        ]
      }
    }
  },
  async mounted () {
  }
}
</script>

<style lang="less">
#dev-container {
  width: 100%;
  height: 300px;
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
