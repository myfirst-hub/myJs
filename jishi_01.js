const findFirstNode = (nodeList) => {
  if (!nodeList || nodeList.length === 0) {
    return "";
  }
  if (nodeList.length === 1) {
    return nodeList[0].id;
  }
  let firstId;
  let i = 0;
  nodeList.forEach((item, index) => {
    let isIfindN = false;
    let isNfindI = false;
    nodeList.forEach((ite) => {
      if (item.id === ite.nextId) {
        isIfindN = true;
      }
    });
    nodeList.forEach((ite) => {
      if (item.nextId === ite.id) {
        isNfindI = true;
      }
    });
    if (!isIfindN && !isNfindI) {
      console.log("第" + (index + 1) + "项不在链表内");
    }
    if (!isIfindN && isNfindI) {
      firstId = item.id;
    }
    if (isIfindN && isNfindI) {
      i++;
    }
  });
  if (i === nodeList.length) {
    console.log("存在环状链表");
  }
  return firstId || "";
};
const list = [
  { id: 3, nextId: 0 },
  { id: 1, nextId: 2 },
  { id: 2, nextId: 3 },
];
//输出 1
console.log(findFirstNode(list));
