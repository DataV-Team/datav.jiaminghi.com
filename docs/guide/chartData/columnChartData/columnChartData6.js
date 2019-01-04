export default {
  data: [
    {
      data: [175, 125, 90, 130, 45, 65, 65, 47, 50, 52, 45, 37],
      fillColor: ['#247efc', '#ff2fdb']
    },
    {
      data: [210, 142, 128, 142, 63, 72, 68, 57, 54, 60, 49, 42],
      fillColor: ['#00BAFF', '#3DE7C9']
    },
    {
      data: [23, 18, 16, 14, 10, 8, 6, 6, 6, 6, 6, 5],
      type: 'polyline',
      againstAxis: true,
      lineColor: '#ff2fdb',
      pointColor: '#3de7c9'
    }
  ],
  x: {
    data: [
      '一月份', '二月份',
      '三月份', '四月份',
      '五月份', '六月份',
      '七月份', '八月份',
      '九月份', '十月份',
      '十一月份', '十二月份'
    ],
    offset: 40,
    rotate: 20
  },
  y: {
    grid: true,
    gridLineType: 'dashed',
    gridLineDash: [2, 2],
    min: 0,
    max: 250,
    num: 6,
    tagAfter: 'ml'
  },
  ay: {
    min: 0,
    max: 25,
    num: 6,
    tagAfter: '°C'
  },
  roundColumn: true,
  localGradient: true,
  spaceBetween: true
}