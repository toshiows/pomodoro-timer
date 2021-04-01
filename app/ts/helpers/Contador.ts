class Contador {

    private _elemento: Element;
    private _contador: number;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
        this._contador = 10;
    }

    countdown(): void {

        let minutos:number = this._contador;
        let segundos:number = 0;
        
        setInterval(function(){
              
            if(segundos == 0) {
                segundos = 60;
                minutos --;
            }

            if(minutos < 0) {
                //doSomething();
            }

            segundos --;
            
            let seletor = document.querySelector("#contador");
            seletor.innerHTML = `${minutos < 10 ? `0${ minutos }` : `${ minutos }`}:${segundos < 10 ? `0${ segundos }` : `${ segundos }`}`;
        
        }, 1000)
    }

    template() {

    }
}