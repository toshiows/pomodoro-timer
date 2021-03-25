class PomodoroController {
    private _inputAtividade: Element;
    private _inputTempoCiclo: Element;
    private _inputTempoIntervalo: Element;

    constructor() {
        this._inputAtividade = document.querySelector('#atividade');
        this._inputTempoCiclo = document.querySelector('#tempo-ciclo');
        this._inputTempoIntervalo = document.querySelector('#tempo-intervalo');
    }

    adiciona(event: Event) {
        event.preventDefault();

        const pomodoro = new Pomodoro(
            this._inputAtividade,
            this._inputTempoCiclo,
            this._inputTempoIntervalo
        );
        
        console.log(pomodoro);
    }
}//2-8