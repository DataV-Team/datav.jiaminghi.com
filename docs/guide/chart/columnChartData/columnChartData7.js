export default {
  data: [
    {
      data: [330, 290, 330, 400, 330, 290, 330],
      fillColor: ['rgba(0, 186, 255, 0.3)', 'rgba(0, 186, 255, 0)']
    },
    {
      data: [260, 265, 280, 450, 280, 265, 260],
      type: 'smoothline',
      lineType: 'dashed',
      againstAxis: true,
      lineColor: '#3de7c9',
      fillColor: ['rgba(0, 219, 149, 0.3)', 'rgba(0, 219, 149, 0)']
    }
  ],
  x: {
    data: ['西峡', '周口', '南阳', '驻马店', '郑州', '洛阳', '漯河']
  },
  y: {
    unit: '辆',
    grid: true,
    gridLineType: 'dashed',
    gridLineDash: [2, 2],
    num: 6,
    min: 0,
    max: 500
  },
  ay: {
    num: 6,
    min: 100,
    max: 500
  }
}