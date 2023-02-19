var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
document.documentElement.classList.add("dark");
localStorage.setItem("color-theme", "dark");

var themeToggleBtn = document.getElementById("theme-toggle");

let event = new Event("dark-mode");

themeToggleBtn.addEventListener("click", function () {
    // toggle icons
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // if set via local storage previously
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    document.dispatchEvent(event);
});
