const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Generar posición aleatoria dentro del área de juego
function moveSquare() {
  const gameArea = document.getElementById('game-area');
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;

  const maxX = areaWidth - 50;
  const maxY = areaHeight - 50;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  square.style.left = `${randomX}px`;
  square.style.top = `${randomY}px`;
}

// Cuando se hace clic en el cuadrado
square.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveSquare();
});

// Mover automáticamente cada 1.5 segundos
setInterval(moveSquare, 1500);

// Iniciar el primer movimiento
moveSquare();
