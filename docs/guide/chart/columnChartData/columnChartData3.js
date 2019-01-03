export default {
  data: [
    {
      data: [150, 290, 420, 200, 350, 219],
      fillColor: '#247efc'
    },
    {
      data: [
        [35, 70, 40],
        [74, 180, 45],
        [37, 200, 145],
        [35, 89, 30],
        [65, 100, 48],
        [55, 90, 70]
      ],
      fillColor: ['#ff2fdb', '#e3b4a2', '#fafb5d']
    }
  ],
  x: {
    data: ['西峡', '周口', '南阳', '驻马店', '郑州', '洛阳']
  },
  y: {
    unit: '万元',
    grid: true,
    gridLineType: 'dashed',
    gridLineDash: [2, 2],
    min: 0
  },
  showColumnBG: true,
  columnBGColor: 'rgba(100, 100, 100, 0.3)'
}