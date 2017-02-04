const Benchmark = require('benchmark')
const suite = new Benchmark.Suite

function add(a, b) {
  return a + b
}

const addAnon = (a, b) => {
  return a + b
}

let addAnonLet = (a, b) => {
  return a + b
}

let addAnonWithCallback = (a, b, cb) => {
  cb(a, b)
}

suite.add('add with function', () => {
  add(1, 2)
})
.add('add with anonym function const', () => {
  addAnon(1, 2)
})
.add('add with anonym function let', () => {
  addAnonLet(1, 2)
})
.add('callback named function', () => {
  addAnonWithCallback(1, 2, add)
})
.add('callback anonym function', () => {
  addAnonWithCallback(1, 2, addAnonLet)
})
.on('cycle', (event) => {
  console.log(String(event.target))
})
.on('complete', function () {
  console.log('Benchmark finished!')
})
.run({ 'async': true })

