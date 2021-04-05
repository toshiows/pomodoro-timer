class Contador {

    private _elemento: Element;
    private _atividade: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
        this._atividade = document.querySelector('#atividade');
    }

    countdown(pomodoroList: PomodoroList): void {
        pomodoroList.toArray().forEach(pomodoro => {

            this.countDownTask(pomodoro);

            //this.countDownInterval(pomodoro);

        });
    }

    countDownTask = (pomodoro: Pomodoro): void => {

        let elementoPage = this._elemento;
        let minutos: number = pomodoro.tempoCiclo;
        let segundos: number = 0;

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

        }, 1000)

    }

    countDownInterval = (pomodoro: Pomodoro): void => {


        let elementoPage = this._elemento;
        let minutos: number = pomodoro.tempoIntervalo;
        let segundos: number = 0;

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

        }, 1000)
    }
}
