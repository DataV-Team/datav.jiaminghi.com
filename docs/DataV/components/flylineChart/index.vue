<template>
  <div class="dv-flyline-chart" ref="dv-flyline-chart" @click="consoleClickPos">
    <svg :width="width" :height="height">
      <defs>
        <radialGradient
          :id="gradientId"
          cx="50%" cy="50%" r="50%"
        >
          <stop
            offset="0%" stop-color="#fff"
            stop-opacity="1"
          />
          <stop
            offset="100%" stop-color="#fff"
            stop-opacity="0"
          />
        </radialGradient>
      </defs>
      <g
        v-for="(path, i) in paths"
        :key="i"
      >
        <path
          :ref="path.join(',')"
          :d="`M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`"
          stroke="rgba(35,231,180, .1)"
          fill="transparent"
        />

        <path
          v-if="lengths[i]"
          :d="`M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`"
          stroke="red"
          fill="transparent"
          :mask="`url(#maskId${path.join(',')})`"
        >
          <animate
            attributeName="stroke-dasharray"
            :from="`0, ${lengths[i]}`"
            :to="`${lengths[i]}, 0`"
            :dur="times[i] || 0"
            repeatCount="indefinite"
          />
        </path>

        <mask :id="`maskId${path.join(',')}`">
          <circle cx="0" cy="0" r="100" :fill="`url(#${gradientId})`">
            <animateMotion
              :path="`M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`"
              repeatCount="indefinite"
              rotate="auto"
              :dur="times[i] || 0"
            />
          </circle>
        </mask>

        <!-- <image
          :xlink:href="starImg"
          :width="starWidth"
          :height="starHeight"
          :x="starWidth * -1"
          :y="starHeight / -2"
        >
          <animateMotion
            :path="`M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`"
            repeatCount="indefinite"
            rotate="auto"
            :dur="durs[i]"
          />
        </image> -->

        <!-- <image
          :xlink:href="starImg"
          :width="starWidth"
          :height="starHeight"
          :x="starWidth * -1"
          :y="starHeight / -2"
        /> -->

        <!-- <image
          :xlink:href="stationImg"
          :width="stationImgWidth"
          :height="stationImgHeight"
          :x="path[0][0] - stationImgWidth / 2"
          :y="path[0][1] - stationImgHeight / 2"
        /> -->
      </g>
    </svg>
  </div>
</template>

<script>
import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import { randomExtend } from '../../util/index'

export default {
  name: 'PercentPond',
  props: {
    config: {
      type: Object,
      default: {}
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      maskId: `flyline-mask-id-${(new Date()).getTime()}`,
      maskCircleId: `mask-circle-id-${(new Date()).getTime()}`,
      gradientId: `gradient-id-${(new Date()).getTime()}`,

      width: 0,
      height: 0,

      defaultConfig: {
        /**
         * @description Flyline chart center point
         * @type {Array<Number>}
         * @default centerPoint = [0, 0]
         */
        centerPoint: [0, 0],
        /**
         * @description Flyline start points
         * @type {Array<Array<Number>>}
         * @default points = []
         * @example points = [[10, 10], [100, 100]]
         */
        points: [],
        /**
         * @description Flyline width
         * @type {Number}
         * @default lineWidth = 1
         */
        lineWidth: 1,
        /**
         * @description Flyline curvature
         * @type {Number}
         * @default curvature = 5
         */
        curvature: 5,
        /**
         * @description Flyline animation duration
         * @type {Array<Number>}
         * @default duration = [30, 30]
         */
        duration: [30, 30],
        /**
         * @description Relative points position
         * @type {Boolean}
         * @default relative = false
         */
        relative: false
      },

      mergedConfig: null,

      paths: [],
      lengths: [],
      times: []
    }
  },
  watch: {
    config () {
      const { calcData } = this

      calcData()
    }
  },
  computed: {
  },
  methods: {
    async init () {
      const { initWH, config, calcData } = this

      await initWH()

      if (!config) return

      calcData()
    },
    async initWH () {
      const { $nextTick, $refs } = this

      await $nextTick()

      const dom = $refs['dv-flyline-chart']

      this.width = dom.clientWidth
      this.height = dom.clientHeight
    },
    async calcData () {
      const { mergeConfig, createFlylinePaths, calcLineLengths } = this

      mergeConfig()

      createFlylinePaths()

      await calcLineLengths()

      const { calcTimes } = this

      calcTimes()
    },
    mergeConfig () {
      let { config, defaultConfig } = this

      this.mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})
    },
    createFlylinePaths () {
      const { getPath, mergedConfig, width, height } = this

      let { centerPoint, points, relative } = mergedConfig

      if (relative) points = points.map(([x, y]) => [width * x, height * y])

      this.paths = points.map(point => getPath(centerPoint, point))
    },
    getPath (center, point) {
      const { getControlPoint } = this

      const controlPoint = getControlPoint(center, point)

      return [point, controlPoint, center]
    },
    getControlPoint ([sx, sy], [ex, ey]) {
      const { getPointDistance, getKLinePointByx, mergedConfig } = this

      const { curvature } = mergedConfig

      const [mx, my] = [(sx + ex) / 2, (sy + ey) / 2]

      const k = (ey - sy) / (ex - sx)

      const k2 = -1 / k

      const distance = getPointDistance([sx, sy], [ex, ey])

      const targetLength = distance / curvature
      const disDived = targetLength / 2

      let [dx, dy] = [mx, my]

      do {
        dx += disDived
        dy = getKLinePointByx(k2, [mx, my], dx)[1]
      } while (getPointDistance([mx, my], [dx, dy]) < targetLength)

      return [dx, dy]
    },
    getKLinePointByx (k, [lx, ly], x) {
      const y = ly - k * lx + k * x

      return [x, y]
    },
    async calcLineLengths () {
      const { $nextTick, paths, $refs } = this

      await $nextTick()

      this.lengths = paths.map(path => $refs[path.join(',')][0].getTotalLength())
    },
    calcTimes () {
      const { duration, points } = this.mergedConfig

      this.times = points.map(foo => randomExtend(...duration) / 10)
    },
    consoleClickPos ({ offsetX, offsetY }) {
      const { width, height, debug } = this

      if (!debug) return

      const relativeX = offsetX / width
      const relativeY = offsetY / height

      console.warn(`dv-flyline-chart Debug: \n Click Position is [${offsetX}, ${offsetY}] \n Relative Position is [${relativeX}, ${relativeY}]`)
    }
  },
  mounted () {
    const { init } = this

    init()
  }
}
</script>

<style lang="less">
.dv-flyline-chart {
  display: flex;
  flex-direction: column;

  polyline {
    transition: all 0.3s;
  }

  text {
    font-size: 25px;
    font-weight: bold;
    text-anchor: middle;
    dominant-baseline: middle;
  }
}
</style>
