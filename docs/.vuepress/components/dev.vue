<template>
  <div id="dev-container">
    <devcmp class="dev" :config="config" />
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
            name: 'a',
            value: 100
          },
          {
            name: 'b',
            value: 120
          }
        ]
      }
    }
  },
  created () {
    setTimeout(() => {
      this.config = {
        data: [
          {
            name: 'itemA',
            value: 100
          },
          {
            name: 'itemB',
            value: 120
          },
          {
            name: 'itemC',
            value: 55
          }
        ]
      }
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
