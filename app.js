"use strict";
(() => {
    // class Avenger{
    //     nombre:string;
    //     equipo:string;
    //     nombreReal:string;
    //     puedePelear:boolean;
    //     peleasGanadas:number;
    //     constructor(nombre:string, equipo:string,nombreReal:string){
    //         this.nombre=nombre;
    //         this.equipo=equipo;
    //         this.nombreReal=nombreReal;
    //     }
    class Avenger {
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanas = peleasGanas;
        }
    }
    const antman = new Avenger("Antman", "cap");
    console.log(antman);
})();
