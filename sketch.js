let slider;
let speech = new p5.SpeechRec('en-US', parseResult) 
speech.continuous = true
speech.interimResults = false
var validFontTypes = ['ttf', 'otf', 'woff', 'woff2']


function setup() {
  Oswald = loadFont('Assets/Font/Oswald/static/Oswald-Bold.ttf');
  createCanvas(window.innerWidth, window.innerHeight)
  background(255)

    button = createButton('save image');
    button.position(window.innerWidth-110, 18);
    button.mousePressed(saveDrawing);

  slider = createSlider(0.1, 200, 100);
  slider.position((width / 2)-60, 20);
  slider.style('width', '200')
  fill(25)
  textSize(20)
  textAlign(CENTER)
  textFont('Oswald');
  text('SAY A COLOR', 80 , 38)
  speech.start()
}

const colors = []

function draw() {	
	let r = slider.value();
  for (var i = 0; i < touches.length; i++) {
	let col = speech.resultString.split(' ').pop().toUpperCase()
    fill(col);
	if(touches[i].y<90){
		noFill()}
	noStroke()
	ellipse(touches[i].x, touches[i].y, r);
  }
  if (mouseIsPressed===true) {
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function parseResult() {
	if (speech.resultValue) {
	  let color = speech.resultString.split(' ').pop().toUpperCase()
	  colors.push(color)
	  fill("white")
	  noStroke()
	  rect(0,0, width, 60)
	  fill(color)
	  text(color, 80, 38)
	  console.log(colors)
	}
  }

  if (speech.resultValue === 'read'){
	color = "red";
	colors.push(color)
	
  }


function touchStarted() {
 	return true;
  }

  // function setup() {
  //   createCanvas(400, 400);
  //   button = createButton('save image');
  //   button.position(10, 410);
  //   button.mousePressed(saveDrawing);
    
  //   background(0);
  //   noFill();
  //   stroke(255);
  // }
  
  // function draw() {
  //   if (mouseIsPressed===true) {
  //     ellipse(mouseX, mouseY, 50, 50);
  //   }
  // }
  
  function saveDrawing() {
    save("Picture.png");
  }