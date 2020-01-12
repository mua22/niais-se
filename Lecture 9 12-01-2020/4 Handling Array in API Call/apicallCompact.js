$(function() {
  $.get("https://jsonplaceholder.typicode.com/posts", function(res) {
    for (var i = 0; i < res.length; i++) {
      $("#posts").append("<h1>" + res[i].title + "</h1>");
      $("#posts").append("<p>" + res[i].body + "</p>");
    }
  });
});
