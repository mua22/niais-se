$(function() {
  sendAPICall();
});
function sendAPICall() {
  $.get("https://jsonplaceholder.typicode.com/posts/1", requestReceived);
}
function requestReceived(res) {
  console.log(res);
  $("#posts").append("<h1>" + res.title + "</h1>");
  $("#posts").append("<p>" + res.body + "</p>");
}
