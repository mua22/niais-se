$(function() {
  sendAPICall();
});
function sendAPICall() {
  $.get("https://jsonplaceholder.typicode.com/posts", requestReceived);
}
function requestReceived(res) {
  for (var i = 0; i < res.length; i++) {
    addPost(res[i]);
  }
}
function addPost(post) {
  $("#posts").append("<h1>" + post.title + "</h1>");
  $("#posts").append("<p>" + post.body + "</p>");
}
