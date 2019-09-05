<template>
  <div id="dev-container">
    <dv-scroll-board :config="config" class="dev" style="width: 500px;height:200px" />
  </div>
</template>

<script>
export default {
  name: 'dev',
  data () {
    return {
      config: {
        header: ['列1', '列2', '列3'],
        data: [
        ]
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
  }
}
</style>
