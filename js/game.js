function renderDogTheCatcherGame() {
    const gameContainer = document.querySelector('#game');
    gameContainer.classList.remove('hidden');
    gameContainer.classList.add('game-container-show');

    scrollIt(gameContainer);
}