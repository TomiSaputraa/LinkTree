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

