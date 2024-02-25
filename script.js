function createBoxes(numberPerRow) {
    const cdiv = document.querySelector('.container');
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
  
    for (let i = 1; i < total; i++) {
      const div = document.createElement('div');
  
      if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        div.style.cssText = "border: 1px solid black; flex-grow: 1; aspect-ratio: 1/1;";
      }
  
      cdiv.appendChild(div);
    }
  }
  
  createBoxes(16);