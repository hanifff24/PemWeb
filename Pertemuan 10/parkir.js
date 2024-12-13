function hitungBiayaParkir() {
    let jamMasuk = document.getElementById('jam_masuk').value
    let jamKeluar = document.getElementById('jam_keluar').value
    let lamaParkir = jamKeluar - jamMasuk 
    console.log(lamaParkir)

    //Biaya Parkir
    let biayaParkir = 3000
    lamaParkir = lamaParkir - 2

    //Sisa jam
    if(lamaParkir > 0) {
        biayaParkir = biayaParkir + (lamaParkir * 1000)
    }

    console.log(biayaParkir)
    
    //Tampilan
    document.getElementById('biaya_parkir').innerHTML = biayaParkir
}