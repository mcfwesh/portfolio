const navBar = document.querySelectorAll(".navbar-list");
let current = document.getElementsByClassName("activeNav");
const animate = document.getElementById("animate");
let position = 100;

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

// function enterScreen() {
//   if (position === 0) {
//     clearInterval(animationInterval);
//   } else {
//     animate.style.left = position-- + "%";
//   }
// }
const welcomeH1 = document.querySelector("#welcome-section h1");
const welcomeP = document.querySelector("#welcome-section p");
console.log(welcomeH1);

setTimeout(() => (welcomeH1.className += "animate"), 0);
setTimeout(() => {
  welcomeP.style.visibility = "visible";
}, 5000);
