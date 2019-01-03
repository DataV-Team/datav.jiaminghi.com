<template>
  <div class="fold-box">
    <div class="tip" @click="fold = !fold">{{title || '点击以展开或折叠'}}</div>
    <div :class="`fold-container ${fold && 'fold'}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoldBox',
  props: ['title'],
  data () {
    return {
      fold: true
    }
  }
}
</script>

<style lang="less">
.fold-box {
  margin: 10px 0px;

  .tip {
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #3eaf7c;
    cursor: pointer;
  }

  .fold-container {
    transition: all 0.5s;
    height: auto;
  }

  .fold {
    height: 0px;
    overflow: hidden;
  }
}
</style>
