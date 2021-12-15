const scrollContainer = document.querySelector("html");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------
var allWebsites;
var xPos = [];
var yPos = [];
let backgr=0;
let spacing = 200;
let vw;
let vh;

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
  vw = windowWidth/100;
  vh = windowHeight/100;
  noCanvas();
  calculatePositions();
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

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function calculatePositions() {
  for (let i=0; i<87; i++) {
    let thisPosX = 300 + spacing*i;
    xPos[i]=thisPosX;
    if ( i % 2 == 0) {
      let thisPosY = random(windowHeight/10, windowHeight/10*4);
      yPos[i]=thisPosY;
    } else {
      let thisPosY = random(windowHeight/10*5, windowHeight/10*9);
      yPos[i]=thisPosY;
    }
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function generateWebsites() {
    for (let i=0; i < 87; i++) {
      let siteLength = allWebsites[i].Platform.length;
      let currentPosX = xPos[i];
      let currentPosY = yPos[i];

      let siteName = createDiv(allWebsites[i].Platform);
      siteName.position(currentPosX,currentPosY);
      siteName.class("siteName");

      let siteKeywords = createDiv(allWebsites[i].Keywords);
      siteKeywords.parent(siteName);
      siteKeywords.class("siteKeywords");

      let overlayBox = createDiv();
      overlayBox.position(currentPosX,currentPosY,"absolute");
      overlayBox.class("hideOverlay");
      overlayBox.mouseOver(showOverlay);
      overlayBox.mouseOut(hideOverlay);

      let overlaySite = createDiv(allWebsites[i].Platform);
      overlaySite.parent(overlayBox);
      overlaySite.class("overlaySite");

      let overlayText = createDiv(allWebsites[i].Payoff);
      overlayText.parent(overlayBox);
      overlayText.class("overlayText");

      let linkString = createA(allWebsites[i].Link, "");
      linkString.parent(overlayBox);


      let linkButton = createButton("Go to website");
      linkButton.parent(linkString);
      linkButton.class("linkButton");

      //let element = createDiv(xPos[i],yPos[i],allWebsites[i].Platform, allWebsites[i].Keywords, allWebsites[i].Payoff, allWebsites[i].Link);
    }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------


function showOverlay() {
  //this.style("width", "10vw");
  this.removeClass("hideOverlay");
  this.class("overlayBox");
  for (let i=0; i < 87; i++) {

  }
}

function hideOverlay() {
  //this.style("width", "10vw");
  this.removeClass("overlayBox");
  this.class("hideOverlay");
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchFreedom() {
  freedomBox.toggleClass("checkboxSelected");
  for (let i=0; i<allFreedom.length; i++) {
    allFreedom[i].toggleClass('freedom');
  }
}

function switchRight() {
  rightBox.toggleClass("checkboxSelected");
  for (let i=0; i<allRight.length; i++) {
    allRight[i].toggleClass('right');
  }
}

function switchDecentralized() {
  decentralizedBox.toggleClass("checkboxSelected");
  for (let i=0; i<allDecentralized.length; i++) {
    allDecentralized[i].toggleClass('decentralized');
  }
}

function switchSafe() {
  safeBox.toggleClass("checkboxSelected");
  for (let i=0; i<allSafe.length; i++) {
    allSafe[i].toggleClass('safe');
  }
}

function switchData() {
  dataBox.toggleClass("checkboxSelected");
  for (let i=0; i<allData.length; i++) {
    allData[i].toggleClass('data');
  }
}

function switchAlternative() {
  alternativeBox.toggleClass("checkboxSelected");
  for (let i=0; i<allAlternative.length; i++) {
    allAlternative[i].toggleClass('alternative');
  }
}

function switchOpen() {
  openBox.toggleClass("checkboxSelected");
  for (let i=0; i<allOpen.length; i++) {
    allOpen[i].toggleClass('open');
  }
}

function switchAdvertisement() {
  advertisementBox.toggleClass("checkboxSelected");
  for (let i=0; i<allAdvertisement.length; i++) {
    allAdvertisement[i].toggleClass('advertisement');
  }
}

function switchReal() {
  realBox.toggleClass("checkboxSelected");
  for (let i=0; i<allReal.length; i++) {
    allReal[i].toggleClass('real');
  }
}

function switchFree() {
  freeBox.toggleClass("checkboxSelected");
  for (let i=0; i<allFree.length; i++) {
    allFree[i].toggleClass('free');
  }
}
