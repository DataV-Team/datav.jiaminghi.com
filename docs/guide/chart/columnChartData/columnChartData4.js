export default {
  data: [
    {
      data: [150, 290, 420, 200, 350, 219],
      fillColor: ['#247efc', '#ff2fdb']
    },
    {
      data: [130, 313, 392, 180, 400, 188],
      fillColor: ['#00BAFF', '#3DE7C9']
    }
  ],
  x: {
    data: ['西峡', '周口', '南阳', '驻马店', '郑州', '洛阳']
  },
  y: {
    grid: true,
    gridLineType: 'dashed',
    gridLineDash: [2, 2],
    unit: '辆'
  },
  roundColumn: true,
  spaceBetween: true,
  localGradient: true
}