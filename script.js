function changeColor(color) {
    const boxes = document.querySelectorAll('.box');
    const textColor = color === 'yellow' || color === 'cyan' ? 'black' : 'white';
    boxes.forEach(box => {
      box.style.backgroundColor = color;
      box.style.color = textColor;
    });
  }


















