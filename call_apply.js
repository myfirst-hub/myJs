let obj = {
  name: "sun",
};

function addAge(age, long) {
  this.age = age;
  this.long = long;
  return this;
}

// console.log(addAge.call(obj, 30));

Function.prototype.newCall = function (context) {
  if (!context) context = window;
  // 将函数设为对象的属性（方法）
  context.attr = this;
  const args = [];

  // console.log('arguments................', arguments)
  for (let i = 1; i < arguments.length; i++) {
    // args.push('arguments[' + i + ']');
    args.push(arguments[i]);
  }
  // console.log('args................', args)

  // 执行该方法 获得返回值
  // const result = eval('context.attr(' + args.toString() + ')');
  const result = context.attr(...args);
  // 删除该方法
  delete context.attr;
  return result;
};

// console.log(addAge.newCall(obj, 40, 13));
// console.log(obj);

Function.prototype.newApply = function (context, arr) {
  context = Object(context) || window;
  context.attr = this;
  let result;
  if (!arr) {
    result = context.attr();
  } else {
    let args = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.attr(" + args.toString() + ")");
  }
  delete context.attr;
  return result;
};

console.log(addAge.newApply(obj, [40, 15]));
console.log(obj);


//call、apply、bind作用：改变函数执行时的上下文，再具体一点就是改变函数运行时的this指向
//call、apply和bind区别：call和apply改变了函数的this上下文后便执行该函数,而bind则是返回改变了上下文后的一个函数。
//call和apply区别：他们俩之间的差别在于参数的区别

//js中this指向：
//1.普通函数中的this都引用window对象
//2.构造函数中的this指向的是它实例化的对象
//3.函数调用call（）、apply()方法后，this的引用为call apply 方法传进去的第一个参数
//4.作为对象属性值的函数，其内部this指向的就是这个对象
