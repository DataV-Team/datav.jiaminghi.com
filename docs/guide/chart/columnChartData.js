export default {
  columnChartTag: `<column-chart :data="data" :labelLine="labelLine" :colors="colors" />`,
  columnChartData1: {
    data: [
      {
        data: [150, 290, 420, 200, 350, 219],
        fillColor: ['#247efc', '#ff2fdb'],
        valueTextColor: 'inherit'
      }
    ],
    x: {
      data: ['西峡', '周口', '南阳', '驻马店', '郑州', '洛阳']
    },
    y: {
      unit: '辆'
    },
    labelLine: {
      color: '#2b7bfb',
      data: ['车流量'],
      type: 'rectangle'
    },
    showValueText: true
  }
}