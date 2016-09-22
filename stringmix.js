/*
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

var mix = function(s1, s2) {
  var obj1 = {};
  var obj2 = {};
  for (var i = 0; i < s1.length; i++) {
    if (!obj1[s1.charAt(i)]) {
      obj1[s1.charAt(i)] = 1;
    } else {
      obj1[s1.charAt(i)] += 1;
    }
  }
  for (var i = 0; i < s2.length; i++) {
    if (!obj2[s2.charAt(i)]) {
      obj2[s2.charAt(i)] = 1;
    } else {
      obj2[s2.charAt(i)] += 1;
    }
  }
  var arr = [];
  for(var keys in obj1) {
    if(obj2[keys]) {
      if(obj1[keys] > obj2[keys]) {
        arr.push(['1', keys, obj1[keys]]);
      } else if (obj1[keys] === obj2[keys]) {
        arr.push(['=', keys, obj1[keys]]);
      } else {
        arr.push(['2', keys, obj2[keys]]);
      }
    } else {
      arr.push(['1', keys, obj1[keys]]);
    }
  }
  for(var keys in obj2) {
    if(!obj1[keys]) {
      arr.push(['2', keys, obj2[keys]]);
    }
  }
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  arr = arr.filter(function(elem) {
    return elem[2] !== 1 && (letters.indexOf(elem[1]) !== -1);
  });
  arr.sort(function(a,b) {
    return b[2] - a[2];
  });
  console.log(JSON.stringify(arr));

  var retStr = '';
  for (var i = 0; i < arr.length; i++) {
    retStr += arr[i][0] + ':' + Array(arr[i][2] + 1).join(arr[i][1]) + '/';
  }
  return retStr.slice(0, retStr.length - 1);
};
