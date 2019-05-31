<template>
  <div id="dev-container">
    <dv-cauge-chart class="dev" />
  </div>
</template>

<script>
export default {
  name: 'dev'
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

  .dev {
    width: 200px;
    height: 200px;
    box-shadow: 0 0 3px red;
  }
}
</style>
