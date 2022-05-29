

//create an end point
var endpoint = "https://xkcd.com/info.0.json";
function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET"
  })

  //output data from website
  .done(function(comicObj){
  	$("#title").append(comicObj.title);
		$("#output").append("<h1>" +comicObj.title);
    $("#output").append("<img src=" + comicObj.img + ">");
    $("#output").append("<p>" + comicObj.alt);
    console.log("done");
		console.log(comicObj);


  })
  //return error if systems not working
  .fail(function(request, error){
  	$("#output").html("Error");
    console.log("error")
  })
}

//create button
$("button").click(getAjax);


// //create an end point
// var endpoint = "https://api.nasa.gov/planetary/apod=x9WtStTJ8q0MsXVe8SwfwOMCI5JDg2wZa9mNOM6O";
// function getAjax() {
// 	$.ajax({
//   	url: endpoint,
//     type: "GET",
// 		api_key:"x9WtStTJ8q0MsXVe8SwfwOMCI5JDg2wZa9mNOM6O",
// 		count : 1
//   })
//
//   //output data from website
//   .done(function(data){
// 		console.log(data);
//   	$("#title").append(data.title);
// 		$("#output").append("<h1>" +data.title);
//     $("#output").append("<img src=" + data.img + ">");
//     $("#output").append("<p>" + data.alt);
//     console.log("done");
// 		console.log(data);
//
//
//   })
//   //return error if systems not working
//   .fail(function(request, error){
//   	$("#output").html("Error");
//     console.log("error")
//   })
// }
//
// //create button
// $("button").click(getAjax);

//
// https://api.nasa.gov/planetary/apod?api_key=x9WtStTJ8q0MsXVe8SwfwOMCI5JDg2wZa9mNOM6O

//
// "month": "5",
// "num": 2624,
// "link": "",
// "year": "2022",
// "news": "",
// "safe_title": "Voyager Wires",
// "transcript": "",
// "alt": "Also, they're getting increasingly worried that someone will accidentally hit the 'retract' button, and that the end of the cable thrashing around as it winds up could devastate the Earth's surface.",
// "img": "https://imgs.xkcd.com/comics/voyager_wires.png",
// "title": "Voyager Wires",
// "day": "25"
