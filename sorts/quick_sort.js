var quickSort = function(arr) {
  if (arr.length === 0) {
    return [];
  }

  var left = [];
  var right = [];
  var pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  var sleft = quickSort(left);
  var sright = quickSort(right);

  return sleft.concat(pivot, sright);
};
