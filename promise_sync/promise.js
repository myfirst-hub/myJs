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
    // 只有状态是等待态的时候 才可以更新状态
    this.resolve = (value) => {
      if (this.status == PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    };
    this.reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    };
    try {
      // executor 执行的时候 需要传入两个参数，给用户来改变状态
      executor(this.resolve, this.reject);
    } catch (e) {
      // 表示当前有异常，那就使用这个异常作为promise失败的原因
      this.reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }
}

module.exports = Promise;
