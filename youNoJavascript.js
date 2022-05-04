
function foo() {
  try {
    console.log('try...............')
    return 2 // try有return 返回值在finally后执行
  } finally {
    console.log('finally..........')
    return 3 // finally中的return值会覆盖try中的return值
  }
}

// console.log(foo())

var p = Promise.resolve(42)

// p.then((val) => {
//   console.log(val.toLowerCase())
// }, (err) => {
//   console.log(err, 'err...............')
// }).then(() => {}, (err) => {
//   console.log(err, 'err.....1..........')
// })

function *foo() {
  console.log('*foo() start.........')
  yield 3;
  yield 4;
  console.log('*foo() finished................')
}

function *bar() {
  yield;
  yield 2;
  yield *foo();
  yield 5;
}

const it = bar();

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

