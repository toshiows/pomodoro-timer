class PomodoroController {
    constructor() {
        this._pomodoroList = new PomodoroList();
        this._pomodoroView = new PomodoroView('#pomodoroView');
        this._contador = new Contador("#contador");
        this._inputAtividade = document.querySelector('#atividade');
        this._inputTempoCiclo = document.querySelector('#tempo-ciclo');
        this._inputTempoIntervalo = document.querySelector('#tempo-intervalo');
        this._pomodoroView.update(this._pomodoroList);
        this._tomato = document.querySelector("#menuTomato");
    }
    adiciona(event) {
        event.preventDefault();
        const pomodoro = new Pomodoro(this._inputAtividade.value, parseInt(this._inputTempoCiclo.value), parseInt(this._inputTempoIntervalo.value));
        this._pomodoroList.adiciona(pomodoro);
        this._pomodoroView.update(this._pomodoroList);
        this._pomodoroList.toArray().forEach(pomodoro => {
            console.log(pomodoro.atividade);
            console.log(pomodoro.tempoCiclo);
            console.log(pomodoro.tempoIntervalo);
        });
    }
    iniciar() {
        this._tomato.classList.remove("invisivel");
        this._contador.countdown(this._pomodoroList);
    }
} //3
