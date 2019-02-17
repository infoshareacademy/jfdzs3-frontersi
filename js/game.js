

class GameItem {
    constructor() {
     
      const element = document.createElement('div');
      this.container = document.querySelector('.game-container');
      this.element = element;
      element.classList.add('img');
      element.classList.add(this.getRandomElementType());
  
      element.style.left = `${this.getRandomPos()}px`;
      element.style.transition = 'transform' + this.getRandomInt(850, 10000) + ' ms linear';
  
      this.container.appendChild(element);
      setTimeout(() => {
        element.classList.add('moveItem');
      }, 100);
    }
    getRandomPos() {
      return Math.floor(Math.random() * this.container.clientWidth) - 5;
    }
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomElementType() {
      const types = ['keys', 'wallet', 'phone'];
      return types[Math.floor(Math.random() * types.length)];
    }
    delete() {
      this.element.remove();
    }
  }
  
  class Game {
    constructor() {
      this.inProgress = false;
      this.gameContainer = document.querySelector('#game');
      this.showHeader = document.querySelector('#show-header');
      this.imgDog = document.querySelector('.dogTheCatcher');
      this.items = [];
      this.init()
      this.addEventListeners();
    }
    renderGame(){
      this.gameContainer.classList.remove('hidden');
      this.gameContainer.classList.add('game-container-show');
      scrollElement(this.gameContainer);
    }
    init() {
      this.startBtn = document.querySelector('.startTheGameBtn');
      this.imgDog = document.querySelector('.dogTheCatcher');
      this.imgDog.style.left = `${document.documentElement.clientWidth / 2}px`;
    }
    addEventListeners() {
      document.addEventListener('mousemove', (e) => {
        this.imgDog.style.left = e.x - 50 + 'px';
      });
      this.startBtn.addEventListener('click', this.handleStartClick.bind(this));
    }
    handleStartClick() {
      if (this.inProgress) {
        this.stopGame();
      } else {
        this.startGame();
      }
    }
    startGame() {
      this.inProgress = true;
      this.startBtn.innerText = 'Stop Game';
      this.showHeader.classList.add('hidden');
      this.itemsInterval = setInterval(() => {
        this.items.push(new GameItem());
      }, 100);
      this.collisionInterval = setInterval(this.detectCollision, 100);
    }
    stopGame() {
      this.inProgress = false;
      this.startBtn.innerText = 'Start Game';
      this.showHeader.classList.remove('hidden');
      clearInterval(this.itemsInterval);
      this.items.forEach(item => item.delete());
      this.items = [];
      clearInterval(this.collisionInterval);
    }
    detectCollision() {
      // for po wszystkich elementach i sprawdzanie czy granice elementu nachodzą na granice psa
      // jeśli tak to: usuwamy element, zwiększamy wynik graca (this.points += 100)
    }
  }
  const dogTheCatcherGameStart = new Game();
