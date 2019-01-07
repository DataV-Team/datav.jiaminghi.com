export default {
  series: [
    {
      value: [45, 65, 75, 85, 70, 60],
      lineType: 'dashed',
      lineColor: '#277dfb',
      pointColor: '#3de7c9'
    },
    {
      value: [25, 45, 55, 65, 50, 40],
      fillColor: ['rgba(0, 219, 149, 0.3)', 'rgba(0, 219, 149, 0)'],
      type: 'smoothline'
    },
    {
      value: [5, 25, 35, 45, 30, 20],
      fillColor: ['rgba(81, 155, 90, 0.8)', 'rgba(81, 155, 90, 0)']
    },
  ],
  x: {
    tags: ['西峡', '周口', '南阳', '驻马店', '郑州', '洛阳']
  },
  y: {
    min: 0,
    max: 90,
    num: 10
  }
}