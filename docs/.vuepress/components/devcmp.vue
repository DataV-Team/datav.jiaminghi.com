<template>
  <div class="dv-scroll-ranking-board" :ref="ref">

  </div>
</template>

<script>

export default {
  name: 'ScrollRankingBoard',
  data () {
    return {
      ref: 'scroll-ranking-board'
    }
  }
}
</script>

<style lang="less">
.dv-scroll-ranking-board {
  width: 100%;
  height: 100%;
}
</style>
