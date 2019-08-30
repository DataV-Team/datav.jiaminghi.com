<template>
  <div id="dev-container">
    <dv-capsule-chart :config="config" class="dev" />
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
            name: 'A',
            value: 55
          },
          {
            name: 'B',
            value: 25
          },
          {
            name: 'C',
            value: 45
          },
          {
            name: 'D',
            value: 15
          },
        ],
        unit: '个'
      }
    }
  },
  created () {

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
    box-shadow: 0 0 3px red;
  }
}
</style>
