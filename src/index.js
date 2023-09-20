module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let openI;
  let closeI;
  let stack = [];
  let open = [
    '{',
    '[',
    '(',
    ''
  ];
  let close = [
    '}',
    ')',
    ']',
    ''
  ];
for (let i = 0; i < arr.length; i++) {
  openI = open.indexOf(arr[i]);
  if (openI !== -1) {
      stack.push(openI);
}
  closeI = close.indexOf(arr[i]);
  if (closeI !== -1) {
    openI = stack.pop()
    if (openI !== closeI) {
      return false
    }
  }
}
if(stack.length !== 0){
  return false
}
return true
}
