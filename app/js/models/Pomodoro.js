class Pomodoro {
    constructor(_atividade, _tempoCiclo, _tempoIntevalo) {
        this._atividade = _atividade;
        this._tempoCiclo = _tempoCiclo;
        this._tempoIntevalo = _tempoIntevalo;
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
