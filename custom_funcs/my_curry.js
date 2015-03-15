// Creating a custom curry function.
var myCurry = function(fn, obj, numArgs) {
  var args = [];

  function curriedFun(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn.apply(obj, args);
    } else {
      return curriedFun;
    }
  }

  return curriedFun;
};
