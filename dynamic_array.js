// Builds on top of StaticArray.
function DynamicArray() {
  this.store = new StaticArray(8);
  this.capacity = 8;
  this.len = 0;
}

DynamicArray.prototype.getVal = function(index) {
  return this.store[index];
};

DynamicArray.prototype.setVal = function(index, value) {
  this.store[index] = value;
  return this.store;
};

DynamicArray.prototype.pop = function() {
  var value = this.store[this.len - 1];
  this.store[this.len - 1] = null;
  this.len--;
};

DynamicArray.prototype.push = function(value) {
  if (this.len === this.capacity) {
    this.resize();
  }

  this.len++;
  this.store[this.len - 1] = value;

  return null;
};

DynamicArray.prototype.resize = function() {
  var newCapacity = this.capacity * 2;
  var newStore = new Array(newCapacity);

  for (var i = 0; i < this.len; i++) {
    newStore[i] = this.store[i];
  }

  this.capacity = newCapacity;
  this.store = newStore;
};

DynamicArray.prototype.shift = function() {
  var value = this.store[0];

  for (var i = 1; i < this.len; i++) {
    this.store[i - 1] = this.store[i];
  }

  this.store[this.len - 1] = null;
  this.len--;

  return value;
};

DynamicArray.prototype.unshift = function(value) {
  if (this.len === this.capacity) {
    this.resize();
  }

  this.len++;

  for (var i = (this.len - 2); i >= 0; i--) {
    this.store[i + 1] = this.store[i];
  }

  this.store[0] = value;

  return null;
};
