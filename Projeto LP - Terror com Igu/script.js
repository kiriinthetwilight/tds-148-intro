// Variáveis do Slider
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
    index = (index + 1) % slides.length;
}

// Alterna os slides a cada 3 segundos
setInterval(showSlides, 3000);
showSlides();

// Efeito de Hover nos Cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.1)";
        card.style.backgroundColor = "#b90504"; // Muda a cor no hover
        card.style.color = "#f6f6f6";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.backgroundColor = "#e8e8e8"; // Volta à cor original
        card.style.color = "#333333";
    });
});
