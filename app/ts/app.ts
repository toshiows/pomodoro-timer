const controller = new PomodoroController();

document
.querySelector('.form')
.addEventListener('submit', controller.adiciona.bind(controller));