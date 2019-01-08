function randomExtend (minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

const value1 = new Array(50).fill('')
  .map((t, i) =>
    randomExtend(650 + parseInt(i / 10) * 100,
      850 + parseInt(i / 10) * 100))

export default {
  series: [
    {
      value: value1,
      edgeColor: '#e8308c',
      fillColor: '#ee6d66'
    }
  ],
  x: {
    tags: new Array(50).fill('').map((v, i) => (i + 1) % 5 === 0 ? i + 1 : v)
  },
  y: {
    min: 0,
    max: 2000
  },
  radius: 4
}