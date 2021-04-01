class PomodoroController {
    private _inputAtividade: HTMLInputElement;
    private _inputTempoCiclo: HTMLInputElement;
    private _inputTempoIntervalo: HTMLInputElement;
    private _pomodoroList: PomodoroList = new PomodoroList();
    private _pomodoroView: PomodoroView = new PomodoroView('#pomodoroView');
    private _contador: Contador = new Contador("#contador");

    constructor() {
        this._inputAtividade = <HTMLInputElement> document.querySelector('#atividade');
        this._inputTempoCiclo = <HTMLInputElement> document.querySelector('#tempo-ciclo');
        this._inputTempoIntervalo = <HTMLInputElement> document.querySelector('#tempo-intervalo');
        this._pomodoroView.update(this._pomodoroList);
        
    }

    adiciona(event: Event): void {
        event.preventDefault();

        const pomodoro = new Pomodoro(
            this._inputAtividade.value,
            parseInt(this._inputTempoCiclo.value),
            parseInt(this._inputTempoIntervalo.value)
        );
        
        this._pomodoroList.adiciona(pomodoro);
        this._pomodoroView.update(this._pomodoroList);
        

        this._pomodoroList.toArray().forEach(pomodoro => {
            console.log(pomodoro.atividade);
            console.log(pomodoro.tempoCiclo);
            console.log(pomodoro.tempoIntervalo);
        });
    }

    iniciar(): void {
        this._contador.countdown(this._pomodoroList);
    }
}//3