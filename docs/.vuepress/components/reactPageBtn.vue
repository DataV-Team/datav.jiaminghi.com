<template>
  <span class="react-page-btn">
    （<span class="green" @click="turnToReactPage">React版<OutboundLink /></span>）
  </span>
</template>

<script>
export default {
  name: 'ReactPageBtn',
  methods: {
    turnToReactPage () {
      const { pathname } = location

      window.open(`http://datav-react.jiaminghi.com${pathname}`)
    }
  }
}
</script>

<style lang="less">
.react-page-btn .green {
  color: #3eaf7c;
  cursor: pointer;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
</style>
