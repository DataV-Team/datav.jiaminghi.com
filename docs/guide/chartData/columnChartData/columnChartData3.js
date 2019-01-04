export default {
  data: [
    {
      data: [100, 150, 200, 250, 300, 350],
      fillColor: '#247efc'
    },
    {
      data: [
        [20, 35,  60], [30,  45,  70],
        [40, 55,  85], [50,  75, 105],
        [60, 95, 125], [70, 115, 145]
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
    min: 0,
    max: 450
  },
  showColumnBG: true,
  columnBGColor: 'rgba(100, 100, 100, 0.3)'
}