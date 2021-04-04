class Contador {

    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    countdown(pomodoroList: PomodoroList): void {
        pomodoroList.toArray().forEach(pomodoro => {
            this.countDownTask(pomodoro);
            this.countDownInterval(pomodoro);
        });
    }

    countDownTask(pomodoro: Pomodoro) {
        let elementoPage = this._elemento;
            let minutos: number = pomodoro.tempoCiclo;
            let segundos:number = 0;

                setInterval(function() {
              
                    if(segundos == 0) {
                        segundos = 60;
                        minutos --;
                    }

                    if(minutos < 0) {
                        return;
                    }

                    segundos --;
        
                    elementoPage.innerHTML = `${minutos < 10 ? `0${ minutos }` : `${ minutos }`}:${segundos < 10 ? `0${ segundos }` : `${ segundos }`}`;
                
                }, 1000) 
    }


      countDownInterval(pomodoro: Pomodoro) {
        let elementoPage = this._elemento;
        alert("oi");
            let minutos: number = pomodoro.tempoIntervalo;
            let segundos:number = 0;

                setInterval(function() {
              
                    if(segundos == 0) {
                        segundos = 60;
                        minutos --;   
                    }

                    if(minutos < 0) {
                        return;
                    }

                    segundos --;
        
                    elementoPage.innerHTML = `${minutos < 10 ? `0${ minutos }` : `${ minutos }`}:${segundos < 10 ? `0${ segundos }` : `${ segundos }`}`;
                
                }, 1000)
    }
}