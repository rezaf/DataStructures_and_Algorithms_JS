// Creating a custom call function based on apply.
var myCall = function(fn, obj) {
  var args = Array.prototype.slice.apply(arguments, [2]);
  return fn.apply(obj, args);
};
