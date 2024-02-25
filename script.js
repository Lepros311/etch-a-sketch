const btn = document.querySelector('.btn');
const cdiv = document.querySelector('.container');
let numberPerRow = null;

function getNumberPerRow() {
    while (true) {
    numberPerRow = prompt("How many squares per side for your grid? (2-100)");
    numberPerRow = parseInt(numberPerRow);
    if ((numberPerRow <= 100) && (numberPerRow >= 2)) {
        break;
    }
    alert("That is not a valid option. Please provide a number between 2 and 100.");
}
return numberPerRow;
};

function clearBoxes() {
    cdiv.innerHTML = null;
}

function createBoxes() {
    numberPerRow = getNumberPerRow();
    
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
    
  
    for (let i = 1; i < total; i++) {  
        let div = document.createElement('div');

      if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        div.style.cssText = "border: 1px solid black; flex-grow: 1; aspect-ratio: 1/1;";
      }
  
      cdiv.appendChild(div);
    };
    const divs = cdiv.querySelectorAll('div');
    divs.forEach(function(div) {
        div.addEventListener('mouseover', function(e) {
            div.classList.toggle('color');
        });
    });
};

btn.addEventListener('click', () => {
    clearBoxes();
    createBoxes();
})

createBoxes();

