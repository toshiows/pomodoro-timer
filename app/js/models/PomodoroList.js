class PomodoroList {
    constructor() {
        this._pomodoroList = [];
    }
    adiciona(pomodoro) {
        this._pomodoroList.push(pomodoro);
    }
    toArray() {
        return [].concat(this._pomodoroList);
    }
}
