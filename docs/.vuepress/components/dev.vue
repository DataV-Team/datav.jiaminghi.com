<template>
  <div id="dev-container">
    <dv-water-level-pond :config="config" style="width: 100px;height:200px" />
  </div>
</template>

<script>

export default {
  name: 'dev',
  data () {
    return {
      config:{
        data: [55],
        shape: 'round',
        waveHeight: 30,
        waveNum: 2,
        colors:['#34b6d2', '#34a6d2']
      },
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = 2
    }, 2000);
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
