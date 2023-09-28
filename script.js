// ******************* VIEW FUNCTIONS ******************* //
function switchThemeTo(theme) {
  let toggle = document.getElementById("theme-toggle");
  if (toggle.classList.contains("t-" + theme)) return;
  toggle.classList.remove("t-1");
  toggle.classList.remove("t-2");
  toggle.classList.remove("t-3");
  toggle.classList.add("t-" + theme);
  document.body.classList.remove("theme-1");
  document.body.classList.remove("theme-2");
  document.body.classList.remove("theme-3");
  document.body.classList.add("theme-" + theme);
}
