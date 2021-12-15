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
let spacing;

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
let uncategorizedBox;

//-----------------------------------------------------------------------------------------------------------------------------------------------------
function preload() {
  allWebsites = loadJSON("websites.json");
}

function setup() {
  spacing = 18;

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
  uncategorizedBox = select('#uncategorized');

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
  uncategorizedBox.mousePressed(switchUncategorized);
}

function draw() {
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function calculatePositionsX() {
  for (let i=0; i<87; i++) {
    let thisPosX = 10 + spacing*i;
    xPos[i]=thisPosX;
  }
}

function calculatePositionsY() {
  for (let i=0; i<87; i++) {
    if ( i % 2 == 0) {
      let thisPosY = random(20, 30);
      yPos[i]=thisPosY;
    } else {
      let thisPosY = random(60, 70);
      yPos[i]=thisPosY;
    }
  }
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

function switchUncategorized() {
  uncategorizedBox.toggleClass("uncategorized");
  if (!selected.includes("uncategorized")) {
    selected[selected.length] = "uncategorized";
  } else {
    for (let i=0; i<selected.length; i++) {
      if(selected[i]=="uncategorized") {
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
    if(selected.every(r => thisCategories.includes(r))){
      let keywordsLength = allWebsites[i].Keywords.length;
      currentPosY = yPos[indexY];
      indexY ++;
      currentPosX = xPos[indexX];
      indexX ++;
      //------------------------------------------------------------------------------------
      let siteContainer = createDiv();
      siteContainer.position(0,0);
      siteContainer.addClass("siteContainer");
      siteContainer.style("left", currentPosX + "vh");
      siteContainer.style("top", currentPosY - keywordsLength/30 + "vh");


      let siteName = createDiv(allWebsites[i].Platform);
      siteName.parent(siteContainer);
      siteName.addClass("siteName");

      //------------------------------------------------------------------------------------

      let siteKeywords = createDiv(allWebsites[i].Keywords);
      siteKeywords.parent(siteContainer);
      siteKeywords.addClass("siteKeywords");

      //------------------------------------------------------------------------------------

      let overlayAll = createDiv();
      overlayAll.position(0,0);
      overlayAll.addClass("dropdown");
      overlayAll.style("top", currentPosY - keywordsLength/30 + "vh");
      overlayAll.style("left", currentPosX + "vh");


      let overlayInvisible = createDiv();
      overlayInvisible.parent(overlayAll);
      overlayInvisible.addClass("dropbtn");
      overlayInvisible.style("width", allWebsites[i].Platform.length*2+"vh");

      let overlayContainer = createDiv();
      overlayContainer.parent(overlayAll);
      overlayContainer.addClass("dropdown-content");
      if (i % 2 != 0 ) {
        overlayContainer.style("top", "5vh");
        overlayContainer.style("transform", "translateY(-100%)");
      }

      let overlaySite = createDiv(allWebsites[i].Platform);
      overlaySite.parent(overlayContainer);
      overlaySite.addClass("overlaySite");

      let overlayText = createDiv(allWebsites[i].Payoff);
      overlayText.parent(overlayContainer);
      overlayText.addClass("overlayText");

      let linkString = createA(allWebsites[i].Link, "Go to website");
      linkString.parent(overlayContainer);
      linkString.addClass();
    }
  }
}
