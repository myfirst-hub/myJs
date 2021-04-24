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
// newSay()
// newSay()
// newSay()


let arr = [1,2,3]
let len = arr.length;
for(let i =0; i<len; i++){
  for(let j =0; j<len; j++){
    if(i !== j){
      let a = [i+1];
      a.push(j+1);
      console.log(a)
    }
  }
}