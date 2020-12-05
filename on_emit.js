const fs = require('fs');
const path = require('path');

function getPath(str){
  return path.resolve(__dirname,  str);
}

// 订阅 就是将要做的事情先存储好，稍后发布的时候让订阅好的事情依次执行
let events = {
  arr:[], // emit发布 on订阅 它们两者之间没有联系
  on(fn){
    this.arr.push(fn)
  },
  emit(){
    this.arr.forEach(fn => fn())
  }
}

events.on(() => {
  console.log('读取到了数据')
})

events.on(() => {
  if(Object.keys(renderObj).length == 2){
    console.log('都读取完毕了')
  }
})

let renderObj = {};
fs.readFile(getPath('static/name.txt'), 'utf8', (err, data) => {
  renderObj.name = data;
  events.emit();
})
fs.readFile(getPath('static/age.txt'), 'utf8', (err, data) => {
  renderObj.age = data;
  events.emit();
})