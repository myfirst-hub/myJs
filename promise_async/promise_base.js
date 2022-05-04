// 什么是promise（基于回调） 解决那些问题
// 1.回调地狱（代码不好维护，错误处理非常麻烦且不能同意处理错误）
// 2.多个请求的并发问题

// promise 是一个类 类只需要用的时候new一下

// 1.在new Promise是需要传递一个执行器函数（executor）这个函数默认就会被执行 立即执行
// new Promise(() => {
//   console.log(1);
// });
// console.log(2); // 12
// 2.每个promise都有三个状态：pending 等待态 fulfilled成功态 rejected 失败态
// 3.默认创建一个promise 是等待态 默认提供给你两个函数 resolve让promise变成成功态，rejected让promise变成失败态
// 4.每个promise的实例都具备一个then方法 then方法中传递两个参数1.成功的回调2.失败的回调
// 5.如何让promise变成失败态  reject() / 可以抛出一个错误
// 6.如果多次调用成功或者失败 只会执行第一次，一旦状态变化了 就不能再变成成功的状态

// 1.自己实现基本的promise
// 2.语法commonjs规范 我们可以在一个模块中导出一个变量，另一个模块来引用
let Promise = require("./promise");
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success"); // 此时如果调用了resolve 就让刚才存储的成功的回调函数去执行
  }, 1000)
});

// 同一个promise实例 可以then多次
// 核心就是发布订阅（订阅阶段）
promise.then(
  (success) => {
    console.log("success............", success);
    return 1
  },
  (fail) => {
    console.log("fail................", fail);
  }
)
promise.then(
  (success) => {
    console.log("success............", success);
  },
  (fail) => {
    console.log("fail................", fail);
  }
);
