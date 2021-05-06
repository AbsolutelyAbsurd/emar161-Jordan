let img;
let img2;
let img3;
let img3b;
let gokuKamehameha;
let vegetaFinalFlash;
let img3c;
let gokuYellowTransform;
let vegetaYellowTransform;
let gokuTransform;
let vegetaTransform;
let img4a;
let img4b;
let gokuBlueCharge;
let vegetaBlueFinalFlashPartA;
let vegetaBlueFinalFlashPartB;
let gokuBlueKamehamehaPartA;
let gokuBlueKamehamehaPartB;
let explosion;
let explosion2;
let gokuVictory;
let gokuVictoryB;
let vegetaVictory;
let vegetaEndScreen;
let vegetaDance;
let chooseYourWinner;
let gokuIsWinner = 0;
let vegetaIsWinner = 1;

//winner

let winner;

function preload() {
  soundfile = loadSound('dbzMusic.mp3');
  vegetaTheme = loadSound('DragonBallFighterZOSTVegetasTheme.mp3')

  //gifs
  img = loadImage('opening.gif');
  img2 = loadImage('gokuStance.gif');
  img3 = loadImage('part1.gif');
  img3b = loadImage('img3b.gif');
  img3c = loadImage('img3c.gif');
  gokuKamehameha = loadImage('gokuKamehameha.gif');
  vegetaFinalFlash = loadImage('vegetaFinalFlash.gif')
  gokuYellowTransform = loadImage('gokuYellowTransformResized.gif');
  vegetaYellowTransform = loadImage('vegetaYellowTransformResized.gif');
  gokuTransform = loadImage('gokublueTransformResized.gif');
  vegetaTransform = loadImage('vegetaTransformResized.gif');
  img4a = loadImage('part2.gif');
  img4b = loadImage('img4b.gif');
  vegetaBlueFinalFlashPartA = loadImage('vegetaBlueFinalFlashPartA.gif');
  vegetaBlueFinalFlashPartB = loadImage('vegetaBlueFinalFlashPartB.gif');
  gokuBlueCharge = loadImage('gokuBlueCharge.gif');
  gokuBlueKamehamehaPartA = loadImage('gokuBlueKamehamehaPartA.gif');
  gokuBlueKamehamehaPartB = loadImage('gokuBlueKamehamehaPartB.gif');
  explosion2 = loadImage('explosion2a.gif');
  gokuVictory = loadImage('gokuVictory.gif');
  gokuVictoryB = loadImage('gokuVictoryB.gif');
  vegetaVictory = loadImage('vegetaVictory.gif');
  vegetaEndScreen = loadImage('vegetaVictoryEndScreen.JPG');
  vegetaDance = loadImage('vegetaDance.gif');
  chooseYourWinner = loadImage('chooseYourWinner.png');
}

function setup() {
  createCanvas(400, 800);
  //buttons
  let gokuButton = createButton("Goku will win!");
  gokuButton.position(50, 600);
  gokuButton.mousePressed(gokuWins);

  let vegetaButton = createButton("Vegeta will win!");
  vegetaButton.position(250, 600);
  vegetaButton.mousePressed(vegetaWins);
}

function gokuWins() {
  createCanvas(400, 400);
  fill('white');
  rect(400, 400);
  soundfile.stop();
  vegetaTheme.stop();
  winner = gokuIsWinner;
  soundfile.play();
}

function vegetaWins() {
  createCanvas(400, 400);
  fill('white');
  rect(400, 400);
  soundfile.stop();
  vegetaTheme.stop();
  winner = vegetaIsWinner;
  vegetaTheme.play();
}


function draw() {
  //if function for the fight
  textFont('Saiyan Sans');
  textSize(16);
  text('Hello! Welcome to what I call "Project Dragon Ball."', 30, 50);
  text('Project Dragon Ball is an AMV made from mixed sources', 20, 70);
  text('Including:', 170, 90);
  text('Dragon Ball Z, Dragon Ball Super, Dragon Ball FighterZ', 20, 110);
  text('Pixel Art by Shaun Caley and Assn Ponte', 70, 130);
  text('And a Dragon Ball Super Opening 2 cover by Jonathan Young', 0, 150);
  text('For the best user experience, follow these rules', 50, 190);
  text('p5 can be pretty weird with gifs', 100, 210);
  text('After pressing a button, watch until the end', 70, 230);
  text('Do not open/switch to a different tab or press the buttons', 20, 250);
  text('If you want to experience the other option', 65, 270);
  text('Reopen the sketch and choose the other option', 55, 290);
  text('Now, pick a winner and enjoy!', 110, 330);
  
  textSize(8);
  text('Quality of transitions may be affected by lag. Try to have as little other tabs or programs open to prevent choppy transitions.', 0, 370);
  
  //choose your winner
  
  image(chooseYourWinner, 0, 400);
  chooseYourWinner.resize(400, 400);
  
  //goku function
  if (winner == gokuIsWinner) {
    if (soundfile.currentTime() < 14.7) {
      image(img, 0, 0);
    } else if (soundfile.currentTime() > 14.7 && soundfile.currentTime() < 18.1) {
      image(img2, 0, 0);
    } else if (soundfile.currentTime() > 18.1 && soundfile.currentTime() < 42.2) {
      image(img3, 0, 0);
    } else if (soundfile.currentTime() > 42.2 && soundfile.currentTime() < 52.3) {
      image(vegetaYellowTransform, 0, 0);
    } else if (soundfile.currentTime() > 52.3 && soundfile.currentTime() < 55.8) {
      image(gokuYellowTransform, 0, 0);
    } else if (soundfile.currentTime() > 55.8 && soundfile.currentTime() < 69.5) {
      image(img3b, 0, 0);
    } else if (soundfile.currentTime() > 69.5 && soundfile.currentTime() < 75.4) {
      image(gokuKamehameha, 0, 0);
    } else if (soundfile.currentTime() > 75.4 && soundfile.currentTime() < 78.1) {
      image(vegetaFinalFlash, 0, 0);
    } else if (soundfile.currentTime() > 78.1 && soundfile.currentTime() < 81.2) {
      image(img3c, 0, 0);
    } else if (soundfile.currentTime() > 81.2 && soundfile.currentTime() < 91.8) {
      image(img4a, 0, 0);
    } else if (soundfile.currentTime() > 91.8 && soundfile.currentTime() < 95) {
      image(gokuTransform, 0, 0);
    } else if (soundfile.currentTime() > 95 && soundfile.currentTime() < 105.3) {
      image(vegetaTransform, 0, 0);
    } else if (soundfile.currentTime() > 105.3 && soundfile.currentTime() < 120.3) {
      image(img4b, 0, 0);
    } else if (soundfile.currentTime() > 120.3 && soundfile.currentTime() < 122.79) {
      image(gokuBlueCharge, 0, 0);
    } else if (soundfile.currentTime() > 122.79 && soundfile.currentTime() < 123.49) {
      image(gokuBlueKamehamehaPartA, 0, 0);
    } else if (soundfile.currentTime() > 123.49 && soundfile.currentTime() < 128.28) {
      image(gokuBlueKamehamehaPartB, 0, 0);
    } else if (soundfile.currentTime() > 128.28 && soundfile.currentTime() < 131.28) {
      image(vegetaBlueFinalFlashPartA, 0, 0);
    } else if (soundfile.currentTime() > 128.28 && soundfile.currentTime() < 136.38) {
      image(vegetaBlueFinalFlashPartB, 0, 0);
    } else if (soundfile.currentTime() > 136.38 && soundfile.currentTime() < 139) {
      image(explosion2, 0, 0);
    } else if (soundfile.currentTime() > 139 && soundfile.currentTime() < 142) {
      image(gokuVictory, 0, 0);
    } else if (soundfile.currentTime() > 142) {
      image(gokuVictoryB, 0, 0);
      textSize(32);
    textFont('Saiyan Sans');
    text('Goku Wins!', 125, 200);
    }
    //vegeta function
  } else if (winner == vegetaIsWinner) {
    if (vegetaTheme.currentTime() < 18.5) {
      image(img, 0, 0);
    } else if (vegetaTheme.currentTime() > 18.5 && vegetaTheme.currentTime() < 42.2) {
      image(img3, 0, 0);
    } else if (vegetaTheme.currentTime() > 42.2 && vegetaTheme.currentTime() < 51.5) {
      image(vegetaYellowTransform, 0, 0);
    } else if (vegetaTheme.currentTime() > 51.5 && vegetaTheme.currentTime() < 54.8) {
      image(gokuYellowTransform, 0, 0);
    } else if (vegetaTheme.currentTime() > 54.8 && vegetaTheme.currentTime() < 69.5) {
      image(img3b, 0, 0);
    } else if (vegetaTheme.currentTime() > 69.5 && vegetaTheme.currentTime() < 74.9) {
      image(gokuKamehameha, 0, 0);
    } else if (vegetaTheme.currentTime() > 74.9 && vegetaTheme.currentTime() < 77.6) {
      image(vegetaFinalFlash, 0, 0);
    } else if (vegetaTheme.currentTime() > 77.6 && vegetaTheme.currentTime() < 80.1) {
      image(img3c, 0, 0);
    } else if (vegetaTheme.currentTime() > 80.1 && vegetaTheme.currentTime() < 90) {
      image(img4a, 0, 0);
    } else if (vegetaTheme.currentTime() > 90 && vegetaTheme.currentTime() < 94) {
      image(gokuTransform, 0, 0);
    } else if (vegetaTheme.currentTime() > 94 && vegetaTheme.currentTime() < 104) {
      image(vegetaTransform, 0, 0);
    } else if (vegetaTheme.currentTime() > 104 && vegetaTheme.currentTime() < 119) {
      image(img4b, 0, 0);
    } else if (vegetaTheme.currentTime() > 119 && vegetaTheme.currentTime() < 124) {
      image(vegetaVictory, 0, 0);
  } else if (vegetaTheme.currentTime() > 124 && vegetaTheme.currentTime() < 133) {
    image(vegetaEndScreen, 0, 0);
    vegetaEndScreen.resize(400, 400);
    textSize(32);
    textFont('Saiyan Sans');
    text('Vegeta Wins!', 125, 200);
  } else if(vegetaTheme.currentTime() > 133) {
    image(vegetaDance, 0, 0);
  }
  //buttons
  }

  // if function for the ending

  print(soundfile.currentTime());
}
