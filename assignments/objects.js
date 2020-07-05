const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

keys = (obj) => {
  let arr = [];
  for (let i in obj) {
      arr.push(i);
  }
  return arr;
}
console.log(keys(testObject));

values = (obj) => {
  let arr = [];
  for (let i in obj){
    arr.push(obj[i]);
  }
  return arr;
}
console.log(values(testObject));


mapObject = (obj, cb) => {
  for (let i in obj) {
      cb(obj[i], i);
  }
  return obj;
}

console.log(mapObject(testObject, (val) => val));


pairs = (obj) => {
  let arr = [];
  for (let i in obj) {
      arr.push([i, obj[i]]);
  }
  return arr;
}

console.log(pairs(testObject));

/* STRETCH PROBLEMS */

invert = (obj) => {
  let arr = [],
  temp;
  for (let key in obj){
    arr.push(key, obj[key]);
  }
  for (let i = 0; i < arr.length - 1; i += 2) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  let newObj = {};
  for (i = 0; i < arr.length - 1; i += 2)
    newObj[arr[i]] = arr[i + 1];
  return newObj;
}

console.log(invert(testObject));


defaults = (obj, defaultProps) => {
  for (var i in defaultProps) {
    if (obj.hasOwnProperty(i) == false) {
      obj[key] = defaultProps[i];
    }
  }
  return obj;
}
console.log(defaults(testObject, testObject));
