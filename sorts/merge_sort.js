var mergeSort = function(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }

  var left = arr.slice(0, len / 2);
  var right = arr.slice(len / 2);

  var sleft = mergeSort(left);
  var sright = mergeSort(right);

  return merge(sleft, sright);
};

var merge = function(sleft, sright) {
  var merged = [];
  var l_idx = 0;
  var r_idx = 0;

  while ((l_idx < sleft.length) || (r_idx < sright.length)) {
    if ((r_idx >= sright.length) || (sleft[l_idx] < sright[r_idx])) {
      merged.push(sleft[l_idx]);
      l_idx++;
    } else {
      merged.push(sright[r_idx]);
      r_idx++;
    }
  }

  return merged;
};
