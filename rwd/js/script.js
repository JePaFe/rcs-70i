document.querySelector("#menu-action").addEventListener("click", () => {
  if (document.querySelector("nav").style.display == "block") {
    document.querySelector("nav").style.display = "none";
  } else {
    document.querySelector("nav").style.display = "block";
  }
});
