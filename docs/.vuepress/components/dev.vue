<template>
  <div id="dev-container">
    <dv-scroll-board :config="config" style="width: 400px;height:200px" />
  </div>
</template>

<script>

export default {
  name: 'dev',
  data () {
    return {
      config:{
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      },
    }
  },
  mounted () {
    setTimeout(() => {
      this.config = {
        data: [
          ['x行1列1', '行1列2', '行1列3'],
          ['x行2列1', '行2列2', '行2列3'],
          ['x行3列1', '行3列2', '行3列3'],
          ['x行4列1', '行4列2', '行4列3'],
          ['x行5列1', '行5列2', '行5列3'],
          ['x行6列1', '行6列2', '行6列3'],
          ['x行7列1', '行7列2', '行7列3'],
          ['x行8列1', '行8列2', '行8列3'],
          ['x行9列1', '行9列2', '行9列3'],
          ['x行10列1', '行10列2', '行10列3']
        ]
      }
    }, 5000)
  }
}
</script>

<style lang="less">
#dev-container {
  width: 100%;
  height: 600px;
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
