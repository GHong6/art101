//
//
// $("#button").click(function(){
//   var hours = $("#my-input").val();
//
//
//   if (hours >= 12) {
//       $("#output1").html(hours + " Thats a lot...");
//   }
//
//   if (hours >= 7 && hours < 12) {
//       $("#output1").html(hours + " Is a good ammont of sleep");
//   }
//
//   if (hours < 6 && hours >2) {
//       $("#output1").html(hours + " You need more sleep. The recommeded hours of sleep is 7-9");
//   }
//
//   else {
//     $("#output1").html("Go to sleep. The recommeded hours of sleep is 7-9");
//
//   }
//
// })



$("#button").click(function(){
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
  })



//
//
// $("#button").click(function(){
//   var name1 = $("#my-input").val();
//
//   function sortingHat(name){
//     var num = name.length;
//
//     if (num % 4) {
//         $("#output1").html("gryph");
//     }
//
//     else if (num % 3) {
//         $("#output1").html("dumble");
//     }
//
//     if (num % 2) {
//         $("#output1").html("slyth");
//     }
//
//     else {
//       $("#output1").html("Ham");
//
//
//     }
//
//
//   }
//
// }
//
// // var name = prompt('give name')
// var house = sortingHat(name1);
//
// var house = sortingHat(name1);
// $("#output1").html(house);
