const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

suite.add('for', () => {
  for (let i = 0; i < data.length; i++) {
    // do nothing
  }
})
.add('for with cache', () => {
  let i
  for ( i = 0; i < data.length; i++ ) {
    // do nothing
  }
})
.add('forEach', () => {
  data.forEach((item) => {
    // do nothing
  })
})
.on('cycle', (event) => {
  console.log(String(event.target))
})
.on('complete', function () {
  console.log('The winner is... ' + this.filter('fastest').map('name'))
})
.run({ 'async': true })
