<template>
  <div id="dev-container">
    <dv-flyline-chart-enhanced :config="config" style="width:100%;height:500px" />
  </div>
</template>

<script>
export default {
  name: 'dev',
  data () {
    return {
      config: {
        points: [
          {
            name: 'P1',
            coordinate: [0.3, 0.3]
          },
          {
            name: 'P2',
            coordinate: [0.5, 0.5]
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
  height: 500px;
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
