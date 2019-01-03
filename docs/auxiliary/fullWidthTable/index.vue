<template>
  <div class="full-width-table">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FullWidthTable'
}
</script>

<style lang="less">
.full-width-table {
  table {
    display: table;
    width: 100%;
  }
}
</style>
