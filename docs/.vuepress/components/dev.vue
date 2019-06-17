<template>
  <div id="dev-container">
    <decoration-8 class="dev" />
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
  background-color: #282c34;

  .dev {
    width: 500px;
    height: 70px;
    box-shadow: 0 0 3px red;
  }
}
</style>
