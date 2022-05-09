/*
* Author: Garrett Hong
* Created 5/4
*
*/



//get name
var buttonEl = document.getElementById('button');
buttonEl.addEventListener('click', function() {
  var name = document.getElementById('my-input').value;

  var hi = document.getElementById("p1");
  hi.innerHTML = "Hello, " + name;

  var name1 = name.split('');

  //shuffle name
  var shuffle = name1.sort(() => (Math.random() > .5) ? 1 : -1);
  console.log("shuffle: ", shuffle.join(''));

  var bye = document.getElementById("output");
  bye.innerHTML = shuffle.join('');


});
