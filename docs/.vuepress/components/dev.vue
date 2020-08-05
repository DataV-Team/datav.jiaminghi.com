<template>
  <div id="dev-container">
    <dv-scroll-board ref="scrollBoard" :config="config" @click="test" style="width:400px;height:200px;" />
  </div>
</template>

<script>

export default {
  name: 'dev',
  data () {
    return {
      config: {
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
        ],
        carousel: 'page'
      }
    }
  },
  methods: {
    test (...args) {
      console.warn(args)
    }
  },
  mounted () {
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
