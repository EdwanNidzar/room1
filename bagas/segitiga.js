class Segitiga {
    constructor(alas, tinggi) {
        this.alas = alas;
        this.tinggi = tinggi;
    }
    
    Keliling() {
        return 3 * this.alas;
    }

    Luas() {
        return 0.5 * this.alas * this.tinggi;
    }
}

const segitiga = new Segitiga(5, 3);
console.log("Keliling segitiga = "+ segitiga.Keliling());
console.log("Luas Segitiga = "+ segitiga.Luas());

