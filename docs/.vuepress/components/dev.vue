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
        number: [0, 0],
        content: '{nt}-{nt}'
      }
    }
  },
  created () {
    setTimeout(() => {
      this.config = {
        number: [100, 200],
        content: '{nt}-{nt}'
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
    width: 200px;
    height: 70px;
    box-shadow: 0 0 3px red;
  }
}
</style>
