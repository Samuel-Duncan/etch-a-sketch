// Create a user inputted amount of divs
let rows;
let columns;

const container = document.getElementById('container');

function renderPad(horizontal, vertical) {
  for (let i = 0; i < horizontal; i++) {
    for (let j = 0; j < vertical; j++) {
      const divs = document.createElement('div');
      divs.classList.add('pad-pieces');
      container.appendChild(divs);
    }
  }
}

// Add a button that allows user to change the amount of divs
function getCellsFromUser() {
  const userCells = prompt('How many cells do you want to draw on?');
  rows = userCells;
  columns = userCells;
  container.innerHTML = ''; // clear container
  renderPad(rows, columns);
  const cells = document.querySelectorAll('.pad-pieces');
  cells.forEach((cell) => {
    const boundDrawCells = drawCells.bind(cell);
    cell.addEventListener('mouseover', boundDrawCells);
    cell.style.flexBasis = `calc(100% / ${userCells})`;
  });
}

const button = document.getElementById('padSize');
button.addEventListener('click', () => {
  getCellsFromUser();
});

// Set up a 'hover' effect so that divs change color on hover
function drawCells() {
  this.style.backgroundColor = 'yellow';
}
