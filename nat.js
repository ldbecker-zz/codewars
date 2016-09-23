//implement functions with nat
function zero(){}

function succ(nat) {
  return function() {
    return nat;
  };
}

var natToInt = function(nat) {
  //base case
  if (nat() === undefined) {
    return 0;
  } else {
    return 1 + natToInt(nat());
  }
  //recursive case
}

var intToNat = function(int) {
  if (int === 0) {
    return zero;
  } else {
    return succ(intToNat(int-1));
  }
};

var toString = function(nat) {
  if (nat() === undefined) {
    return 'zero';
  } else {
    return 'succ(' + toString(nat()) + ')'; 
  }
};

var add = function(nat1, nat2) {
  //base case one if nat1 = 0
  if (nat1() === undefined) {
    return nat2;
  } else if (nat2() === undefined) {
    return nat1;
  } else {
    return succ(add(nat1(),nat2));
  }
  //base case two if nat2 = 0
};

var mul = function(nat1, nat2) {
  if (nat1() === undefined || nat2() === undefined) {
    return zero;
  } else if (nat1()() === undefined) {
    return nat2;
  } else if (nat2()() === undefined) {
    return nat1;
  } else {
    return add(nat1, mul(nat1, nat2()));
  }
};

var compareTo = function(nat1, nat2) {
  if (nat1() === undefined && nat2() === undefined) {
    return 0;
  } else if (nat1() === undefined && nat2() !== undefined) {
    return -1;
  } else if (nat1() !== undefined && nat2() === undefined) {
    return 1;
  } else {
    return compareTo(nat1(), nat2());
  }

}
// console.log(mul(zero, zero) === zero); // true
// console.log(mul(succ(zero), zero) === zero); // true
// console.log(natToInt(mul(intToNat(10), intToNat(15)))); // 150
// compareTo(zero, succ(zero)) < 0; // true
console.log(compareTo(succ(zero), zero) > 0); // true
console.log(compareTo(succ(zero), succ(zero))); // 0
// console.log(toString(zero));
// console.log(toString(succ(succ(zero))));
// console.log(intToNat(0));
// console.log(natToInt(intToNat(5)));
// add(zero, zero) === zero; // true
// add(succ(zero), zero); // is the same that succ(zero)
// add(succ(zero), succ(zero)); // is the same that succ(succ(zero))
//console.log(add(succ(zero), succ(succ(zero)))); // is the same that succ(succ(succ(zero)))
// console.log(natToInt(add(zero, succ(zero)))); // 1
// console.log(natToInt(add(intToNat(10), intToNat(15)))); // 25