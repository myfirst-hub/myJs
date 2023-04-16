## new Promise(executor); // executor = (resolve, reject) => {}

## 执行 executor(resolve, reject); 这里会返回Promise的状态值 FULFILLED || REJECTED

## 当executor是同步代码，执行完同步代码会调用resolve || reject返回Promise状态值，然后执行then方法（onFulfilled，onRejected这两个方法被微任务异步执行包裹）

## 当executor是异步代码，会先执行then方法，此时Promise的状态值为PENDING，this.callbacks添加then方法中的两个回调函数onFulfilled，onRejected，等待异步代码执行完毕，调用resolve || reject

## then方法会返回一个Promise实例，形成链式调用

## Promise.all(promiseArr)会遍历传进来的promiseArr,搜集每个promise的resolve的数量之和等于promiseArr的长度时，resolve出去。

## Promise.race(promiseArr)会遍历传进来的promiseArr,当有promise返回resolve时，直接resolve出去

## Promise.resolve，Promise.reject，Promise.all和Promise.race的执行都会返回Promise实例，形成链式调用
