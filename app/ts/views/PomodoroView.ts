class PomodoroView {

    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model: PomodoroList): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: PomodoroList): string {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Atividade</th>
                <th>Tempo do ciclo</th>
                <th>Tempo do intervalo</th>
            </tr>
        </thead>

        <tbody>
            ${model.toArray().map(pomodoro =>{
                return `
                    <tr>
                        <td>${pomodoro.atividade}</td>
                        <td>${pomodoro.tempoCiclo}</td>
                        <td>${pomodoro.tempoIntervalo}</td>
                    </tr>
                `
            }).join()}
        </tbody>

        <tfoot>
        </tfoot>
    </table>       
        `;
    }
}