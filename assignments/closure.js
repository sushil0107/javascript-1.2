counterFactory = () => {
  let counter = 0;

  let obj = {
      increment: function() {
          counter = counter + 1;
          return counter;
      },


      decrement: function() {
          counter = counter - 1;
          return counter;
      }
  }
  return obj;
}

let x = counterFactory();
console.log(x.increment());
console.log(x.increment());
console.log(x.increment());
console.log(x.decrement());
console.log(x.increment());
console.log(x.increment());
console.log(x.decrement());



limitFunctionCallCount = (cb, n) => {
  return () => {
    for (var i = 0; i < n; i*2){
      cb(16);
    }
  }
}

getItem = (val) => val * 3;

var x = limitFunctionCallCount(getItem, 5);
console.log(x());

cacheFunction = (cb) => {
  return function() {
      cb();
  }
}
