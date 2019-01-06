export default {
  series: [
    {
      value: [100, 150, 200, 250, 300, 350],
      fillColor: '#247efc'
    },
    {
      value: [
        [20, 35,  60], [30,  45,  70],
        [40, 55,  85], [50,  75, 105],
        [60, 95, 125], [70, 115, 145]
      ],
      fillColor: ['#ff2fdb', '#e3b4a2', '#fafb5d']
    }
  ],
  x: {
    tags: ['西峡', '周口', '南阳', '驻马店', '郑州', '洛阳']
  },
  y: {
    unit: '万元',
    grid: true,
    gridLineDash: true,
    min: 0,
    max: 450
  },
  showColumnBG: true,
  columnBGColor: 'rgba(100, 100, 100, 0.3)'
}