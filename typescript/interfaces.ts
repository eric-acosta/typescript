(()=>{

    interface Xmen{
        nombre:string,
        edad:number;
    }

    const enviarMision=(xmen:Xmen)=>{
        console.log(`enviando a ${xmen.nombre} a la mision`)
    }
    const regresaAlCuartel=(xmen:Xmen)=>{
        console.log(`enviando a ${xmen.nombre} a la mision`)
    }

    const wolverine:Xmen={
        nombre:'Logan',
        edad:60

    }
    enviarMision(wolverine);
    regresaAlCuartel(wolverine);
    
})();



