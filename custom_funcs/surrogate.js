// Adding class-like surrogate-based inheritance to Function prototype.
Function.prototype.inherits = function(ParentClass) {
  function Surrogate() {}
  Surrogate.prototype = ParentClass.prototype;
  this.prototype = new Surrogate();
};
