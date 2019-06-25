<template>
  <div id="dev-container">
    <devcmp class="dev" :config="config">正在加载中</devcmp>
  </div>
</template>

<script>
export default {
  name: 'dev',
  data () {
    return {
      config: {
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
