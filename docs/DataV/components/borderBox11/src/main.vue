<template>
  <div class="dv-border-box-11" :ref="ref">
    <svg class="dv-border-svg-container" :width="width" :height="height">
      <defs>
        <filter id="outer-glow" height="150%" width="150%" x="-25%" y="-25%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood flood-color="#1f33a2" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
          <feMerge>
            <feMergeNode in="softGlow_colored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <polyline
        filter="url(#outer-glow)"
        :points="`
          ${(width - titleWidth) / 2}, 30
          20, 30 7, 50 7, ${50 + (height - 167) / 2}
          13, ${55 + (height - 167) / 2} 13, ${135 + (height - 167) / 2}
          7, ${140 + (height - 167) / 2} 7, ${height - 27}
          20, ${height - 7} ${width - 20}, ${height - 7} ${width - 7}, ${height - 27}
          ${width - 7}, ${140 + (height - 167) / 2} ${width - 13}, ${135 + (height - 167) / 2}
          ${width - 13}, ${55 + (height - 167) / 2} ${width - 7}, ${50 + (height - 167) / 2}
          ${width - 7}, 50 ${width - 20}, 30 ${(width + titleWidth) / 2}, 30
          ${(width + titleWidth) / 2 - 20}, 7 ${(width - titleWidth) / 2 + 20}, 7
          ${(width - titleWidth) / 2}, 30 ${(width - titleWidth) / 2 + 20}, 52
          ${(width + titleWidth) / 2 - 20}, 52 ${(width + titleWidth) / 2}, 30
        `"
      />

      <polygon
        stroke="#8aaafb"
        fill="transparent"
        :points="`
          ${(width + titleWidth) / 2 - 5}, 30 ${(width + titleWidth) / 2 - 21}, 11
          ${(width + titleWidth) / 2 - 27}, 11 ${(width + titleWidth) / 2 - 8}, 34
        `"
      />

      <polygon
        stroke="#8aaafb"
        fill="transparent"
        :points="`
          ${(width - titleWidth) / 2 + 5}, 30 ${(width - titleWidth) / 2 + 22}, 49
          ${(width - titleWidth) / 2 + 28}, 49 ${(width - titleWidth) / 2 + 8}, 26
        `"
      />

      <polygon
        stroke="#8aaafb"
        fill="transparent"
        :points="`
        `"
      />

      <polygon
        fill="#8aaafb"
        filter="url(#outer-glow)"
        :points="`
          7, ${53 + (height - 167) / 2} 11, ${57 + (height - 167) / 2}
          11, ${133 + (height - 167) / 2} 7, ${137 + (height - 167) / 2}
        `"
      />

      <polygon
        fill="#8aaafb"
        filter="url(#outer-glow)"
        :points="`
          ${width - 7}, ${53 + (height - 167) / 2} ${width - 11}, ${57 + (height - 167) / 2}
          ${width - 11}, ${133 + (height - 167) / 2} ${width - 7}, ${137 + (height - 167) / 2}
        `"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import autoResize from '../../../mixin/autoResize'

export default {
  name: 'DvBorderBox11',
  mixins: [autoResize],
  props: {
    titleWidth: {
      type: Number,
      default: 200
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      ref: 'border-box-11'
    }
  }
}
</script>

<style lang="less">
.dv-border-box-11 {
  position: relative;
  width: 100%;
  height: 100%;

  .dv-border-svg-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    box-shadow: 0 0 3px red;

    polyline {
      fill: none;
      stroke-width: 1;
      stroke: #8aaafb;
    }

    circle {
      fill: #fff;
    }
  }

  .dv-bb2-line1 {
    stroke: #fff;
  }

  .dv-bb2-line2 {
    stroke: fade(#fff, 60);
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
