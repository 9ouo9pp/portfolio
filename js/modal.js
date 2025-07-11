$(".dong").click((e) => {
  e.preventDefault();
  $("#modal-web-dong").addClass("active");
});
$(".modal-close").click((e) => {
  e.preventDefault();
  $("#modal-web-dong").removeClass("active");
});
