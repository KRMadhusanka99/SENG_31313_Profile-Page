// const sections = document.querySelectorAll(".section");

// sections.forEach((section) => {
//     section.addEventListener("click", () => {
//         section.classList.toggle("active");
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
        section.addEventListener("click", () => {
            // Close other open sections
            sections.forEach((otherSection) => {
                if (otherSection !== section && otherSection.classList.contains("active")) {
                    otherSection.classList.remove("active");
                }
            });

            // Toggle the clicked section
            section.classList.toggle("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.querySelector(".scroll__button");

    // window.addEventListener("scroll", function() {
    //     if (window.scrollY > 300) {
    //         scrollButton.style.display = "block";
    //     } else {
    //         scrollButton.style.display = "none";
    //     }
    // });

    scrollButton.addEventListener("click", function(e) {
        e.preventDefault();
        const header = document.querySelector("#header");
        header.scrollIntoView({ behavior: "smooth" });
    });
});

