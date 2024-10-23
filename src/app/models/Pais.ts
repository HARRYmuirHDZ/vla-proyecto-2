// src/app/modelos/pais.ts
export class Pais {
    id: number;
    nombre: string;
    capital: string;
    moneda: string;

    constructor(id: number, nombre: string, capital: string, moneda: string) {
        this.id = id;
        this.nombre = nombre;
        this.capital = capital;
        this.moneda = moneda;
    }
}
