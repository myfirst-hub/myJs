// 调用某个函数3次之后 再去执行
function after(time, say){ // 高阶函数
  return function(){
    if(--time == 0){
      say();
    }
  }
}

let newSay = after(3, function say(){ // 保存一个变量，到after的内部
  console.log('say');
})

// console.log(newSay());
// console.log(newSay());
// console.log(newSay());
newSay()
newSay()
newSay()