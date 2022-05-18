


function fizzbizz(){
  for (var i=1; i<201; i++) {
    if (i % 105 == 0){
      $("#output").append(i + " Fizz Buzz Boom!<br>");
      console.log(i + " Fizz Buzz Boom!")
    }

    else if (i % 35 == 0){
      $("#output").append(i + " Buzz Boom!<br>");
      console.log(i + " Buzz Boom!")
    }

    else if (i % 21 == 0){
      $("#output").append(i + " Fizz Boom!<br>");
      console.log(i + " Fizz Boom!")
    }

    else if (i % 15 == 0){
      $("#output").append(i + " Fizz Buzz!<br>");
      console.log(i + " Fizz Buzz!")
    }
    else if (i % 7 == 0){
      $("#output").append(i + " Boom!<br>");
      console.log(i + " Boom!")

    }
    else if (i % 5 == 0){
      $("#output").append(i + " Buzz!<br>");
      console.log(i + " Buzz!")

    }
    else if (i % 3 == 0){
      $("#output").append(i + " Fizz!<br>");
      console.log(i + " Fizz!")
    }
    else{
      $("#output").append(i + "<br>");
      console.log(i)

    }
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
