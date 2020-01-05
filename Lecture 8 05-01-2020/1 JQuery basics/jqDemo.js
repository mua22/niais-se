function bindings() {
  $("#mybtn").click(handleBtnClicked);
}
function handleBtnClicked() {
  $("#para")
    .removeClass("blueborder")
    .fadeOut()
    .fadeIn()
    .addClass("blueborder");
}
$(bindings);
