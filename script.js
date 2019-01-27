// EMAIL VALIDATION + GAME STARTER
const submitBtn = document.querySelector('.submit-btn');

const validationAlert = document.createElement('div');
validationAlert.classList.add('alert');
validationAlert.classList.add('my-red-alert');
validationAlert.classList.add('alert-danger');
validationAlert.innerText = 'Proszę wprowadzić prawidłowy adres email!';

submitBtn.addEventListener('click', () => {

    const emailInput = document.querySelector('.subscribe-input');
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(emailInput.value)) {
        const formLead = document.querySelector('.form-info');
        formLead.appendChild(validationAlert);
        setTimeout(function () {
            validationAlert.parentNode.removeChild(validationAlert);
        }, 3000);
        emailInput.focus;
        return false;

    } else(
        renderDogTheCatcherGame());
});

function renderDogTheCatcherGame() {
    const gameContainer = document.querySelector('#game');
    gameContainer.classList.remove('hidden');
    gameContainer.classList.add('game-container-show');

}