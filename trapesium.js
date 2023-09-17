class Trapesium {
  constructor(a, b, tinggi, sisiMiring) {
    this.a = a;
    this.b = b;
    this.tinggi = tinggi;
    this.sisiMiring = sisiMiring;
    this.luas = 0;
    this.keliling = 0;
  }

  hitungLuas() {
    this.luas = ((this.a + this.b) * this.tinggi) / 2;
    return this.luas;
  }

  hitungKeliling() {
    this.keliling = this.a + this.b + 2 * this.sisiMiring;
    return this.keliling;
  }
}

const trapesium = new Trapesium(2, 4, 3, 5);
console.log("Luas Trapesium:", trapesium.hitungLuas());
console.log("Keliling Trapesium:", trapesium.hitungKeliling());
