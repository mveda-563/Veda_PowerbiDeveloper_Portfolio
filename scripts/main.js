// Toggle dark mode
const toggle = document.getElementById("dark-toggle");
const body = document.body;

// Check localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
