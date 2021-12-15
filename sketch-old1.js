var allWebsites;
let boh;
var xPos = [];
var yPos = [];
let activeWebsites = [];
let selectedWebsites = [];
let scrollPos = 0;
let c;
let backgr=0;
let activeLink;
let turnedOn;
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function preload() {
  allWebsites = loadJSON("websites.json");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  calculatePositions();
  generateWebsites();
  c =  color(random(255), random(255), random(255));
}

function draw() {
  removeElements();
  background(backgr);
  fill("red");
  rect(0,0,50,50);
  fill("green");
  rect(50,0,50,50);
  fill("red");
  rect(0,0,50,50);
  fill("blue");
  rect(100,0,50,50);

  showWebsites();
  activeLink = createA("https://2nd1st.app/", "linktopage");
  activeLink.position(200+scrollPos, 0);
  activeLink.mouseClicked(feedback);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

class Category1 {
  constructor(x, y, name, keywords, payoff, url) {
    this.x = x;
    this.y = y;
    this.name = name;
    this.keywords = keywords;
    this.payoff = payoff;
    this.url = url;
  }

  clicked(x,y) {
    if (x>this.x && x<this.x+100 && y>this.y && y<this.y+20) {
    }
  }

  mouseover(x,y) {

    let tSize=15;
    let rectH = this.payoff.length/tSize*10;
    let rectW = 300;
    noStroke();
    textSize(tSize);
    textWrap(WORD);
    if (x>this.x && x<this.x+100 && y>this.y && y<this.y+20) {
      turnedOn = true;
    }

    if (turnedOn) {
        fill("white");
        strokeWeight(1);
        textSize(tSize);
        rect(this.x+scrollPos, this.y+20, 300, this.payoff.length/tSize*10)
        noStroke();
        textWrap(WORD);
        fill("black");
        text(this.payoff, this.x + scrollPos, this.y+20,300);
        activeLink = createA(this.url, "linktopage");
        activeLink.position(this.x+scrollPos+100, this.y);
      }
  }

  show() {
    noStroke();
    fill("red");
    rect(this.x + scrollPos, this.y, 100, 20);
    fill("white");
    textSize(15);
    text(this.name, this.x + scrollPos, this.y);
    text(this.keywords, this.x + scrollPos, this.y+30, 300);
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function calculatePositions() {
  for (let i=0; i<87; i++) {
    let currentPosX = 300 + 300*i;
    xPos[i]=currentPosX;
    let currentPosY = random(height/10, height/10*9);
    yPos[i]=currentPosY;
  }
}

function generateWebsites() {
    for (let i=0; i < 87; i++) {
      allWebsites[i] = new Category1(xPos[i],yPos[i],allWebsites[i].Platform, allWebsites[i].Keywords, allWebsites[i].Payoff, allWebsites[i].Link);
    }
}

function showWebsites() {
  for (let i=0; i < 87; i++) {
      allWebsites[i].show();
      allWebsites[i].mouseover(mouseX-scrollPos, mouseY);
    }
}

function feedback() {
  print("yeah");
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------

function mouseWheel() {
  scrollSideways();
}

function scrollSideways() {
  if (scrollPos <= 0) {
    if (event.deltaY > 0) {
      scrollPos = scrollPos - 50;
    } else {
      scrollPos = scrollPos + 50;
    }
  }
  if (scrollPos>0) {
    scrollPos=0;
  }
}
