// Menambahkan event listener untuk tombol Konversi dan Reset
document.getElementById("konversiButton").addEventListener("click", konversiSuhu);
document.getElementById("resetButton").addEventListener("click", resetForm);
document.getElementById("reverseButton").addEventListener("click", reverseConvert); 

function konversiSuhu() {
    // Ambil nilai dari input Celsius
    var celsius = document.getElementById("celsius").value;

    if (celsius === "") {
        alert("Masukkan nilai suhu dalam derajat Celcius");
        return;
    }

    // Konversi Celsius ke Fahrenheit
    var fahrenheit = Math.round((celsius * 9 / 5) + 32); 

    // Hasil Konversi
    document.getElementById("fahrenheit").value = fahrenheit; 

    // Hasil Cara Kalkulasi
    document.getElementById("caraKalkulasi").value = `S(°F) = (${celsius} * 9/5) + 32 = ${fahrenheit}°F`;
}

function resetForm() {
    document.getElementById("celsius").value = ""; 
    document.getElementById("fahrenheit").value = "";  
    document.getElementById("caraKalkulasi").value = ""; 
}


// Hasil untuk Reverse Button
function reverseConvert() {
    // Ambil nilai dari input Fahrenheit
    var fahrenheit = document.getElementById("fahrenheit").value;

    if (fahrenheit === "") {
        alert("Tidak ada nilai Fahrenheit untuk dikonversi");
        return;
    }

    // Konversi Fahrenheit ke Celsius
    var celsius = Math.round((fahrenheit - 32) * 5 / 9);

    // Hasil Konversi
    document.getElementById("celsius").value = celsius; 

    // Hasil Cara Kalkulasi
    document.getElementById("caraKalkulasi").value = `S(°C) = (${fahrenheit} - 32) * 5/9 = ${celsius}°C`;
}