

//create an end point
var endpoint = "http://www.yerkee.com/api/fortune/wisdom";
function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET"
  })

  //output data from website
  .done(function(data){
  	$("#output").html(data.fortune);
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
