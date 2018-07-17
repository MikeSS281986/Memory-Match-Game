var theParent = document.getElementById("container");
var theParent2 = document.getElementById("container2");
var children = Array.from(document.querySelectorAll('.circle'));
var children2 = Array.from(document.querySelectorAll('.circle2'));
var flippedCards = [];
var matchedCards = 0;

function buildGrid() {
  for (var i = 0; i < 12; i++) {
    var circle = document.createElement("div");
    circle.setAttribute("class", `circle redCircle`);
    if (i == 4 || i == 5 || i == 6 || i == 7) {
      circle.setAttribute("class", `circle greenCircle`);
    } else if (i == 8 || i == 9 || i == 10 || i == 11) {
      circle.setAttribute("class", `circle blueCircle`);
    }
    circle.style.width = "100px";
    circle.style.marginBottom = "10px";
    circle.style.marginRight = "45px";
    circle.style.marginTop = "10px";
    circle.style.height = "100px";
    circle.style.border = "solid";
    circle.style.borderRadius = "50%";
    circle.style.borderColor = "black";
    circle.style.float = "right";
    circle.id = 'circle' + i;
    theParent.appendChild(circle);
  }
}

function buildGrid2() {
  for (var i = 0; i < 12; i++) {
    var circle2 = document.createElement("div");
    circle2.setAttribute("class", `circle2 redCircle2`);
    if (i == 4 || i == 5 || i == 6 || i == 7) {
      circle2.setAttribute("class", `circle2 greenCircle2`);
    } else if (i == 8 || i == 9 || i == 10 || i == 11) {
      circle2.setAttribute("class", `circle2 blueCircle2`);
    }
    circle2.style.width = "100px";
    circle2.style.marginBottom = "10px";
    circle2.style.marginRight = "45px";
    circle2.style.marginTop = "10px";
    circle2.style.height = "100px";
    circle2.style.border = "solid";
    circle2.style.borderRadius = "50%";
    circle2.style.borderColor = "black";
    circle2.style.backgroundColor = "#bdc7ca";
    circle2.style.float = "right";
    circle2.id = 'circle2' + i;
    theParent2.appendChild(circle2);
  }
}

function clickGray() {
  theParent2.addEventListener("click", flipCard, false);
}

function flipCard(e) {
  if (e.target !== e.currentTarget) {
    var cirlce = e.target.id;
    e.target.style.backgroundColor = "transparent";
  }
  flipCheck(e);
  e.stopPropagation();
}

function flipCheck(e) {
  flippedCards.push(e.target);
  var len = flippedCards.length;
  if (len === 2) {
    //console.log(flippedCards);
    if (flippedCards[0].className === flippedCards[1].className) {
      flippedCards = [];                            
      matchedCards = matchedCards + 1;
      console.log(matchedCards);
      if (matchedCards == 6) {
        alert("Game Over");
        reset();
      }
      return;
    } else {
      flippedCards[0].style.backgroundColor = "#bdc7ca";
      flippedCards[1].style.backgroundColor = "#bdc7ca";
      flippedCards = [];
      return;
    }
  }
};


function colorizeRed() {
  var circleRed = document.querySelectorAll('.redCircle');
  for (var i = 0; i < circleRed.length; i++) {
    circleRed[i].style.background = "linear-gradient(red, #dc3c3c)";
  }
}

function colorizeGreen() {
  var circleGreen = document.querySelectorAll('.greenCircle');
  for (var i = 0; i < circleGreen.length; i++) {
    circleGreen[i].style.background = "linear-gradient(green, #35c523)";
  }
}

function colorizeBlue() {
  var circleBlue = document.querySelectorAll('.blueCircle');
  for (var i = 0; i < circleBlue.length; i++) {
    circleBlue[i].style.background = "linear-gradient(blue, #1d71d0)";
  }
}

function shuffle(obj1, obj2) {
  var parent = document.getElementById("container");
  var parent2 = document.getElementById("container2");
  var children = Array.from(document.querySelectorAll('.circle'));
  var children2 = Array.from(document.querySelectorAll('.circle2'));
  var counter = children.length,
    tmp1, tmp2, index;


  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    tmp1 = obj1[counter];
    tmp2 = obj2[counter];
    obj1[counter] = obj1[index];
    obj2[counter] = obj2[index];
    obj1[index] = tmp1;
    obj2[index] = tmp2;
    parent.appendChild(children[index]);
    parent2.appendChild(children2[index]);
  }
  //console.log(children, children2);
}

function reset() {
  if (confirm('Play again?')) {
    clearBoard();
    shuffle(children, children2);
  } else {
    return; //exit
  }
}

function clearBoard() {
  var circle2 = document.querySelectorAll(".circle2")
  for (var i = 0; i < circle2.length; i++) {
    circle2[i].style.backgroundColor = "#bdc7ca";
  }
}

function start() {
  buildGrid();
  buildGrid2();
  colorizeRed();
  colorizeGreen();
  colorizeBlue();
  shuffle(children, children2);
  clickGray();
}
start();
