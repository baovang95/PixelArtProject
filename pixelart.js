//select color input
const color = document.querySelector('#colorPicker');
//select size input
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const sizePicker = document.querySelector('#sizePicker');
const pixelCanvas = document.querySelector('#pixelCanvas');

//when size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(e) {
	e.preventDefault();
	makeGrid();

	//makes grid
	function makeGrid() {
		pixelCanvas.innerHTML = ''
		let tr, td;
		//for loop creates rows and columns
		for (let h = 0; h < height.value; h++) {
			tr = document.createElement('tr');
			pixelCanvas.appendChild(tr);
			for (let w = 0; w < width.value; w++) {
				td = document.createElement('td');
				tr.appendChild(td);
			}
		}
		//changes color of box selected
		pixelCanvas.addEventListener('click', function(e) {
			e.preventDefault();
			if (e.target.nodeName === 'TD') {
				e.target.style.backgroundColor = color.value;

			}
		})
	}

})
