const controller = new PomodoroController();

document
.querySelector('.form')
.addEventListener('submit', controller.adiciona.bind(controller));

document.querySelector('#iniciarContador').addEventListener('click', controller.iniciar.bind(controller));