function foo() {
	console.log('foo')
}

console.log('global start')

setTimeout(() => {
	console.log('setTimeout:')
}, 0)

new Promise((resolve) => {
	console.log('promise')
	resolve()
}).then(() => {
	console.log('promise then')
})

foo()

console.log('global end')
