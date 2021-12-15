const scrollContainer = document.querySelector("html");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------
var allWebsites;
var xPos = [];
var yPos = [];
var selected = [];
var displayedNames = [];

let backgr=0;
let spacing;
let vw;
let vh;
let zoom=50;

let freedomBox;
let rightBox;
let decentralizedBox;
let safeBox;
let dataBox;
let alternativeBox;
let openBox;
let advertisementBox;
let realBox;
let freeBox;

let allFreedom;
let allRight;
let allDecentralized;
let allSafe;
let allData;
let allAlternative;
let allOpen;
let allAdvertisement;
let allReal;
let allFree;
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function preload() {
  allWebsites = loadJSON("websites.json");
}

function setup() {

  removeElements();
  vw = windowWidth/100;
  vh = windowHeight/100;
  spacing = vh*20;
  noCanvas();
  calculatePositionsX();
  calculatePositionsY();
  generateWebsites();

  freedomBox = select('#freedom');
  rightBox = select('#right');
  decentralizedBox = select('#decentralized');
  safeBox = select('#safe');
  dataBox = select('#data');
  alternativeBox = select('#alternative');
  openBox = select('#open');
  advertisementBox = select('#advertisement');
  realBox = select('#real');
  freeBox = select('#free');

  allFreedom = selectAll(".freedom");
  allRight = selectAll(".right");
  allDecentralized = selectAll(".decentralized");
  allSafe = selectAll(".safe");
  allData = selectAll(".data");
  allAlternative = selectAll(".alternative");
  allOpen = selectAll(".open");
  allAdvertisement = selectAll(".advertisement");
  allReal = selectAll(".real");
  allFree = selectAll(".free");


  freedomBox.mousePressed(switchFreedom);
  rightBox.mousePressed(switchRight);
  decentralizedBox.mousePressed(switchDecentralized);
  safeBox.mousePressed(switchSafe);
  dataBox.mousePressed(switchData);
  alternativeBox.mousePressed(switchAlternative);
  openBox.mousePressed(switchOpen);
  advertisementBox.mousePressed(switchAdvertisement);
  realBox.mousePressed(switchReal);
  freeBox.mousePressed(switchFree);
}

function draw() {
}

function windowResized() {
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function calculatePositionsX() {
  for (let i=0; i<87; i++) {
    let thisPosX = 10*vh + spacing*i*zoom/50;
    xPos[i]=thisPosX;
  }
}

function calculatePositionsY() {
  for (let i=0; i<87; i++) {
    if ( i % 2 == 0) {
      let thisPosY = random(vh*20, vh*20);
      yPos[i]=thisPosY;
    } else {
      let thisPosY = random(vh*70, vh*70);
      yPos[i]=thisPosY;
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------
class Website {
  constructor(x, y, siteName, siteKeywords, overlayBox, overlaySite, overlayText, linkString) {
    this.x = x;
    this.y = y;
    this.siteName = siteName;
    this.siteKeywords = siteKeywords;
    this.overlayBox = overlayBox;
    this.overlaySite = overlaySite;
    this.overlayText = overlayText;
    this.linkString = linkString;
    this.linkButton = linkButton;
  }

  show() {
    let siteName = createDiv(this.siteName);
    siteName.position(0,0);
    siteName.addClass("siteName");

    let siteKeywords = createDiv(this.siteKeywords);
    siteKeywords.parent(siteName);
    siteKeywords.addClass("siteKeywords");

    let overlayBox = createDiv();
    overlayBox.position(0,0);
    overlayBox.addClass("hideOverlay");
    overlayBox.mouseOver(showOverlay);
    overlayBox.mouseOut(hideOverlay);

    let overlaySite = createDiv(this.overlaySite);
    overlaySite.parent(overlayBox);
    overlaySite.addClass("overlaySite");

    let overlayText = createDiv(this.overlayText);
    overlayText.parent(overlayBox);
    overlayText.addClass("overlayText");

    let linkString = createA(this.linkString);
    linkString.parent(overlayBox);

    let linkButton = createButton("Go to website");
    linkButton.parent(linkString);
    linkButton.addClass("linkButton");
  }

  move() {
    siteName.style("left", this.x/10 + "vh");
    siteName.style("left", this.y/10 + "vh");
  }
}

function generateWebsites() {
  let currentPosX;
  let currentPosY;
  let indexY=0;
  let indexX=0;
  for (let i=0; i<87; i++) {
    let siteName;
    let siteKeywords;
    let overlayBox;
    let overlaySite;
    let overlayText;
    let linkString;
    let linkButton;

    currentPosY = yPos[indexY];
    indexY ++;
    currentPosX = xPos[indexX];
    indexX ++;
    if (!displayedNames.includes(siteName)) {
      print("yeah");
      siteName = createDiv(allWebsites[i].Platform);
      siteName.position(0,0);
      siteName.addClass("siteName");
      displayedNames.push(siteName);

      //------------------------------------------------------------------------------------

      siteKeywords = createDiv(allWebsites[i].Keywords);
      siteKeywords.parent(siteName);
      siteKeywords.addClass("siteKeywords");

      //------------------------------------------------------------------------------------

      overlayBox = createDiv();
      overlayBox.position(0,0);
      overlayBox.addClass("hideOverlay");
      overlayBox.mouseOver(showOverlay);
      overlayBox.mouseOut(hideOverlay);

      overlaySite = createDiv(allWebsites[i].Platform);
      overlaySite.parent(overlayBox);
      overlaySite.addClass("overlaySite");

      overlayText = createDiv(allWebsites[i].Payoff);
      overlayText.parent(overlayBox);
      overlayText.addClass("overlayText");

      linkString = createA(allWebsites[i].Link, "");
      linkString.parent(overlayBox);

      linkButton = createButton("Go to website");
      linkButton.parent(linkString);
      linkButton.addClass("linkButton");
    }

    let thisCategories = [];
    if (allWebsites[i].Category1!="") {thisCategories.push(allWebsites[i].Category1);}
    if (allWebsites[i].Category2!="") {thisCategories.push(allWebsites[i].Category2);}
    if (allWebsites[i].Category3!="") {thisCategories.push(allWebsites[i].Category3);}
    if (allWebsites[i].Category4!="") {thisCategories.push(allWebsites[i].Category4);}
    if (allWebsites[i].Category5!="") {thisCategories.push(allWebsites[i].Category5);}
    if (allWebsites[i].Category6!="") {thisCategories.push(allWebsites[i].Category6);}
    if(selected.every(r => thisCategories.includes(r))){
      recalculatePositions(siteName, currentPosX, currentPosY);
      recalculatePositions(overlayBox, currentPosX, currentPosY);
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function showOverlay() {
  //this.style("width", "10vw");
    this.removeClass("hideOverlay");
    this.addClass("overlayBox");
}

function hideOverlay() {
  //this.style("width", "10vw");
    this.removeClass("overlayBox");
    this.addClass("hideOverlay");

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchFreedom() {
  if (!selected.includes("freedom")) {
    selected[selected.length] = "freedom";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="freedom") {
        selected.splice(i,1);
      }
    }
  }
  generateWebsites();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchRight() {
  if (!selected.includes("right")) {
    selected[selected.length] = "right";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="right") {
        selected.splice(i,1);
      }
    }
  }
  recalculatePositions();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchDecentralized() {
  if (!selected.includes("decentralized")) {
    selected[selected.length] = "decentralized";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="decentralized") {
        selected.splice(i,1);
      }
    }
  }
  recalculatePositions();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchSafe() {
  if (!selected.includes("safe")) {
    selected[selected.length] = "safe";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="safe") {
        selected.splice(i,1);
      }
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchData() {
  if (!selected.includes("data")) {
    selected[selected.length] = "data";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="data") {
        selected.splice(i,1);
      }
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchAlternative() {
  if (!selected.includes("alternative")) {
    selected[selected.length] = "alternative";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="alternative") {
        selected.splice(i,1);
      }
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchOpen() {
  if (!selected.includes("open")) {
    selected[selected.length] = "open";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="open") {
        selected.splice(i,1);
      }
    }
  }
  recalculatePositions();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchAdvertisement() {
  if (!selected.includes("advertisement")) {
    selected[selected.length] = "advertisement";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="advertisement") {
        selected.splice(i,1);
      }
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchReal() {
  if (!selected.includes("real")) {
    selected[selected.length] = "real";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="real") {
        selected.splice(i,1);
      }
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchFree() {
  if (!selected.includes("free")) {
    selected[selected.length] = "free";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="free") {
        selected.splice(i,1);
      }
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function recalculatePositions(object, positionX, positionY) {
  object.style("left", positionX/10 + "vh");
  object.style("top", positionY/10 + "vh");
}
