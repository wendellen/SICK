var font;
var startTime = 0;
var currentIndex = 0;
var textContent = [
  "YOU MAKE ME SICK",
  "I MISS YOU MOM. (WHY WON'T YOU SEE ME?)",
  "I'M SORRY I ALWAYS CHOOSE THE GUY.",
  "I'M SORRY I COULDN'T SHOW UP FOR YOU\nTHE WAY YOU DID FOR ME.",
  "YOU USE WOMEN TO BOOST YOUR EGO\nTHAT YOU THEN EXPECT ME TO VALIDATE\nAFTER YOU SHATTER ME COS YOU CAN'T BEAR\nTO FEEL LIKE A BAD PERSON.",
];
var waitTimes = [1000, 1000, 1000, 2000, 2000];

function preload() {
  font = loadFont('assets/Anton-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont(font);
  startTime = millis(); // save the start time when the sketch is first run
}

function draw() {
  clear();

  textSize(48);
  fill(153);

  // check if the wait time has passed for the current index
  if (millis() - startTime >= waitTimes[currentIndex]) {
    currentIndex++; // move to the next index
    currentIndex %= textContent.length; // wrap around if we reach the end of the array
    startTime = millis(); // reset the start time for the next interval
  }

  text(textContent[currentIndex], width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
