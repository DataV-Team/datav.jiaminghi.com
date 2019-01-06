export default {
  series: [
    {
      value: [150, 290, 420, 200, 350, 219],
      fillColor: ['#247efc', '#ff2fdb'],
      type: 'leftEchelon'
    },
    {
      value: [130, 313, 392, 180, 400, 188],
      fillColor: ['#00BAFF', '#3DE7C9'],
      type: 'rightEchelon'
    }
  ],
  x: {
    tags: ['西峡', '周口', '南阳', '驻马店', '郑州', '洛阳']
  },
  y: {
    grid: true,
    gridLineDash: true,
    unit: '辆',
    num: 7
  },
  showValueText: true,
  spaceBetween: true,
  valueTextColor: '#bbb'
}