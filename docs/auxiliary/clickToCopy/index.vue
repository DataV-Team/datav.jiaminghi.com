<template>
  <a class="click-to-copy" :info="info" @click="!copyAni && copy()">
    <span :class="`ax-ctc-btn ${copyAni && 'fade'}`">点击复制</span>
    <svg :class="`ax-svg-container ${copyAni && 'show'}`">
      <polyline :points="`5, 8 12, 15 25, 5`" />
    </svg>
  </a>
</template>

<script>
export default {
  name: 'ClickToCopy',
  props: ['info', 'btnTip'],
  data () {
    return {
      copyAni: false
    }
  },
  methods: {
    copy () {
      const { doCopyAction, doCopyTip } = this

      doCopyAction()

      doCopyTip()
    },
    doCopyAction () {
      const { info } = this

      const inputEle = document.createElement('input')

      inputEle.value = info

      document.body.appendChild(inputEle)

      inputEle.select()

      document.execCommand('copy')

      inputEle.parentNode.removeChild(inputEle)
    },
    doCopyTip () {
      this.copyAni = true

      setTimeout(() => {
        this.copyAni = false
      }, 1000)
    }
  }
}
</script>

<style lang="less">
.click-to-copy {
  position: relative;
  cursor: pointer;

  .fade {
    opacity: 0 !important;
  }

  .show {
    opacity: 1 !important;

    polyline {
      stroke-dasharray: 30 30 !important;
    }
  }

  .ax-ctc-btn {
    opacity: 1;
    transition: all 0.3s;
  }

  .ax-svg-container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 30px;
    height: 20px;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s;

    polyline {
      fill: none;
      stroke: #46bd87;
      stroke-width: 3;
      stroke-dasharray: 0 30;
      transition: all 0.5s;
    }
  }
}
</style>
