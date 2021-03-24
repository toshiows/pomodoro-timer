class PomodoroController {
    constructor() {
        this._inputAtividade = document.querySelector('#atividade');
        this._inputTempoCiclo = document.querySelector('#tempo-ciclo');
        this._inputTempoIntervalo = document.querySelector('#tempo-intervalo');
    }
    adiciona(event) {
        event.preventDefault();
        const pomodoro = new Pomodoro(this._inputAtividade, this._inputTempoCiclo, this._inputTempoIntervalo);
        console.log(pomodoro);
    }
}
