// 1.柯里化（Currying），又称部分求值（Partial Evaluation），可以理解为提前接收部分参数，延迟执行，不立即输出结果，
// 而是返回一个接受剩余参数的函数。因为这样的特性，也被称为部分计算函数。柯里化，是一个逐步接收参数的过程。
// 作用： 参数复用 提前返回 延迟计算/运行
// 实现通用的函数柯里化
const curring = (fn, arr = []) => {
  let len = fn.length; // 长度指代的是函数的参数的个数
  return (...args) => {
    // 保存用户传入的参数
    arr = [...arr, ...args];
    if (arr.length < len) {
      return curring(fn, arr);
    }
    return fn(...arr); // 如果达到了执行个数后 会让函数执行
  };
};

// 示例1
const add = (a, b, c, d) => {
  return a + b + c + d;
};
// console.log(curring(add,[1,2])(3)(4));

// 示例2
function checkType(type, content) {
  //判断数据类型的四种方法 https://www.cnblogs.com/liuyuanfang/p/13899859.html
  return Object.prototype.toString.call(content) == `[object ${type}]`;
}
let util = {};
["Number", "String", "Boolean"].forEach((item) => {
  // 相当于将函数先依次调用
  util["is" + item] = curring(checkType)(item);
});
// console.log(util.isString('a'))
// console.log(util.isNumber(3))
// console.log(util.isBoolean(true))

// 2.反柯里化，是一个泛型化的过程。它使得被反柯里化的函数，可以接收更多参数。使本来只有特定对象才适用的方法，扩展到更多的对象。
// obj.func(arg1, arg2)   =》=》=》func(obj, arg1, arg2)
// https://blog.csdn.net/audreylau/article/details/100882409

var uncurrying = function (fn) {
  return function () {
    console.log('arguments..................', arguments)
    return Function.prototype.call.apply(fn, arguments);
  };
};

var $ = {};
console.log($.push); // undefined
var pushUncurrying = uncurrying(Array.prototype.push);
$.push = function (obj) {
  pushUncurrying(this, obj);
};
$.push("first");
console.log('$...............', $);
console.log($.length); // 1
console.log($[0]); // first
console.log($.hasOwnProperty("length"));
