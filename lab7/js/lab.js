/*
* Author: Garrett Hong
* Created 4/28
*
*/

//sorting name
function sortName() {

  var userName = window.prompt("Hello, please enter your full name.");

  //splits string into array
  var nameArray = userName.split('');
  // console.log("nameArray: ", nameArray);

  //reverses name array
  var nameReverse = nameArray.reverse();
  // console.log("nameReverse: ", nameReverse);

  //sorts array
  var letterSort = nameArray.sort();
  // console.log("letterSort: ", letterSort);

  //joins array
  var nameSorted = letterSort.join('');
  //console.log("nameSort: ", nameSorted);

  //random shuffle
  var shuffle = nameArray.sort(() => (Math.random() > .5) ? 1 : -1);
  //console.log("shuffle: ", shuffle.join(''));

  return nameSorted;


}

function revString(x){
    var nameArray = x.split('');
    var rev = nameArray.reverse();
  return rev.join("")
}


document.writeln("Here I sorted your name. ", sortName(), "</br>");
