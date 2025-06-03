// Toggle dark mode
const toggle = document.getElementById("dark-toggle");
const body = document.body;

// Check localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Save preference
    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
