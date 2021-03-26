class PomodoroList {

    private _pomodoroList: Array<Pomodoro> = [];

    adiciona(pomodoro: Pomodoro): void {
        this._pomodoroList.push(pomodoro);
    }

    toArray(): Pomodoro[] {
        return [].concat(this._pomodoroList);
    }
}