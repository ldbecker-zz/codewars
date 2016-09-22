var isPrime = function(num) {
  if (num === 1) return false;
  for(var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
}

var primeFactors = function(num) {
  var results = [];
  if(isPrime(num)) {
    results.push(num);
    return results;
  }
  var curNum = num;
  while(!isPrime(curNum)) {
    for(var i = 2; i < curNum; i++) {
      if((curNum % i) === 0) {
        curNum /= i;
        if(isPrime(i)) {
          results.push(i);
        }
        break;
      }
    }
  }
  results.push(curNum);
  return results;
}

var isKPrime = function(num, k) {
  return primeFactors(num).length === k;
}

var consec_kprimes = function(k, arr) {
  var count = 0;
  for(var i = 0; i < arr.length - 1; i++) {
    if(isKPrime(arr[i], k) && isKPrime(arr[i + 1], k)) {
      count += 1;
    }
  }
  return count;
};

