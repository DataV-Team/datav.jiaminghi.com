function randomExtend (minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

const value1 = new Array(50).fill('')
  .map((t, i) => new Array(randomExtend(1, 3)).fill('')
    .map(v => randomExtend(350 + parseInt(i / 10) * 100, 550 + parseInt(i / 10) * 100)))

const value2 = new Array(50).fill('')
.map((t, i) => new Array(randomExtend(1, 3)).fill('')
  .map(v => randomExtend(750 + parseInt(i / 10) * 100, 850 + parseInt(i / 10) * 100)))

export default {
  series: [
    {
      value: value1
    },
    {
      value: value2
    }
  ],
  x: {
    tags: new Array(50).fill('').map((v, i) => (i + 1) % 5 === 0 ? i + 1 : v)
  },
  y: {
    min: 0,
    max: 2000
  }
}