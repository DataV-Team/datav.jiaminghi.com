<template>
  <div id="app">
    <datav />
  </div>
</template>

<script>
import datav from './components/datav/index.vue'

export default {
  name: 'app',
  components: {
    datav
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
