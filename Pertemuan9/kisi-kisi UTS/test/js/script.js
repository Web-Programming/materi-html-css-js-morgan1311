var tombolKirim = document.getElementById('btnKirim');

tombolKirim.addEventListener('click', function() {
    // Ambil nilai dari setiap input
    var nama  = document.getElementById('inputNama').value;
    var email = document.getElementById('inputEmail').value;
    var pesan = document.getElementById('inputPesan').value;

    // Cek apakah ada yang kosong
    if (nama === '') {
        // Tandai input yang kosong dengan border merah
        document.getElementById('inputNama').style.borderColor  = 'red';
        setTimeout(function() {
        document.getElementById('inputNama').style.borderColor  = '';
        document.getElementById('inputEmail').style.borderColor = '';
        document.getElementById('inputPesan').style.borderColor = '';
        }, 4000);
        if (email === '') {
            document.getElementById('inputEmail').style.borderColor = 'red';
            if (pesan === '') {
                document.getElementById('inputPesan').style.borderColor = 'red';
                alert('Semua field harus diisi!');
            } else {
                alert('Nama dan Email tidak boleh kosong!');
            }
        } else if (pesan === '') {
            document.getElementById('inputPesan').style.borderColor = 'red';
            alert('Nama dan Pesan tidak boleh kosong!');
        } else {
            alert('Nama tidak boleh kosong!');
        }
    } else if (email === '') {
        document.getElementById('inputEmail').style.borderColor = 'red';
        setTimeout(function() {
        document.getElementById('inputNama').style.borderColor  = '';
        document.getElementById('inputEmail').style.borderColor = '';
        document.getElementById('inputPesan').style.borderColor = '';
        }, 4000);
        if (pesan === '') {
                document.getElementById('inputPesan').style.borderColor = 'red';
                alert('Email dan Pesan tidak boleh kosong!');
            } else {
                alert('Email tidak boleh kosong!');
            }
    } else if (pesan === '') {
        document.getElementById('inputPesan').style.borderColor = 'red';
        alert('Pesan tidak boleh kosong!');
        setTimeout(function() {
        document.getElementById('inputNama').style.borderColor  = '';
        document.getElementById('inputEmail').style.borderColor = '';
        document.getElementById('inputPesan').style.borderColor = '';
        }, 4000);
    } else {

        // Tampilkan pesan kirim
        document.getElementById('pesanKirim').style.display = 'block';

        // Kosongkan semua input setelah kirim
        document.getElementById('inputNama').value  = '';
        document.getElementById('inputEmail').value = '';
        document.getElementById('inputPesan').value = '';

        // Kembalikan warna border
        document.getElementById('inputNama').style.borderColor  = '';
        document.getElementById('inputEmail').style.borderColor = '';
        document.getElementById('inputPesan').style.borderColor = '';

        // Sembunyikan pesan kirim lagi setelah 5 detik
        setTimeout(function() {
        document.getElementById('pesanKirim').style.display = 'none';
        }, 5000);

    }
});