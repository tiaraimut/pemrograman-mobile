function predikatKelulusan(ipk) {
  if (ipk >= 3.51 && ipk <= 4.00) {
    return "Cum Laude (Dengan Pujian)";
  } else if (ipk >= 2.76) {
    return "Sangat Memuaskan";
  } else if (ipk >= 2.00) {
    return "Memuaskan";
  } else {
    return "Belum Memenuhi Predikat Kelulusan";
  }
}

module.exports = {
    predikatKelulusan
}