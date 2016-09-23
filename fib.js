/*
productFib(714) # should return [21, 34, true], 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return [34, 55, false], 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
                */

var productFib = function(n) {
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  var results = [];
  results.push(0);
  results.push(1);
  for(var i = 2; i < n; i++) {
    if(results[i - 2] * results[i - 1] === n) {
      return [results[i-2], results[i-1], true];
    } else if (results[i - 2] * results[i - 1] > n) {
      return [results[i-2], results[i-1], false];
    } else {
      results.push(results[i - 2] + results[i - 1]);
    }
  }
};

var productFib = function(prod) {
  var fibs = allFibs()
}