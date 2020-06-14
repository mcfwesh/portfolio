const navBar = document.querySelectorAll(".navbar-list");
let current = document.getElementsByClassName("activeNav");
console.log(navBar);
const animate = document.getElementById("animate");
console.log(animate);
let position = 100;
const animationInterval = setInterval(enterScreen, 10);

navBar.forEach((nav) => {
  nav.addEventListener("mouseover", (e) => {
    console.log(e.target);
    e.target.style.color = "yellow";
  });

  nav.addEventListener("mouseleave", (e) => {
    console.log(e.target);
    e.target.style = "";
  });

  nav.addEventListener("click", (e) => {
    current[0].className = current[0].className.replace("activeNav", "");
    e.target.className += " activeNav";
  });
});

function enterScreen() {
  if (position === 0) {
    clearInterval(animationInterval);
  } else {
    animate.style.left = position-- + "%";
  }
}
