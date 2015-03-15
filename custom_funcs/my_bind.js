// Adding our custom bind function to Function prototype.
Function.prototype.myBind = function(context) {
  var that = this;
  var bindArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var callArgs = Array.prototype.slice.call(arguments);
    return that.apply(context, bindArgs.concat(callArgs));
  };
};
