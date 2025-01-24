document.querySelectorAll(".nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Hapus kelas active dari semua menu
        document.querySelectorAll(".nav a").forEach(link => link.classList.remove("active"));

        // Tambahkan kelas active ke menu yang diklik
        this.classList.add("active");

        // Scroll ke elemen yang dituju
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Typing effect
const texts = ["Web Developer", "Flutter Developer", "UI/UX Designer", "Freelancer", "Tech Enthusiast"];
const typingSpeed = 100; // Kecepatan mengetik dalam ms
const deletingSpeed = 50; // Kecepatan menghapus teks dalam ms
const delayBetweenTexts = 1500; // Delay antara teks selesai dan memulai teks baru
const typingElement = document.getElementById("typing-effect");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    if (!isDeleting && charIndex < currentText.length) {
        // Menambahkan karakter satu per satu
        typingElement.textContent += currentText[charIndex];
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        // Menghapus karakter satu per satu
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, deletingSpeed);
    } else {
        // Berpindah ke teks berikutnya
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenTexts); // Tunggu sebelum menghapus
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Loop ke teks berikutnya
            setTimeout(typeEffect, typingSpeed);
        }
    }
}

// Memulai efek mengetik
document.addEventListener("DOMContentLoaded", typeEffect);