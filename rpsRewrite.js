//rock paper scissors rewrite
var rockPaperScissors = function(n) {
  //initialize rock/paper/scissors array
  var rps = ['rock', 'paper', 'scissors'];
  //initialize answer array
  var ans = [];  //initialize empty option arrays
  var curr = [];

  //inner recursive function to add all options to output array
  var pickNextOption = function(ansIndex, itemsArr) {
    //if numberIterated through is n, add to array
    if (ansIndex === n) {
      // console.log('itemsArr is' + itemsArr);
      // var newCurr = [];
      // for (var i = 0; i < curr.length; i++) {
      //   newCurr[i] = curr[i];
      // }
      // console.log(curr);
      ans.push(itemsArr);
    } else {
    //else
      //for each item in rock paper scissors
      for (var nextItem = 0; nextItem < rps.length; nextItem++) {
        //add that as next item to array and run recursively
        //curr.push(rps[nextItem]);
        // console.log('current is ' + curr);
        pickNextOption(ansIndex + 1, itemsArr.concat(rps[nextItem]));
        // curr.pop();
        // console.log('else', curr);
      }
    }
  };
  pickNextOption(0, []);
  // console.log('first answer is' + ans[0]);

  //run inner recursive of 0;
  //return answer array
  return ans;
};

// var rock1 = rockPaperScissors(1); 
// console.log('rock1 ' + rock1);
// var rock2 = rockPaperScissors(2);
// console.log('rock2 ' + rock2);
// var rock3 = rockPaperScissors(3); 
// console.log('rock3 ' + rock3);
/*
27 options: 
[rock, rock, rock]
[rock, paper, scissors]
...etc.
*/

//100 floors, 2 eggs, drops at a floor between 1-100
//at specified floor, 
//x = 50 --> wouldn't break at 49
//goal is best worst case scenario (of number of drops you need)
//drop every 9: 



//12 balls 1 is heavier or lighter than the rest, 1 scale--> 3 times
