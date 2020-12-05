// 观察者模式（内部是基于发布订阅的）有一个观察者 被观察者
class Subject{ // 被观察者 小宝宝
  constructor(name){
    this.name = name;
    this.arr = [];
    this.state = '我很开心';
  }
  attach(observer){ // 注册观察者 基于发布订阅
    this.arr.push(observer)
  }
  setState(newState){
    this.state = newState;
    this.arr.forEach(o => o.update(this)); // 通知所有观察者，我的状态发生了变化
  }
}

class Observer{ // 观察者 我
  constructor(name){
    this.name = name
  }
  update(s){
    console.log(s.name + '当前状态是' + s.state + '对' + this.name)
  }
}

let s = new Subject('小宝宝')
let o1 = new Observer('我')
let o2 = new Observer('媳妇')

s.attach(o1)
// s.attach(o2)

s.setState('不开心')