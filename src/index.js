
exports.min = function min (array) {
  if (arguments.length != 0 && array.length != 0) {
    array.sort((a,b) => a-b);
    return array[0];
  } else return 0;
}

exports.max = function max (array) {
  if (arguments.length != 0 && array.length != 0) {
    array.sort((a,b) => b-a);
    return array[0];
  } else return 0;
}

exports.avg = function avg (array) {
  if (arguments.length != 0 && array.length != 0) {
    let answer = array.reduce((sum, current) => sum + current, 0)
    return answer/ array.length;
  } else return 0;
}
