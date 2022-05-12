/*
* Author: Garrett Hong
* Created 5/11
*
*/



var slideShowElement = $("#doggo");
$("#doggo").html("HELLOJSCRIPT");


//add challenges
var slideShowElement = $("#challenge");
$("#challenge").append("<button id ='ca'>Challenge");

$("#ca").click(function(){
      $("#ca").toggleClass("selected");
  		$("#challenge").append("<br> We didn't run into any big problems. Just trying to understand the concept was a bit difficult.");
      $("#all").css("background-color", "#94bdff");
	});

//add problems
  var slideShowElement = $("#problems");
  $("#problems").append("<button id ='pr'>Problems");

  $("#pr").click(function(){
        $("#pr").toggleClass("selected");
    		$("#problems").append("<br> No really big problems. Trying to retain all the information is difficult.");
        $("#all").css("background-color", "#715df0");
  	});



//adding a div class with a button
// $("#doggo").append("<div class= 'cat'></div><button id = 'blue'>press me to change color");



$("#blue").click(function(){

  		$("#doggo").append("hi");
      $("#content").css("font-color", "getRandomColor()");
      console.log(getRandomColor())
	});

$(".cat").css("fontSize", "100px");





  function getRandomColor() {
        $("#title").css("color", ColorCode());
     }

  function ColorCode() {
        var makingColorCode = '0123456789ABCDEF';
        var finalCode = '#';
        for (var counter = 0; counter < 6; counter++) {
          finalCode =finalCode+ makingColorCode[Math.floor(Math.random() * 16)];
       }
       return finalCode;
    }
