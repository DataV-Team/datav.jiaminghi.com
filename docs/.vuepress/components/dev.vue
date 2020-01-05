<template>
  <div id="dev-container">
    <dv-flyline-chart-enhanced :config="config" style="width:690px;height:600px" />
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
            name: '驻马店',
            coordinate: [0.3, 0.3],
          },
          {
            name: '南阳',
            coordinate: [0.5, 0.5],
            halo: { show: false }
          }
        ],
        lines: [
          {
            source: '驻马店',
            target: '南阳'
          }
        ],
        halo: {
          show: true
        },
        icon: {
          show: true,
          src: '/img/flylineChart/mapPoint.png'
        },
        text: {
          show: true
        },
        bgImgSrc: '/img/flylineChart/map.jpg'
      }
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
