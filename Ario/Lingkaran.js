
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
      super(); 
      this.jariJari = jariJari;
    }
  

    hitungLuas() {
      return Math.PI * this.jariJari * this.jariJari;
    }
  
    
    hitungKeliling() {
      return 2 * Math.PI * this.jariJari;
    }
  }
  
  
  const lingkaran = new Lingkaran(7);
  
  // Menghitung luas dan keliling lingkaran
  const luasLingkaran = lingkaran.hitungLuas();
  const kelilingLingkaran = lingkaran.hitungKeliling();
  
  // Menampilkan hasil
  console.log(`Luas Lingkaran: ${luasLingkaran}`);
  console.log(`Keliling Lingkaran: ${kelilingLingkaran}`);
  