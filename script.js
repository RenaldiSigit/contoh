// deklarasi variabel
let penghasilan, pph;

//Proses cek pph
function cekPph() {
  if (penghasilan <= 500000) {
    pph = 0;
  } else if (penghasilan <= 10000000) {
    pph = 15;
  } else if (penghasilan > 10000000) {
    pph = 20;
  }
}

//proses cek
function cek() {
  penghasilan = parseInt(document.getElementById("penghasilan").value);
  cekPph();
  document.getElementById("pph").value = `PPH ${pph}%`;
  document.getElementById("pajak").value = penghasilan * (pph / 100);
}
