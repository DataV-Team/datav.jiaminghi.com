<template>
  <div
    class="dv-flyline-chart-enhanced"
    :ref="ref"
  >
    <svg v-if="mergedConfig" :width="width" :height="height">

    </svg>
  </div>
</template>

<script>
import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import { randomExtend, getPointDistance } from '../../../util/index'

import autoResize from '../../../mixin/autoResize'

export default {
  name: 'DvFlylineChartEnhanced',
  mixins: [autoResize],
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dev: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const timestamp = Date.now()
    return {
      ref: 'dv-flyline-chart-enhanced',
      unique: Math.random(),
      maskId: `flyline-mask-id-${timestamp}`,
      maskCircleId: `mask-circle-id-${timestamp}`,
      gradientId: `gradient-id-${timestamp}`,
      gradient2Id: `gradient2-id-${timestamp}`,


      /**
       * @description Type Declaration
       * 
       * interface Halo {
       *    show?: boolean
       *    duration?: [number, number]
       *    color?: string
       *    radius?: number
       * }
       * 
       * interface Text {
       *    show?: boolean
       *    offset?: [number, number]
       *    color?: string
       *    fontSize?: number
       * }
       * 
       * interface Icon {
       *    show?: boolean
       *    src?: string
       *    width?: number
       *    height?: number
       * }
       * 
       * interface Point {
       *    name: string
       *    coordinate: [number, number]
       *    halo?: Halo
       *    text?: Text
       *    icon?: Icon
       * }
       * 
       * interface Line {
       *    width?: number
       *    color?: string
       *    orbitColor?: string
       *    duration?: [number, number]
       *    radius?: string
       * }
       * 
       * interface Flyline extends Line {
       *    source: string
       *    target: string
       * }
       */
      defaultConfig: {
        /**
         * @description Flyline chart points
         * @type {Point[]}
         * @default points = []
         */
        points: [],
        /**
         * @description Lines
         * @type {Flyline[]}
         * @default lines = []
         */
        lines: [],
        /**
         * @description Global halo configuration
         * @type {Halo}
         */
        halo: {
          /**
           * @description Whether to show halo
           * @type {Boolean}
           * @default show = false
           */
          show: false,
          /**
           * @description Halo animation duration (1s = 10)
           * @type {[number, number]}
           */
          duration: [20, 30],
          /**
           * @description Halo color
           * @type {String}
           * @default color = '#fb7293'
           */
          color: '',
          /**
           * @description Halo radius
           * @type {Number}
           * @default radius = 120
           */
          radius: 120
        },
        /**
         * @description Global text configuration
         * @type {Text}
         */
        text: {
          /**
           * @description Whether to show text
           * @type {Boolean}
           * @default show = false
           */
          show: false,
          /**
           * @description Text offset
           * @type {[number, number]}
           * @default offset = [0, 15]
           */
          offset: [0, 15],
          /**
           * @description Text color
           * @type {String}
           * @default color = '#ffdb5c'
           */
          color: '#ffdb5c',
          /**
           * @description Text font size
           * @type {Number}
           * @default fontSize = 12
           */
          fontSize: 12
        },
        /**
         * @description Global icon configuration
         * @type {Icon}
         */
        icon: {
          /**
           * @description Whether to show icon
           * @type {Boolean}
           * @default show = false
           */
          show: false,
          /**
           * @description Icon src
           * @type {String}
           * @default src = ''
           */
          src: '',
          /**
           * @description Icon width
           * @type {Number}
           * @default width = 15
           */
          width: 15,
          /**
           * @description Icon height
           * @type {Number}
           * @default width = 15
           */
          height: 15
        },
        /**
         * @description Global line configuration
         * @type {Line}
         */
        line: {
          /**
           * @description Line width
           * @type {Number}
           * @default width = 1
           */
          width: 1,
          /**
           * @description Flyline color
           * @type {String}
           * @default color = '#ffde93'
           */
          color: '#ffde93',
          /**
           * @description Orbit color
           * @type {String}
           * @default orbitColor = 'rgba(103, 224, 227, .2)'
           */
          orbitColor: 'rgba(103, 224, 227, .2)',
          /**
           * @description Flyline animation duration
           * @type {[number, number]}
           * @default duration = [20, 30]
           */
          duration: [20, 30],
          /**
           * @description Flyline radius
           * @type {Number}
           * @default radius = 100
           */
          radius: 100
        },
        /**
         * @description K value
         * @type {Number}
         * @default k = -0.5
         * @example k = -1 ~ 1
         */
        k: -0.5,
        /**
         * @description Flyline curvature
         * @type {Number}
         * @default curvature = 5
         */
        curvature: 5,
        /**
         * @description Relative points position
         * @type {Boolean}
         * @default relative = true
         */
        relative: true,
      },

      mergedConfig: null
    }
  },
  watch: {
    config () {
      const { calcData } = this

      calcData()
    }
  },
  methods: {
    afterAutoResizeMixinInit () {
      const { calcData } = this

      calcData()
    },
    onResize () {
      const { calcData } = this

      calcData()
    },
    async calcData () {
      const { mergeConfig } = this

      mergeConfig()
    },
    mergeConfig () {
      let { config, defaultConfig } = this

      const mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})

      const { halo, text, icon, line, lines } = mergedConfig

      mergedConfig.lines = lines.map(item => {
        item.halo = deepMerge(deepClone(halo, true), item.halo || {})
        item.text = deepMerge(deepClone(text, true), item.text || {})
        item.icon = deepMerge(deepClone(icon, true), item.icon || {})

        item

        return item
      })

      this.mergedConfig = mergedConfig
    }
  }
}
</script>

<style lang="less">
.dv-flyline-chart-enhanced {
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;

  polyline {
    transition: all 0.3s;
  }

  text {
    text-anchor: middle;
    dominant-baseline: middle;
  }
}
</style>
