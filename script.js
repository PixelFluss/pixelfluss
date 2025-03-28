document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    
    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});
