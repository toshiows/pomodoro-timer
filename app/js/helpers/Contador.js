class Contador {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
        this._contador = 15;
    }
    countdown() {
        let count = this._contador;
        let segundos = 0;
        setInterval(function () {
            if (segundos == 0) {
                segundos = 60;
                count--;
            }
            segundos--;
            let seletor = document.querySelector("#contador");
            seletor.innerHTML = `${count}:${segundos}`;
        }, 1000);
    }
    template() {
    }
}
