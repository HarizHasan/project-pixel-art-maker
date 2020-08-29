const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');

// Creates a canvas based on given height and width, then adds event listeners to each cell
function makeGrid(height, width) {
    pixelCanvas.innerHTML = ' ';
    for (let y = 0; y < height; y++) {
        let tr = document.createElement('tr');
        for  (let x = 0; x < width; x++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.addEventListener('click', cellClick);
        } pixelCanvas.appendChild(tr);
    };
}

// On click, changes the color of the event target (in this case, the cell) to the color set by the color picker
function cellClick() {
    event.target.style.backgroundColor = colorPicker.value;
}

// Once sizePicker form is submitted, obtain height and width, then calls the makeGrid function
sizePicker.onsubmit = function(event) {
    event.preventDefault();
    let height = inputHeight.value;
    let width = inputWidth.value;
    makeGrid(height, width);
};