//Garrett Hong
//5/25

//create an end point
var endpoint = "https://pokeapi.co/api/v2/pokemon/lucario";
function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET"
  })

  //output data from website
  .done(function(data){
    $("#output").append("<img src=" + data.sprites.other.home.front_default + ">");


    console.log("done")

  })
  //return error if systems not working
  .fail(function(request, error){
  	$("#output").html("Error");
    console.log("error")
  })
}

//create button
$("button").click(getAjax);


//
// [
//     {
//         "id": "0",
//         "author": "Alejandro Escamilla",
//         "width": 5616,
//         "height": 3744,
//         "url": "https://unsplash.com/...",
//         "download_url": "https://picsum.photos/..."
//     }
// ]
