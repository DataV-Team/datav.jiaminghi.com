<template>
  <div id="dev-container">
    <dv-active-ring-chart class="dev" :config="config" />
  </div>
</template>

<script>
export default {
  name: 'dev',
  data () {
    return {
      config: {
        data: [
          {
            name: '周口',
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
          }
        ]
      }
    }
  },
  created () {
    setTimeout(() => {
    }, 3000)
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

  .dev {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 3px red;
  }
}
</style>
