var isPrime = function(num) {
  if (num === 1) return false;
  for(var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return true;
};

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

//create a list of prime numbers up to and equal to n
var primeListOne = function(m, n) {
  var results = [];
  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      results.push(i);
    }
  }
  return results;
};

var isPalindrome = function(n) {
  var stringNumber = '' + n;
  for (var i = 0; i < stringNumber.length; i++) {
    if (stringNumber.charAt(i) !== stringNumber.charAt(stringNumber.length - i - 1)) {
      return false;
    }
  }
  return true;
};

var reverseNumber = function(n) {
  var stringNumber = ''+ n;
  var reversed = '';
  for (var i = stringNumber.length - 1; i >= 0; i--) {
    reversed += stringNumber[i];
  }
  return Number(reversed);
};

var findEmirp = function(n) {
  //make prime list up to n
  var primes = primeListOne(n * 2);
  var count = 0;
  var highestEmirp = 0;
  var sum = 0;

  //for loop
  for (var i = 2; i <= n; i++) {
    if (!isPalindrome(i)) {
      if (primes.indexOf(i) !== -1) {
        if (primes.indexOf(reverseNumber(i)) !== -1) {
          // console.log('emirp = ' + i);
          count += 1; 
          sum += i;
          highestEmirp = i;
        }
      }
    }
  }
  return [count, highestEmirp, sum];
};

var findAllEmirps = function(n) {
  var allAnswers = {};
  for (var i = 2; i < n; i ++) {
    allAnswers[i] = findEmirp(i);
  }
  return allAnswers;
};


var gap = function(g, m, n) {
  var primes = primeListOne(n);
  for(var i = m; i <= n; i++) {
    var pos = primes.indexOf(i);
    if(pos !== -1) {
      if(primes.indexOf(i + g) === pos + 1) {
        return [i, i + g];
      }
    }
  }
  return null;
};

var validISBN10 = function(isbn) {
  var count = 0;
  for (var i = 0; i < isbn.length; i++) {
    var curNum;
    if(isbn[i] === 'X') {
      curNum = 10;
    } else {
      curNum = Number(isbn[i]);
    }
    count += (curNum * (i+1));
  }
  return count % 11 === 0;
};