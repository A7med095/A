var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "download-icon-Moon-1320568043578978300_256.ico";
  } else {
    icon.src = "light.png ";
  }
};
let click = document.querySelector(".click");
let list = document.querySelector(".list");
click.addEventListener("click", () => {
  list.classList.toggle("newlist");
});
