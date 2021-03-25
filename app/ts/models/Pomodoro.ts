class Pomodoro {
    
    constructor(private _atividade: string, private _tempoCiclo: number, private _tempoIntevalo: number) {

    }

    get atividade() {
        return this._atividade;
    }

    get tempoCiclo() {
        return this._tempoCiclo;
    }

    get tempoIntervalo() {
        return this._tempoIntevalo;
    }
}