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
        shape: 'roundRect',
        data: [66, 50]
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

  .dev {
    width: 150px;
    height: 200px;
    // box-shadow: 0 0 3px red;
  }
}
</style>
