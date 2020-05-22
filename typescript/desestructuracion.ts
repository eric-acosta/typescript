(()=>{

  
    const avenger = {
        nombre: 'steve',
        clave:'capitan america',
        poder: 'fuerte'
    }
    console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);
    const{nombre,poder}=avenger;
    console.log(nombre);
    console.log(poder);

    //Desestructuracion
    const extraer = ({nombre,poder}:any)=>{
        //const{nombre,poder}=avenger;
        console.log(nombre);
        console.log(poder);
    }
    extraer(avenger);
    console.log("-------------------------");

    const avengers:string[]=['Thor','Ironman','Spiderman']

    console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);
    //Desestruraccion
    const [loki,hombre, arana]=avengers;
    console.log(arana);

    //Desestruracion en funcion
    const extraerArr = ([thor,ironman,spiderman]:string[])=>{
        //const{nombre,poder}=avenger;
        console.log(thor);
        console.log(ironman);
    }

    extraerArr(avengers);

})();



