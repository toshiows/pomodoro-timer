class Contador {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    countdown(pomodoroList) {
        pomodoroList.toArray().forEach(pomodoro => {
            this.countDownTask(pomodoro);
            this.countDownInterval(pomodoro);
        });
    }
    countDownTask(pomodoro) {
        let elementoPage = this._elemento;
        let minutos = pomodoro.tempoCiclo;
        let segundos = 0;
        setInterval(function () {
            if (segundos == 0) {
                segundos = 60;
                minutos--;
            }
            if (minutos < 0) {
                return;
            }
            segundos--;
            elementoPage.innerHTML = `${minutos < 10 ? `0${minutos}` : `${minutos}`}:${segundos < 10 ? `0${segundos}` : `${segundos}`}`;
        }, 1000);
    }
    countDownInterval(pomodoro) {
        let elementoPage = this._elemento;
        alert("oi");
        let minutos = pomodoro.tempoIntervalo;
        let segundos = 0;
        setInterval(function () {
            if (segundos == 0) {
                segundos = 60;
                minutos--;
            }
            if (minutos < 0) {
                return;
            }
            segundos--;
            elementoPage.innerHTML = `${minutos < 10 ? `0${minutos}` : `${minutos}`}:${segundos < 10 ? `0${segundos}` : `${segundos}`}`;
        }, 1000);
    }
}
