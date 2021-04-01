class Contador {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    countdown(pomodoroList) {
        let elementoPage = this._elemento;
        pomodoroList.toArray().forEach(pomodoro => {
            let minutos = pomodoro.tempoCiclo;
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
                //let seletor = document.querySelector("#contador");
                elementoPage.innerHTML = `${minutos < 10 ? `0${minutos}` : `${minutos}`}:${segundos < 10 ? `0${segundos}` : `${segundos}`}`;
            }, 1000);
        });
        // let minutos:number = this._contador;
        //let segundos:number = 0;
    }
}
