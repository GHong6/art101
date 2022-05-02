/*
* Author: Garrett Hong
* Created 4/28
*
*/

mapResults = "hi"
var outputEl = document.getElementById("output");
outputEl.innerHTML = mapResults; // put your results here


//Mutiplys number by 10
function multi(x){
    return (x * 10);
}

array = [10,20,30,40,50];

//print array
console.log(array);

//print array after going through function
console.log(array.map(multi));
//print array with anaon function
console.log(
  array.map(function(x){
    return x - 50;
})
);

//square roots num
function sqrt(x){
    var sqrt = Math.sqrt(x)
  return sqrt;
}
//squares num
function sqr(x){
    var results = x ** 2 // your operation on x here
  return results;
}

//adds 1
function add(x){
    var results = x+1
  return results;
}

//subtracts 1
function subtract(x){
    var results = x-1
  return results;
}

console.log(sqrt(25))
array1 = [1,2,3,4,5];

//says hey
function sayHey() {
  console.log('hey');

}

sayHey();
setTimeout(sayHey, 100)

setTimeout(function(){
  console.log("timesup")
}, 5);

var numArray = [50, 100, 6, 20, 34];
//sorts array
function aBetterNumSort(a,b) {
	return a-b;
}
console.log(numArray.sort(aBetterNumSort));

console.log(numArray.sort());
