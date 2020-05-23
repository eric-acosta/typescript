(()=>{

    const sumar = (a:number, b:number):number=> {
        return a +b;
    }
    const nombre= ():string => ' hola eric';

    const obtenerSalario = ():Promise<string> => {
        return new Promise ((resolve,reject)=>{
            resolve('Eric');
        });
    }
    
    obtenerSalario().then(a => console.log(a.toUpperCase));
})();



