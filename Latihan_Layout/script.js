document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen form dan alert
    const contactForm = document.getElementById('contactForm');
    const alertPesan = document.getElementById('alertPesan');

    // Mengecek apakah form ada di halaman tersebut
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Mencegah browser melakukan reload halaman
            event.preventDefault();

            // Menampilkan alert sukses dengan menghapus class 'd-none' (display: none)
            alertPesan.classList.remove('d-none');

            // Mengosongkan isian form
            contactForm.reset();

            // Menghilangkan alert secara otomatis setelah 4 detik
            setTimeout(function() {
                alertPesan.classList.add('d-none');
            }, 4000);
        });
    }
});