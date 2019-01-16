export default {
  series: [
    {
      value: [450, 50, 450, 50, 450, 50],
      dashed: true
    },
    {
      value: [50, 450, 50, 450, 50, 450],
      lineColor: '#9cf4df',
      fillColor: 'rgba(238, 233, 108, 0.5)'
    }
  ],
  label: {
    tags: ['西峡', '周口', '南阳', '驻马店', '郑州', '洛阳'],
    color: 'colors',
    fontSize: 10
  },
  // 径向射线为虚线
  rayLineType: 'dashed',
  // 径向射线颜色应用全局配色
  rayLineColor: 'colors',
  // 指定雷达环数目
  ringNum: 5,
  ringType: 'polyline',
  // 雷达图背景色填充方式
  ringFillType: 'cover',
  ringFillColor: ['rgba(61, 231, 201, 0.3)', 'rgba(61, 231, 201, 0.1)'],
  ringLineType: 'line',
  ringLineColor: 'rgba(156, 244, 233, 0.2)',
  // 雷达图旋转角度
  rayLineOffset: Math.PI * -1.5,
  radius: 0.8,
  max: 550
}