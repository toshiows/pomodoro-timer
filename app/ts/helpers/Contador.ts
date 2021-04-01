class Contador {

    private _elemento: Element;
    private _contador: number;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
        this._contador = 15;
    }

    countdown(): void {

        let count:number = this._contador;
        let segundos:number = 0;

        setInterval(function(){

            if(segundos == 0){
                segundos = 60;
                count --;
            }

            segundos --;

            let seletor = document.querySelector("#contador");
            seletor.innerHTML = `${count}:${segundos}`;
        }, 1000)
    }

    template() {

    }
}