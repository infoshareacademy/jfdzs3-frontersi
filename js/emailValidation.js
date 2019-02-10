const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const submitBtn = document.querySelector('.submit-btn');
const emailInput = document.querySelector('.subscribe-input');
const validationAlert = document.createElement('div');
const formLead = document.querySelector('.form-info');

validationAlert.classList.add('alert', 'my-red-alert', 'alert-danger');
validationAlert.innerText = 'Proszę wprowadzić prawidłowy adres email!';


submitBtn.addEventListener('click', () => {

    if (!filter.test(emailInput.value)) {
        formLead.appendChild(validationAlert);
        setTimeout(function () {
            validationAlert.parentNode.removeChild(validationAlert);
        }, 3000);
        emailInput.focus;

        return false;
    } else {
        renderDogTheCatcherGame();
    }
});