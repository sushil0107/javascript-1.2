const items = [1, 2, 3, 4, 5, 5];

each =(elements, cb) => {

  for (let i = 0; i < elements.length; i++) {
      cb(elements, i);
  }
};

getItem = (array, index) => console.log(array[index]);

each(items, getItem);


map = (elements, cb) => {
  let arr = [];
  for (let i = 0; i < elements.length; i++) {
      arr.push(cb(elements[i], i, elements));
  }
  return arr;
};

powerItSelf = (val, index, array) => val ** 2;

console.log(map(items, powerItSelf));


reduce = (elements, cb, startingValue) => {
  if (startingValue === undefined)
      startingValue = elements[0];
  for (let i = 1; i < elements.length; i++) {
      startingValue = cb(startingValue, elements[i]);
  }
  return startingValue;
};

arrSum = (num1, num2) => num1 + num2;

console.log(reduce(items, arrSum));


find = (elements, cb) => {
  for(let i=0; i < elements.length; i++){
    if(cb(elements[i])){
      return elements[i];
    }
  }
};

isDivisibleBy13 = (number)=> number %13 === 0;

console.log(find(items, isDivisibleBy13));

filter = (elements, cb) => {
  let arr = []
  for(let i=0; i < elements.length; i++){
    if(cb(elements[i])){
      arr.push(elements[i]);
    }
  }
  if (arr.length == 0){
    return 'No element isDivisibleBy13'
  }
  return arr;
};
console.log(filter(items, isDivisibleBy13));

const nestedArray = [1, [2], [[3]], [[[4]]]];

var arr = [];

flatten = (elements) => {
    for (let i = 0; i < elements.length; i++) {
        if (Array.isArray(elements[i]))
            flatten(elements[i]);
        else {
            arr.push(elements[i]);
        }

    }
    return arr;
}
console.log(flatten(nestedArray))