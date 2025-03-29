window.addEventListener("DOMContentLoaded", () => {
    const submitbtn = document.querySelector(".hero > button");

    submitbtn.addEventListener("click", () => {
        alert("🎉 Thank you for enrolling! We'll get back to you soon.");
    });
});

const footerText = document.querySelector(".footer p");

footerText.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const inputs = document.querySelectorAll(".hero input");

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.backgroundColor = "rgb(0,0,0)";
    });

    input.addEventListener("blur", () => {
        input.style.backgroundColor = "darkseagreen";
    });
});
