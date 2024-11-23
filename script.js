// Menampilkan pesan kejutan
document.getElementById("revealButton").addEventListener("click", function() {
    const surpriseMessage = document.getElementById("surpriseMessage");
    surpriseMessage.classList.toggle("hidden");

    // Mengubah teks tombol
    if (surpriseMessage.classList.contains("hidden")) {
        this.textContent = "Klik untuk Lihat Kejutan!";
    } else {
        this.textContent = "Sembunyikan Kejutan";
    }
});