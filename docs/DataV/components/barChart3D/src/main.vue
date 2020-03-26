<template>
  <div id="bar-chart" ref="barChart">
    <div
      v-if="tipInfo && $scopedSlots.default"
      class="tip-info-container"
      :style="{ left: `${tipInfo.clientX}px`, top: `${tipInfo.clientY}px` }"
    >
      <slot v-bind:tipInfo="tipInfo"></slot>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import { data, defalutConfig } from "./config";

import { deepMerge } from '@jiaminghi/charts/lib/util/index'

import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'

import autoResize from '../../../mixin/autoResize'

// const marginKey = ["top", "right", "bottom", "left"];

// 判断其类型必须为数字
// function marginKeyType(obj, key) {
//   for (let i = 0; i < marginKey.length; i++) {
//     const key = marginKey[i];
//     if (obj[key] && !isTypeOf(obj[key], "Number")) {
//       // 属性值只能为number
//       console.error("The value of the margin property can only be number");
//       return false;
//     }
//   }
//   return true;
// }

const margin = {
  top: 20,
  right: 50,
  bottom: 50,
  left: 50
};

export default {
  name: "BarChart3D",
  mixins: [autoResize],
  data() {
    return {
      D3Dom: null,
      yLinearScale: null,
      svgWidth: 0,
      svgHeight: 0,
      // 鼠标悬浮位置
      tipInfo: null,
      mergedConfig: {},
      ref: 'barChart',
    };
  },
  props: {
    // 数据列表
    data: {
      type: Array,
      default: () => data
    },
    config: {
      type: Object,
      default: () => defalutConfig
    }
  },
  watch: {
    data() {
      this.drawChart();
    },
  },
  methods: {
    onResize () {
      if (this.width !== this.svgWidth) {
        this.drawChart()
      }
    },
    // 初始化D3函数
    async initD3() {
      await this.$nextTick();
      const svgWidth = (this.svgWidth = this.$refs.barChart.offsetWidth);
      const svgHeight = (this.svgHeight = this.$refs.barChart.offsetHeight);
      this.D3Dom = d3
        .select("#bar-chart")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .attr("id", "svg-column");
      this.createXAxis();
      this.createYScale();
      this.addColumn();
    },
    createXAxis() {
      const {
        svgWidth,
        svgHeight,
        data,
        mergedConfig: { xScale }
      } = this;
      const { D3Dom } = this;

      let xLinearScale = d3
        .scaleBand()
        .domain(
          data.map(d => {
            return d.name;
          })
        )
        .range([0, svgWidth - margin.right - margin.left], 0.1);

      let xAxis = d3.axisBottom(xLinearScale).ticks(data.length);

      let xAxisG = D3Dom.append("g")
        .call(xAxis)
        .attr(
          "transform",
          `translate(${margin.left},${svgHeight - margin.bottom})`
        );

      //删除原X轴
      xAxisG.select("path").remove();
      xAxisG.selectAll("line").remove();
      //绘制新的立体X轴
      xAxisG
        .selectAll("text")
        .attr("font-size", xScale.fontSize)
        .attr("fill", xScale.color)
        .attr("transform", "translate(0,20)");

      this.dataProcessing(xLinearScale); //核心算法
    },
    createYScale() {
      const {
        D3Dom,
        svgHeight,
        data,
        mergedConfig: { yScale }
      } = this;
      let yLinearScale = (this.yLinearScale = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, function(d) {
            return d.value * 1;
          }) * 1.2
        ])
        .range([svgHeight - margin.top - margin.bottom, 0]));

      //定义Y轴比例尺以及刻度
      let yAxis = d3.axisLeft(yLinearScale).ticks(6);

      //绘制Y轴
      let yAxisG = D3Dom.append("g")
        .call(yAxis)
        .attr("transform", `translate(${margin.left + 10},${margin.top})`);
      yAxisG
        .selectAll("text")
        .attr("font-size", yScale.fontSize)
        .attr("fill", yScale.color);
      //删除原Y轴路径和tick
      yAxisG.select("path").remove();
      yAxisG.selectAll("line").remove();
    },
    D3mouseover() {
      const that = this;
      return function(d) {
        d3.select(this)
          .selectAll(".transparentPath")
          .attr("opacity", 0.8);
        if (d) {
          that.tipInfo = {
            ...d,
            clientX: event.clientX - 100,
            clientY: event.clientY + 20
          };
        } else {
          that.tipInfo = null;
        }
      };
    },
    D3mouseout() {
      const that = this;
      return function() {
        d3.select(this)
          .selectAll(".transparentPath")
          .attr("opacity", 1);
        that.tipInfo = null;
      };
    },
    // 计算柱状图的形状
    dataProcessing(xLinearScale) {
      const { data } = this;
      let angle = Math.PI / 2.3;
      for (let i = 0; i < data.length; i++) {
        let d = data[i];
        let depth = 10;
        d.ow = xLinearScale.bandwidth() * 0.7;
        d.ox = xLinearScale(d.name) - 10;
        d.oh = 1;
        d.p1 = {
          x: Math.cos(angle) * d.ow + 5,
          y: -Math.sin(angle) - depth
        };
        d.p2 = {
          x: d.p1.x + d.ow,
          y: d.p1.y
        };
        d.p3 = {
          x: d.p2.x,
          y: d.p2.y + d.oh
        };
      }
    },
    addColumn() {
      const {
        D3Dom,
        yLinearScale,
        svgHeight,
        data,
        mergedConfig: { colorList, tipShow },
        $scopedSlots
      } = this;
      let g = D3Dom.selectAll(".g")
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d) {
          return `translate(${d.ox +
            margin.left +
            20}, ${svgHeight - margin.bottom + 15})`;
        });
      if (tipShow && $scopedSlots.default) {
        g.on("mousemove", this.D3mouseover()).on("mouseout", this.D3mouseout());
      }
      g.transition()
        .duration(2500)
        .attr("transform", function(d) {
          return `translate(${d.ox +
            margin.left +
            20}, ${yLinearScale(d.value) + margin.bottom - 20})`;
        });

      g.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("class", "transparentPath")
        .attr("width", function(d) {
          return d.ow;
        })
        .attr("height", function(d) {
          return d.oh;
        })
        .style("fill", function(d, i) {
          return colorList[i];
        })
        .transition()
        .duration(2500)
        .attr("height", function(d) {
          return svgHeight - margin.bottom - margin.top - yLinearScale(d.value);
        });

      g.append("path")
        .attr("class", "transparentPath")
        .attr("d", function(d) {
          return `M0,0 L${d.p1.x},${d.p1.y} L${d.p2.x},${d.p2.y} L${d.ow},0 L0,0`;
        })
        .style("fill", function(d, i) {
          return d3.hcl(colorList[i]).darker(0.6);
        });

      g.append("path")
        .attr("class", "transparentPath")
        .attr("d", function(d) {
          return `M${d.ow},0 L${d.p2.x},${d.p2.y}, L${d.p3.x},${d.p3.y} L${d.ow},${d.oh} L${d.ow},0`;
        })
        .style("fill", function(d, i) {
          return d3.hcl(colorList[i]).darker(0.6);
        })
        .transition()
        .duration(2500)
        .attr("d", function(d) {
          return `M${
            d.ow
          },0 L${d.p2.x},${d.p2.y}, L${d.p3.x},${d.p3.y + svgHeight - margin.top - margin.bottom - yLinearScale(d.value)} L${d.ow},${svgHeight - margin.top - margin.bottom - yLinearScale(d.value)} L${d.ow},0`;
        });
    },
    drawChart() {
      if (!this.data || !this.data.length) {
        return
      }
      if (this.D3Dom) {
        this.D3Dom.remove();
      }
      this.initD3();
    },
    mergeConfig () {
      // this.mergedConfig = defalutConfig
      const { config } = this
      this.mergedConfig = deepMerge(deepClone(defalutConfig, true), config || {})
    }
  },
  mounted() {
    this.mergeConfig()
    this.drawChart();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#bar-chart {
  height: 100%;
  width: 100%;
  display: block;
  position: relative;
}
</style>
<style lang="less">
.tip-info-container {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 6px;
  border-radius: 5px;
  font-family: Microsoft Yahei;
  position: fixed;
  z-index: 9999999;
  h1 {
    font-size: 14px;
  }
}
</style>
