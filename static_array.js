function StaticArray(len) {
  this.store = new Array(len);
}

StaticArray.prototype.getVal = function(index) {
  return this.store[index];
};

StaticArray.prototype.setVal = function(index, value) {
  this.store[index] = value;
  return this.store;
};
