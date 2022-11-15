var colors = ["#9ee493", "#6369d1", "#e2c044",
 "#E2725B", "#2e5266"]

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background("white")
  for (let i=0; i<touches.length; i++){
    const touch = touches[i];
    // use "i%colors.length" to cycle through colors array
    // useful if you have more touch points than colors
    // const color = colors[i%colors.length]

    // Replacing "i" with "touch.id" ensures
    // a better consistency in touch actions
    // compare the two solutions
    const color = colors[touch.id%colors.length]

    push()
      fill(color)
      noStroke()
      ellipse(touch.x, touch.y, 100)
    pop()
  }
  textSize(20);
  textAlign(CENTER)
  const display = touches.length+' touch points';
  text(display, width/2, height/2)
}



// let myColor=10;

// function setup() {
// 	createCanvas(windowWidth, windowHeight)
// 	console.log("Move me babeeee!")
// 	// by defaults equals to 0.5
// 	setMoveThreshold(2);
// 	textSize(20)
// 	textAlign(CENTER)
// }

// function draw() {
// 	background(myColor)
// 	text('Move to read me better', width/2, height/2)
// }

// function deviceMoved() {
//   	myColor+=0.3;
// 	if (myColor>255) myColor=10;
// }	

// // request permissions on iOS
// function touchEnded(event) {
// 	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
// 		DeviceOrientationEvent.requestPermission()
// 	}
// }
