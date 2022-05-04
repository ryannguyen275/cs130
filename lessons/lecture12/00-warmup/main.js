



// Step 1: what event do we want to use to create these shapes:



// Step 2: Create an event handler to attach to the event:

const addShape=(ev) => {
	console.log(ev.offsetX, ev.offsetY);
	console.log('Add shape');
	let color = document.querySelector('#color').value;
	let size = document.querySelector('#size').value;
	let size = document.querySelector('#shape').value;
	if(shape=== 'Circle'){
		const circle = `<circle 
		cx="${ev.offsetX}"
		cy="${ev.offsetY}" 
		r="${size}" 
		stroke="black" 
		stroke-width="3" 
		fill="${color}"></circle>`;
		document.querySelector('svg').insertAdjacentHTML("beforeend", circle);
	
	} else if (shape === 'square') {
		const square = `<rect
		x="291" 
		y="70" 
		width="40" 
		height="40" 
		stroke="black" 
		stroke-width="3" 
		fill="pink"> </rect>`;
		document.querySelector('svg').insertAdjacentHTML("beforeend", square);
	} else if (shape === 'triangle') {
		const triangle = `triangle
		<polygon points="100,100 150,100 125,135" 
		stroke="black" 
		stroke-width="3" 
		fill="teal"></polygon>`;
		document.querySelector('svg').insertAdjacentHTML("beforeend", triangle);



	}}
