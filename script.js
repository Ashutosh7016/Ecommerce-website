const bar = document.querySelector("#bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const mainimg = document.getElementById("MainImg");
const smallimg = document.getElementsByClassName("small-img");
const onepro = document.getElementsByClassName("pro");


if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

function init() {
  for (let i = 0; i < 4; i++) {
    onepro[i].addEventListener("click", () => {
      window.location.href = "sproduct.html";
      mainimg.src = document.getElementsByClassName('pro')[i].getElementsByTagName('img')[0].src
    });
  }
}
init()

function inet() {
for (let i = 0; i < 4; i++) {
  smallimg[i].addEventListener("click", () => {
    mainimg.src = smallimg[i].src;
  });
}
}
inet()

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back :(";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
