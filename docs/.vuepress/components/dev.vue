<template>
  <div id="dev-container">
    <dv-border-box-11 style="width:100%;height:300px" />
  </div>
</template>

<script>
export default {
  name: 'dev',
  data () {
    return {
    }
  },
  async mounted () {
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
