
class BangunDatar {
    constructor() {
    }
    hitungLuas() {
      return 0;
    }
    hitungKeliling() {
      return 0;
    }
  }
  
  
  class Lingkaran extends BangunDatar {
    constructor(jariJari) {
      super(); // Memanggil konstruktor kelas induk (BangunDatar)
      this.jariJari = jariJari;
    }
  
    // Override metode hitungLuas dari kelas induk
    hitungLuas() {
      return Math.PI * this.jariJari * this.jariJari;
    }
  
    // Override metode hitungKeliling dari kelas induk
    hitungKeliling() {
      return 2 * Math.PI * this.jariJari;
    }
  }
  
  // Membuat objek lingkaran dengan jari-jari 7
  const lingkaranSaya = new Lingkaran(7);
  
  // Menghitung luas dan keliling lingkaran
  const luasLingkaran = lingkaranSaya.hitungLuas();
  const kelilingLingkaran = lingkaranSaya.hitungKeliling();
  
  // Menampilkan hasil
  console.log(`Luas Lingkaran: ${luasLingkaran}`);
  console.log(`Keliling Lingkaran: ${kelilingLingkaran}`);
  