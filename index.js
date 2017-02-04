const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

function add(a, b) {
  return a + b
}

const addAnon = (a, b) => {
  return a + b
}

suite.add('nothing', () => {
  // do nothing
})
.add('add', () => {
  1 + 2
})
.add('add with function', () => {
  add(1, 2)
})
.add('add with anonym function', () => {
  addAnon(1, 2)
})
.on('cycle', (event) => {
  console.log(String(event.target))
})
.on('complete', function () {
  console.log('The winner is... ' + this.filter('fastest').map('name'))
})
.run({ 'async': true })
