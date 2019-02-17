function renderDogTheCatcherGame() {
    const gameContainer = document.querySelector('#game');
    gameContainer.classList.remove('hidden');
    gameContainer.classList.add('game-container-show');

    scrollElement(gameContainer);
}

$(document).ready(function(){
    $("#instructionBtn").click(function(){
      $("#myModal").modal();
    });
  });