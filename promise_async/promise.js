console.log("-----------defined----------------");
//宏
const PENDING = "PENDING";
const REJECTED = "REJECTED";
const FULFILLED = "FULFILLED";

class Promise {
  constructor(executor) {
    this.status = PENDING; // 默认是等待态
    this.value = undefined;
    this.reason = undefined;
    // 存放成功时的回调
    this.onResolvedCallbacks = [];
    // 存放失败时的回调
    this.onRejectedCallbacks = [];
    // 只有状态是等待态的时候 才可以更新状态
    this.resolve = (value) => {
      if (this.status == PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn()) // 发布阶段
      }
    };
    this.reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn()) // 发布阶段
      }
    };
    try {
      // executor 执行的时候 需要传入两个参数，给用户来改变状态
      executor(resolve, reject);
    } catch (e) {
      // 表示当前有异常，那就使用这个异常作为promise失败的原因
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
    if(this.status === PENDING){
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason);
      })
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value);
      })
    }
  }
}

module.exports = Promise;
