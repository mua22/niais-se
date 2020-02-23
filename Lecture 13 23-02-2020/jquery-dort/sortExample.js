var students = ["Zeshan", "Hamza", "Ali"];

$(function() {
  loadStudents();
  $("#testSort").click(function() {
    students.sort();
    loadStudents();
  });
});

function loadStudents() {
  $("#students").html("");
  for (var i = 0; i < students.length; i++) {
    $("#students").append("<li>" + students[i] + "</li>");
  }
}
