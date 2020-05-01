// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  let input = $("input").val();
  let url = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=pg&api_key=dc6zaTOxFJmzC`
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data["data"][0]["url"]);
    $(".text-center").empty();
    
    //display all results
    data["data"].forEach(function(gif) {
      let img = gif["images"]["downsized_large"]["url"];
      $(".text-center").append("<img src=" + `"${img}"` + ">");
    });
    
    //display first result
    // let img = data["data"][0]["images"]["downsized_large"]["url"];
    // $(".text-center").html("<img src=" + `"${img}"` + ">")
  });
  
});

