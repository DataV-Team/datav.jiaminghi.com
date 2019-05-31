<template>
  <div class="dv-cauge-chart" :ref="ref">
    <svg>
      <path d="M100, 0 A100, 100 0 0, 1, 100, 200" stroke="red" fill="none" />
    </svg>
  </div>
</template>

<script>
import { deepMerge } from '@jiaminghi/charts/util/index'
import { deepClone } from '@jiaminghi/c-render/lib/util'

export default {
  name: 'DvCaugeChart',
  props: ['config', 'percent'],
  data () {
    return {
      ref: +new Date() + Math.random(),

      // Chart Container
      contianer: null,

      // Container width and height
      area: [0, 0],

      // Default Config
      defaultConfig: {
        arcBGColor: '#666',
        arcColor: ['#f41007', '#fdde00'],
        tickColor: '#666',
        labelColor: '#999',
        arcTotalAngle: Math.PI / 3 * 2,
        arcLineWidth: 20,
        tickLength: 10,
      },

      // Merged Config
      mergedConfig: null,

      bgArcSvgPath: null,
      arcSvgPath: null
    }
  },
  methods: {
    async init () {
      const { initContainer, initArea, mergeConfig, calcCaugeData } = this

      initContainer()

      initArea()

      mergeConfig()

      calcCaugeData()
    },
    initContainer () {
      const { $refs, ref } = this

      this.contianer = $refs[ref]
    },
    initArea () {
      const { contianer } = this

      const { clientWidth, clientHeight } = contianer

      this.area = [clientWidth, clientHeight]
    },
    mergeConfig () {
      const { config, defaultConfig } = this

      this.mergedConfig = deepMerge(deepClone(defaultConfig, true), config)
    },
    calcCaugeData () {
      const { mergedConfig } = this

      const { calcArcCenterAndRadius, calcArcAngles } = this

      calcArcCenterAndRadius(mergedConfig)

      calcArcAngles(mergedConfig)
    },
    calcArcCenterAndRadius (config) {
      const { area } = this

      const { arcLineWidth } = config

      const maxRadius = Math.min(...area) / 2

      config.radius = maxRadius - (arcLineWidth / 2)

      config.center = area.map(l => l / 2)
    },
    calcArcAngles (config) {
      let { arcTotalAngle, percent } = this

      const fullAngle = Math.PI * 2

      const startAngle = (fullAngle - arcTotalAngle) / 2 - Math.PI * 1.5

      const endAngle = startAngle + arcTotalAngle

      if (!percent) percent = 0

      const percentEndAngle = arcTotalAngle * percent / 100 + startAngle

      config.startAngle = startAngle
      config.endAngle = endAngle
      config.percentEndAngle = percentEndAngle
    }
  },
  mounted () {
    const { init } = this

    init()
  }
}
</script>

<style lang="less">
.dv-cauge-chart {
  width: 100%;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
