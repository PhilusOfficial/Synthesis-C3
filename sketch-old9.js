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
var displayed = [];
let backgr=0;
let spacing;
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
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function preload() {
  allWebsites = loadJSON("websites.json");
}

function setup() {

  removeElements();
  vw = windowWidth/100;
  vh = windowHeight/100;
  spacing = vw*15;
  noCanvas();
  calculatePositionsX();
  calculatePositionsY();
  rearrangeSelection();

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
  print(windowHeight);
}

function draw() {
}

function windowResized() {
  print(windowHeight);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function calculatePositionsX() {
  for (let i=0; i<87; i++) {
    let thisPosX = 7*vw + spacing*i;
    xPos[i]=thisPosX;
  }
}

function calculatePositionsY() {
  for (let i=0; i<87; i++) {
    if ( i % 2 == 0) {
      let thisPosY = random(vh*30, vh*30);
      yPos[i]=thisPosY;
    } else {
      let thisPosY = random(vh*70, vh*70);
      yPos[i]=thisPosY;
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
  freedomBox.toggleClass("freedom");
  if (!selected.includes("freedom")) {
    selected[selected.length] = "freedom";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="freedom") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchRight() {
  rightBox.toggleClass("right");
  if (!selected.includes("right")) {
    selected[selected.length] = "right";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="right") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchDecentralized() {
  decentralizedBox.toggleClass("decentralized");
  if (!selected.includes("decentralized")) {
    selected[selected.length] = "decentralized";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="decentralized") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchSafe() {
  safeBox.toggleClass("safe");
  if (!selected.includes("safe")) {
    selected[selected.length] = "safe";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="safe") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchData() {
  dataBox.toggleClass("data");
  if (!selected.includes("data")) {
    selected[selected.length] = "data";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="data") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchAlternative() {
  alternativeBox.toggleClass("alternative");
  if (!selected.includes("alternative")) {
    selected[selected.length] = "alternative";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="alternative") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchOpen() {
  openBox.toggleClass("open");
  if (!selected.includes("open")) {
    selected[selected.length] = "open";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="open") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchAdvertisement() {
  advertisementBox.toggleClass("advertisement");
  if (!selected.includes("advertisement")) {
    selected[selected.length] = "advertisement";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="advertisement") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchReal() {
  realBox.toggleClass("real");
  if (!selected.includes("real")) {
    selected[selected.length] = "real";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="real") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchFree() {
  freeBox.toggleClass("free");
  if (!selected.includes("free")) {
    selected[selected.length] = "free";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="free") {
        selected.splice(i,1);
      }
    }
  }
  rearrangeSelection();
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function rearrangeSelection() {
  removeElements();
  let currentPosX;
  let indexX=0;
  let currentPosY;
  let indexY=0;
  for (let i=0; i<87; i++) {
    let thisCategories = [];

    if (allWebsites[i].Category1!="") {thisCategories.push(allWebsites[i].Category1);}
    if (allWebsites[i].Category2!="") {thisCategories.push(allWebsites[i].Category2);}
    if (allWebsites[i].Category3!="") {thisCategories.push(allWebsites[i].Category3);}
    if (allWebsites[i].Category4!="") {thisCategories.push(allWebsites[i].Category4);}
    if (allWebsites[i].Category5!="") {thisCategories.push(allWebsites[i].Category5);}
    if (allWebsites[i].Category6!="") {thisCategories.push(allWebsites[i].Category6);}
    print("thisCat");
    print(thisCategories);
    print("selected");
    print(selected);
    if(selected.every(r => thisCategories.includes(r))){
      let keywordsLength = allWebsites[i].Keywords.length;
      currentPosY = yPos[indexY];
      indexY ++;
      currentPosX = xPos[indexX];
      indexX ++;
      //------------------------------------------------------------------------------------
      let siteContainer = createDiv();
      siteContainer.position(10000,50*vh);
      siteContainer.addClass("siteContainer");
      siteContainer.style("opacity","1");
      siteContainer.style("left", currentPosX/10 + "vh");
      siteContainer.style("top", currentPosY/10 - keywordsLength/30 + "vh");

      let siteName = createDiv(allWebsites[i].Platform);
      siteName.parent(siteContainer);
      siteName.addClass("siteName");

      //------------------------------------------------------------------------------------

      let siteKeywords = createDiv(allWebsites[i].Keywords);
      siteKeywords.parent(siteContainer);
      siteKeywords.addClass("siteKeywords");

      //------------------------------------------------------------------------------------

      let overlayBox = createDiv();
      overlayBox.position(1000,vh*50);
      overlayBox.addClass("hideOverlay");
      overlayBox.mouseOver(showOverlay);
      overlayBox.mouseOut(hideOverlay);
      overlayBox.style("left", currentPosX/10 + "vh");
      overlayBox.style("top", currentPosY/10 - keywordsLength/30 + "vh");
      overlayBox.style("-min-width", "30vh");
      overlayBox.style("width", 30+allWebsites[i].Payoff.length/100 + "vh");

      let overlaySite = createDiv(allWebsites[i].Platform);
      overlaySite.parent(overlayBox);
      overlaySite.addClass("overlaySite");

      let overlayText = createDiv(allWebsites[i].Payoff);
      overlayText.parent(overlayBox);
      overlayText.addClass("overlayText");

      let linkString = createA(allWebsites[i].Link, "");
      linkString.parent(overlayBox);

      let linkButton = createButton("Go to website");
      linkButton.parent(linkString);
      linkButton.addClass("linkButton");
    }
  }
}
