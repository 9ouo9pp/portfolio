// dong
$(".dong img").click((e) => {
  e.preventDefault();
  $("#modal-web-dong").addClass("active");
});
$(".modal-close").click((e) => {
  e.preventDefault();
  $("#modal-web-dong").removeClass("active");
});
// dong end
// pj
$(".pj img").click((e) => {
  e.preventDefault();
  $("#modal-web-pj").addClass("active");
});
$(".modal-close").click((e) => {
  e.preventDefault();
  $("#modal-web-pj").removeClass("active");
});
// pj end
// jung
$(".jung img").click((e) => {
  e.preventDefault();
  $("#modal-web-jung").addClass("active");
});
$(".modal-close").click((e) => {
  e.preventDefault();
  $("#modal-web-jung").removeClass("active");
});
// jung end
// dong app
$(".web-modal-link").click((e) => {
  e.preventDefault();
  $("#modal-web-dong-app").addClass("active");
});
$(".modal-close").click((e) => {
  e.preventDefault();
  $("#modal-web-dong-app").removeClass("active");
});
// dong app end
