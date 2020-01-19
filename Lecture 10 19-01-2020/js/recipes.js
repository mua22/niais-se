$(function() {
  //this code will be called after page load
  loadRecipies();
  $(".delete").click(handleDelete);
  $("body").on("click", ".delete", handleDelete);
});
var apiUrl = "https://usman-recipes.herokuapp.com/api/recipes";
function loadRecipies() {
  //send ajax request
  console.log("Sending ajax request");
  $.get(apiUrl, handleGetResponse);
}
function handleGetResponse(res) {
  $("#recipes").html("");
  for (var i = 0; i < res.length; i++) {
    var recipe = res[i];
    var singleRecipe = "<div class='recipe'>";
    singleRecipe += "<h2>" + recipe.title + "</h2>";
    singleRecipe +=
      "<button class='btn btn-danger delete' data-id='" +
      recipe._id +
      "'>Delete</button>";
    singleRecipe += "<p>" + recipe.body + "</p>";
    singleRecipe += "</div>";
    $("#recipes").append(singleRecipe);
  }
  // $(".delete").click(handleDelete);
}

function handleDelete() {
  var Id = $(this).attr("data-id");
  // alert("Delete Clicked " + Id);
  $.ajax({
    url: apiUrl + "/" + Id,
    method: "DELETE",
    success: function() {
      loadRecipies();
    }
  });
}
