(()=>{

    const retirarDinero=(montoRetirar:number):Promise<number>=>{

        let dineroActual=1000;

        return new Promise((resolve,reject)=>{
            if(montoRetirar>=dineroActual){
                reject("no hay saldo");
            }
            else{
                dineroActual-= montoRetirar;
                resolve(dineroActual);
            }
        });

    }
    
    retirarDinero(100)
        .then(montoActual=>console.log (`Me quedan ${montoActual}`))
        .catch(console.warn);
})();



