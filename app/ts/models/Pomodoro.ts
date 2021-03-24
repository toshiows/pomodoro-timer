class Pomodoro {
    
    private _atividade: string;
    private _tempoCiclo: number;
    private _tempoIntervalo: number;

    constructor(atividade: string, tempoCiclo: number, tempoIntevalo: number) {

        this._atividade = atividade;
        this._tempoCiclo = tempoCiclo;
        this._tempoIntervalo = tempoIntevalo;
    }
}