$(function() {
  $("#mybtn").click(sendAPICall);
});
function sendAPICall() {
  console.log("Sending API call");
  $.get("https://jsonplaceholder.typicode.com/posts/1", requestReceived);
  console.log("Call Sent");
}
function requestReceived(res) {
  console.log("Call Received");
  console.log(res);
}
