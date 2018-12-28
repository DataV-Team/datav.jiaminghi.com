<template>
  <a class="click-to-copy" :info="info" @click="copy">点击复制</a>
</template>

<script>
export default {
  name: 'ClickToCopy',
  props: ['info'],
  methods: {
    copy () {
      const { info } = this

      const inputEle = document.createElement('input')

      inputEle.value = info

      document.body.appendChild(inputEle)

      inputEle.select()

      document.execCommand('copy')

      inputEle.parentNode.removeChild(inputEle)
    }
  }
}
</script>

<style lang="less">
.click-to-copy {
  cursor: pointer;
}
</style>
