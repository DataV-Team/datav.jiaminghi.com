<template>
  <div id="dev-container">
    <devcmp class="dev" :config="config" :debug="true" />
  </div>
</template>

<script>
export default {
  name: 'dev',
  data () {
    return {
      config: {
        centerPoint: [350, 100],
        points: [
          [200, 250],
          [20, 200],
          [500, 150],
          [50, 50],
        ],
        duration: [30, 40]
      }
    }
  },
  created () {
    // setTimeout(() => {
    //   this.config = {
    //     value: 80
    //   }
    // }, 3000)
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
    // box-shadow: 0 0 3px red;
  }
}
</style>
