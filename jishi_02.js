let node = {
  id: 1,
  level: 0,
  children: [
    {
      id: 2,
      level: 0,
      children: [
        {
          id: 4,
          level: 0,
          children: [],
        },
        {
          id: 5,
          level: 0,
          children: [],
        },
        {
          id: 6,
          level: 0,
          children: [],
        },
      ],
    },
    {
      id: 3,
      level: 0,
      children: [],
    },
  ],
};

// node = 1

let newArr = [],
  i = 0;
const measure = (node) => {
  let arr;
  if (
    node &&
    !(
      typeof node === "string" ||
      typeof node === "number" ||
      typeof node === "boolean"
    )
  ) {
    if (node instanceof Array) {
      arr = node;
    } else {
      arr = [node];
    }
  } else {
    console.log("请传入正确的数据格式");
    return;
  }
  ((index) => (arr).forEach((item) => {
    let obj = {};
    obj.id = item.id;
    obj.level = index;
    newArr.push(obj);
    if (item.children && item.children.length > 0) {
      i++;
      measure(item.children);
    }
  }))(i);
};
measure(node);
newArr = newArr.sort((a, b) => a.level - b.level);
console.log("newArr..................", newArr);
