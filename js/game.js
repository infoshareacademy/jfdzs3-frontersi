

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
      this.audio = new Audio('game.wav');
      this.inProgress = false;
      this.gameContainer = document.querySelector('#game');
      this.showHeader = document.querySelector('#show-header');
      this.showBackTop = document.querySelector('.backtop');
      this.imgDog = document.querySelector('.dogTheCatcher');
      this.items = [];
      this.init();
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
      this.audio.play();
      this.audio.loop= true;
      scrollElement(this.gameContainer);
      document.body.classList.add("scroll-off");
      this.startBtn.innerText = 'Stop Game';
      this.showHeader.classList.add('hidden');
      this.showBackTop.classList.add('hidden');
      this.itemsInterval = setInterval(() => {
        this.items.push(new GameItem());
      }, 100);
      this.collisionInterval = setInterval(this.detectCollision.bind(this), 100);
    }
    stopGame() {
      this.inProgress = false;
      this.audio.pause();
      this.audio.currentTime = 0;
      scrollElement(this.gameContainer);
      document.body.classList.remove("scroll-off");
      this.startBtn.innerText = 'Start Game';
      this.showHeader.classList.remove('hidden');
      this.showBackTop.classList.remove('hidden');
      clearInterval(this.itemsInterval);
      this.items.forEach(item => item.delete());
      this.items = [];
      clearInterval(this.collisionInterval);
    }
    detectCollision() {
       // for po wszystkich elementach i sprawdzanie czy granice elementu nachodzą na granice psa
    // console.log(this.items);
    // let a =  this.items.offset().top;  
    for (let i = 0; i <= this.items.length; i++) {
      let thatItem = this.items[i]['element'];
      let thisDog = this.imgDog;

      var x1 = thatItem.offsetLeft;
      var y1 = thatItem.offsetTop;
      var h1 = thatItem.offsetHeight;
      var w1 = thatItem.offsetWidth;
      var b1 = y1 + h1;
      console.log(b1);
      var r1 = x1 + w1;
      var x2 = thisDog.offsetLeft;
      console.log(x2);
      var y2 = thisDog.offsetTop;
      var h2 = thisDog.offsetHeight;
      var w2 = thisDog.offsetWidth;
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        return false;
      } else {
        return true;
        thatItem.remove();
      }
    }


    // jeśli tak to: usuwamy element, zwiększamy wynik graca (this.points += 100)
  }
}

  const dogTheCatcherGameStart = new Game();
