const toggleBtn = document.getElementById("switch-theme");
const toggleIcon = document.getElementById("switch-theme-icon");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle theme when button is clicked
toggleBtn.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark-mode");
  console.log("Dark Mode " + (dark ? "Enabled" : "Disabled"));

  // toggleBtn.textContent = dark ? "☀️" : "🌙";
  toggleIcon.src = dark ? "assets/sun.svg" : "assets/moon.svg";
  toggleIcon.style.filter = dark
    ? "invert(1) grayscale(1)"
    : "invert(0) grayscale(1)";

  toggleBtn.style.clipPath = dark
    ? "circle(48.36% at 30px 30px)"
    : "circle(41% at 30px 30px)";

  // Save the current theme
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
