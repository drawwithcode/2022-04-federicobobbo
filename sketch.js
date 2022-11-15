let slider;
let speech = new p5.SpeechRec('en-US', parseResult) 
speech.continuous = true
speech.interimResults = false

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(255)
  slider = createSlider(10, 200, 55);
  slider.position((width/2)-65, 60);
  slider.style('width', '200')
  setShakeThreshold(10);
  fill(25)
  textSize(24)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Avenir Next", system-ui, sans-serif')
  text('SAY A COLOR', width / 2, 40)
  speech.start()
}

const colors = []

function draw() {	
	let r = slider.value();
  for (var i = 0; i < touches.length; i++) {
	let col = speech.resultString.split(' ').pop().toUpperCase()
    fill(col);
	if(touches[i].y<130){
		noFill()}
	noStroke()
	ellipse(touches[i].x, touches[i].y, r);
  }
}

function parseResult() {
	if (speech.resultValue) {
	  let color = speech.resultString.split(' ').pop().toUpperCase()
	  colors.push(color)
	  fill("white")
	  noStroke()
	  rect(0,0, width, 100)
	  fill(color)
	  text(color, width / 2, 40)
	  console.log(colors)
	}
  }

  if (speech.resultValue === 'read'){
	color = "red";
	colors.push(color)
	
  }


  function touchEnded(event) {
	if(DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
		DeviceOrientationEvent.requestPermission()
	}
}

function touchStarted() {
 	return true;
  }