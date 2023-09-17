class Persegi {
    constructor(sisi) {
      this.sisi = sisi;
    }
  
    Keliling() {
      return 4 * this.sisi;
    }
  
    Luas() {
      return this.sisi * this.sisi;
    }
  }
  
  const persegi = new Persegi(5);
  console.log("Keliling Persegi:", persegi.Keliling());
  console.log("Luas Persegi:", persegi.Luas());