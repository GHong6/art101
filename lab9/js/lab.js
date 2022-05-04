/*
* Author: Garrett Hong
* Created 5/4
*
*/

//assign old element to var
var oldEl = document.getElementById("nine");

//create new element
var new1E = document.createElement("p");
//assign stuff to new element
new1E.id = "ten";
new1E.innerHTML = "10 : ten : X";
new1E.style.fontSize = "10pt";
oldEl.appendChild(new1E);

var new2E = document.createElement("p");
new2E.id = "eleven";
new2E.innerHTML = "11 : eleven : XI";
new2E.style.fontSize = "11pt";
oldEl.appendChild(new2E);


// var oldEl = document.getElementById("nine");
// var newEl = document.createElement("p");
// oldEl.appendChild(newEl);
// newEl.innerHTML = "asfsdfsdfsdfs";
