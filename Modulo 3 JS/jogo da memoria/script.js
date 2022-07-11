const cards = document.querySelectorAll('.card');
let hasFlipped = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard(){
  if(lockBoard) return;
  if(this === firstCard) return;function resetBoard(){
  }

  this.classList.add('flip');
  if(!hasFlipped){
    hasFlipped = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  hasFlipped = false;
  checkForMath();
}

function checkForMath(){
  if (firstCard.dataset.card === secondCard.dataset.card){
    disableCards();
    return;
  }
  unflipCards();
}

function disableCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards(){
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  },1500);

}

function resetBoard(){
  [hasFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function suffle(){
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random()*12);
    card.style.order = randomPosition;
  })
})();

cards.forEach((card) => {
  card.addEventListener('click',flipCard);
})
