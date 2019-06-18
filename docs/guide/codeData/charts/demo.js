export default {
  title: {
    text: '剩余油量表',
    style: {
      fill: '#fff'
    }
  },
  series: [
    {
      type: 'gauge',
      data: [ { name: 'itemA', value: 55 } ],
      center: ['50%', '55%'],
      axisLabel: {
        formatter: '{value}%'
      },
      axisTick: {
        style: {
          stroke: '#fff'
        }
      },
      axisLabel: {
        style: {
          fill: '#fff'
        }
      },
      animationCurve: 'easeInOutBack'
    }
  ]
}