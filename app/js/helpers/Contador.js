class Contador {
    constructor(seletor) {
        this.countDownTask = (pomodoro) => {
            let elementoPage = this._elemento;
            let minutos = pomodoro.tempoCiclo;
            let segundos = 0;
            let interval = this.countDownInterval;
            let task = setInterval(function () {
                if (segundos == 0) {
                    segundos = 60;
                    minutos--;
                }
                if (minutos < 0) {
                    interval(pomodoro);
                    clearInterval(task);
                    return;
                }
                segundos--;
                elementoPage.innerHTML = `${minutos < 10 ? `0${minutos}` : `${minutos}`}:${segundos < 10 ? `0${segundos}` : `${segundos}`}`;
            }, 1000);
        };
        this.countDownInterval = (pomodoro) => {
            let elementoPage = this._elemento;
            let minutos = pomodoro.tempoIntervalo;
            let segundos = 0;
            let task = setInterval(function () {
                if (segundos == 0) {
                    segundos = 60;
                    minutos--;
                }
                if (minutos < 0) {
                    clearInterval(task);
                    return;
                }
                segundos--;
                elementoPage.innerHTML = `${minutos < 10 ? `0${minutos}` : `${minutos}`}:${segundos < 10 ? `0${segundos}` : `${segundos}`}`;
            }, 1000);
        };
        this._elemento = document.querySelector(seletor);
        this._atividade = document.querySelector('#atividade');
    }
    countdown(pomodoroList) {
        pomodoroList.toArray().forEach(pomodoro => {
            this.countDownTask(pomodoro);
            //this.countDownInterval(pomodoro);
        });
    }
}
