function toggleMenu() {
    document.getElementById("navLinks").style.display =
        document.getElementById("navLinks").style.display === "flex"
            ? "none"
            : "flex";
}

// Scroll reveal animation
// Scroll animation
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 350;
        if (top > offset) sec.classList.add("visible");
    });
});