<template>
  <div class="dv-scroll-board" :ref="ref">

  </div>
</template>

<script>
import autoResize from '../../mixins/autoResize.js'

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

export default {
  name: 'ScrollBoard',
  mixins: [autoResize],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      ref: 'scroll-board',

      defaultConfig: {
        rowNum: 5,
        titleBGC: '#00BAFF',
        oddBGC: '#003B51',
        evenBGC: '#0A2732',
        waitTime: 2000,
        header: [],
        data: [],
      },

      mergedConfig: null
    }
  },
  watch: {
  },
  methods: {
    calcData () {
      const { mergeConfig } = this

      mergeConfig()
    },
    mergeConfig () {
      let { config, defaultConfig } = this

      const mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})
    }
  },
  mounted () {
    const { init } = this

    init()
  },
  destroyed () {
  }
}
</script>

<style lang="less">
.dv-scroll-board {
  position: relative;
  width: 100%;
  height: 100%;

}
</style>
