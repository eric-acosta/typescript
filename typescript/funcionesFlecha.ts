(function(){

    
    const miFuncion = function(a:string){
        return a.toUpperCase();
    }

    const miFuncionF = (a:string)=>a.toUpperCase();

    console.log(miFuncion('Normal'));
    console.log(miFuncionF('flecha'));

    const sumarN= function(a:number, b:number){
        return a+b;
    }
    const sumarNF= (a:number,b:number)=>a+b;


    console.log(sumarN(3,2));
    console.log(sumarNF(3,2));

    const hulk={
        nombre:'Hulk',
        smash(){
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`)    
            }, 1000);
            
        }
    }
    const spiderman={
        nombre:'Spiderman',
        smash(){
            setTimeout(function() {
                console.log(`${this.nombre} web!!!`)    
            }, 1000);
            
        }
    }

    hulk.smash();
    spiderman.smash();

})();



