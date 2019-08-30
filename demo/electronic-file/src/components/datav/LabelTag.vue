<template>
  <div class="label-tag">
    <template v-if="mergedConfig">
      <div class="label-item" v-for="(label, i) in mergedConfig.data" :key="label">
        {{ label }} <div :style="`background-color: ${mergedConfig.colors[i % mergedConfig.colors.length]};`" />
      </div>
    </template>
  </div>
</template>

<script>
import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

export default {
  name: 'LabelTag',
  props: {
    config: {
      type: Object,
      default: () => ([])
    }
  },
  data () {
    return {
      defaultConfig: {
        /**
         * @description Label data
         * @type {Array<String>}
         * @default data = []
         * @example data = ['label1', 'label2']
         */
        data: [],
        /**
         * @description Label color (Hex|Rgb|Rgba|color keywords)
         * @type {Array<String>}
         * @default colors = ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
         * @example colors = ['#666', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b']
      },

      mergedConfig: null
    }
  },
  watch: {
    config () {
      const { mergeConfig } = this

      mergeConfig()
    }
  },
  methods: {
    mergeConfig () {
      let { config, defaultConfig } = this

      this.mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})
    }
  },
  mounted () {
    const { mergeConfig } = this

    mergeConfig()
  }
}
</script>

<style lang="less">
.label-tag {
  display: flex;
  justify-content: center;
  align-items: center;

  .label-item {
    margin: 5px;
    font-size: 15px;
    display: flex;
    align-items: center;

    div {
      width: 12px;
      height: 12px;
      margin-left: 5px;
    }
  }
}
</style>
