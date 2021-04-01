class Contador {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
        this._contador = 10;
    }
    countdown() {
        let minutos = this._contador;
        let segundos = 0;
        setInterval(function () {
            if (segundos == 0) {
                segundos = 60;
                minutos--;
            }
            if (minutos < 0) {
                //doSomething();
            }
            segundos--;
            let seletor = document.querySelector("#contador");
            seletor.innerHTML = `${minutos < 10 ? `0${minutos}` : `${minutos}`}:${segundos < 10 ? `0${segundos}` : `${segundos}`}`;
        }, 1000);
    }
    template() {
    }
}
