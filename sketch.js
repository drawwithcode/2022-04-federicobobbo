let myColor=10;

function setup() {
	createCanvas(windowWidth, windowHeight)
	console.log("Move me babeeee!")
	// by defaults equals to 0.5
	setMoveThreshold(2);
	textSize(20)
	textAlign(CENTER)
}

function draw() {
	background(myColor)
	text('Move to read me better', width/2, height/2)
}

function deviceMoved() {
  	myColor+=0.3;
	if (myColor>255) myColor=10;
}	

// request permissions on iOS
function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}
