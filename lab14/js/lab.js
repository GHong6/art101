




function FizzBuzz(){

 var num1 = $("#num1").val();
 var num2 = $("#num2").val();
 var num3 = $("#num3").val();
 var word1 = $("#word1").val();
 var word2 = $("#word2").val();
 var word3 = $("#word3").val();
 var max1 = $("#max").val();

 var dict = {
};

dict[word1] = num1;
dict[word2] = num2;
dict[word3] = num3;


console.log(dict);

 // Create items array
 var items = Object.keys(dict).map(function(key) {
   return [key, dict[key]];
 });

 // Sort the array based on the second element
 items.sort(function(first, second) {
   return second[1] - first[1];
 });

 const keys = Object.values(items);

 array1 = Object.values(dict);
 console.log("array1");
 console.log(array1);



 for (var i=1; i<max1; i++) {
   if (i % array1[0] * array1[1] * array [2] == 0){
     $("#output").append(i + " Fizz Buzz Boom!<br>");
     console.log(i + " Fizz Buzz Boom!")
   }

   else if (i % array [2] * array [1] == 0){
     $("#output").append(i + " Buzz Boom!<br>");
     console.log(i + " Buzz Boom!")
   }

   else if (i % array [1] * array [0] == 0){
     $("#output").append(i + " Fizz Boom!<br>");
     console.log(i + " Fizz Boom!")
   }

   else if (i % array [0] * array [1] == 0){
     $("#output").append(i + " Fizz Buzz!<br>");
     console.log(i + " Fizz Buzz!")
   }
   else if (i % array [2] == 0){
     $("#output").append(i + " Boom!<br>");
     console.log(i + " Boom!")

   }
   else if (i % array [1] == 0){
     $("#output").append(i + " Buzz!<br>");
     console.log(i + " Buzz!")

   }
   else if (i % array [0] == 0){
     $("#output").append(i + " Fizz!<br>");
     console.log(i + " Fizz!")
   }
   else{
     $("#output").append(i + "<br>");
     console.log(i)

   }
 }

}
function sortingHat(){
  var name = $("#my-input").val();
  $("#output1").html(name);
  var num = name.length;
    if (num % 4) {
        $("#output1").html("The Sorting Hat has sorted you into gryph");
    }
    else if (num % 3) {
        $("#output1").html("The Sorting Hat has sorted you into dumbl");
    }
    if (num % 2) {
        $("#output1").html("The Sorting Hat has sorted you into slyth");
    }
    else {
      $("#output1").html("The Sorting Hat has sorted you into ham");
  }
}



// for (i=1; i <= 100; i++) {
//     if (i%15 == 0) {
//         console.log("FizzBuzz");
//     } else if (i%3 == 0) {
//         console.log("Fizz");
//     } else if (i%5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }
