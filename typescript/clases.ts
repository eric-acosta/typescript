(()=>{

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
    class Avenger{

        constructor(public nombre: string,
                    public equipo: string,
                    public nombreReal?:string,
                    public puedePelear: boolean=true,
                    public peleasGanas: number=0){}
    }
    
    const antman = new Avenger("Antman","cap");
    console.log(antman)

    
    
})();



