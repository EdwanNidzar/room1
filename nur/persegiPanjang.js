class Persegipanjang {
    constructor(panjang,lebar) {
      this.panjang = panjang;
      this.lebar = lebar;
      this.luas = 0;
      this.keliling = 0;
    }
  
    hitungLuas() {
      this.luas = (this.panjang * this.lebar)
      return this.luas;
    }
  
    hitungKeliling() {
      this.keliling = (2 * this.panjang) + (2*this.lebar);
      return this.keliling;
    }
  }
  
  const persegiPanjang1 = new Persegipanjang(5,10);
  console.log("Luas Persegi Panjang:", persegiPanjang1.hitungLuas());
  console.log("Keliling Persegi Panjang:", persegiPanjang1.hitungKeliling());
  