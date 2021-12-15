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

function generateWebsites() {
    for (let i=0; i < 87; i++) {
      let siteLength = allWebsites[i].Platform.length;
      let currentPosX = xPos[i];
      let currentPosY = yPos[i];

      //------------------------------------------------------------------------------------

      let siteName = createDiv(allWebsites[i].Platform);
      siteName.position(0,0);
      siteName.addClass("siteName");

      if (allWebsites[i].Category1 == "freedom" || allWebsites[i].Category2 == "freedom" || allWebsites[i].Category3 == "freedom" || allWebsites[i].Category4 == "freedom" || allWebsites[i].Category5 == "freedom" || allWebsites[i].Category6 == "freedom") {
        siteName.addClass("freedomNames");
        siteName.addClass("scale");
      }

      if (allWebsites[i].Category1 == "right" || allWebsites[i].Category2 == "right" || allWebsites[i].Category3 == "right" || allWebsites[i].Category4 == "right" || allWebsites[i].Category5 == "right" || allWebsites[i].Category6 == "right") {
        siteName.addClass("rightNames");
        siteName.addClass("scale");
      }

      if (allWebsites[i].Category1 == "decentralized" || allWebsites[i].Category2 == "decentralized" || allWebsites[i].Category3 == "decentralized" || allWebsites[i].Category4 == "decentralized" || allWebsites[i].Category5 == "decentralized" || allWebsites[i].Category6 == "decentralized") {
        siteName.addClass("decentralizedNames");
        siteName.addClass("scale");
      }

      if (allWebsites[i].Category1 == "safe" || allWebsites[i].Category2 == "safe" || allWebsites[i].Category3 == "safe" || allWebsites[i].Category4 == "safe" || allWebsites[i].Category5 == "safe" || allWebsites[i].Category6 == "safe") {
        siteName.addClass("safeNames");
        siteName.addClass("scale");
      }

      if (allWebsites[i].Category1 == "data" || allWebsites[i].Category2 == "data" || allWebsites[i].Category3 == "data" || allWebsites[i].Category4 == "data" || allWebsites[i].Category5 == "data" || allWebsites[i].Category6 == "data") {
        siteName.addClass("dataNames");
        siteName.addClass("scale");
      }

      if (allWebsites[i].Category1 == "alternative" || allWebsites[i].Category2 == "alternative" || allWebsites[i].Category3 == "alternative" || allWebsites[i].Category4 == "alternative" || allWebsites[i].Category5 == "alternative" || allWebsites[i].Category6 == "alternative") {
        siteName.addClass("alternativeNames");
        siteName.addClass("scale");
      }

      if (allWebsites[i].Category1 == "open" || allWebsites[i].Category2 == "open" || allWebsites[i].Category3 == "open" || allWebsites[i].Category4 == "open" || allWebsites[i].Category5 == "open" || allWebsites[i].Category6 == "open") {
        siteName.addClass("openNames");
        siteName.addClass("scale");
      }

      if (allWebsites[i].Category1 == "advertisement" || allWebsites[i].Category2 == "advertisement" || allWebsites[i].Category3 == "advertisement" || allWebsites[i].Category4 == "advertisement" || allWebsites[i].Category5 == "advertisement" || allWebsites[i].Category6 == "advertisement") {
        siteName.addClass("advertisementNames");
        siteName.addClass("scale");
      }

      if (allWebsites[i].Category1 == "real" || allWebsites[i].Category2 == "real" || allWebsites[i].Category3 == "real" || allWebsites[i].Category4 == "real" || allWebsites[i].Category5 == "real" || allWebsites[i].Category6 == "real") {
        siteName.addClass("realNames");
        siteName.addClass("scale");
      }

      if (allWebsites[i].Category1 == "free" || allWebsites[i].Category2 == "free" || allWebsites[i].Category3 == "free" || allWebsites[i].Category4 == "free" || allWebsites[i].Category5 == "free" || allWebsites[i].Category6 == "free") {
        siteName.addClass("freeNames");
        siteName.addClass("scale");
      }

      siteName.style("left", currentPosX/10 + "vh");
      siteName.style("top", currentPosY/10 + "vh");

      //------------------------------------------------------------------------------------

      let siteKeywords = createDiv(allWebsites[i].Keywords);
      siteKeywords.parent(siteName);
      siteKeywords.addClass("siteKeywords");

      //------------------------------------------------------------------------------------

      let overlayBox = createDiv();
      overlayBox.position(0,0);
      overlayBox.addClass("hideOverlay");
      overlayBox.mouseOver(showOverlay);
      overlayBox.mouseOut(hideOverlay);
      overlayBox.style("left", currentPosX/10 + "vh");
      overlayBox.style("top", currentPosY/10 + "vh");

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
  let allFreedomSites = selectAll(".freedomNames");

  for (let i=0; i<allFreedomSites.length; i++) {
    if (!allFreedomSites[i].hasClass("rightNames") && !allFreedomSites[i].hasClass("decentralizedNames") && !allFreedomSites[i].hasClass("safeNames") && !allFreedomSites[i].hasClass("dataNames") && !allFreedomSites[i].hasClass("alternativeNames") && !allFreedomSites[i].hasClass("openNames") && !allFreedomSites[i].hasClass("advertisementNames") && !allFreedomSites[i].hasClass("realNames") && !allFreedomSites[i].hasClass("freeNames")) {
          allFreedomSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allFreedom.length; i++) {
    allFreedom[i].toggleClass('freedom');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchRight() {
  let allRightSites = selectAll(".rightNames");

  for (let i=0; i<allRightSites.length; i++) {
    if (!allRightSites[i].hasClass("freedomNames") && !allRightSites[i].hasClass("decentralizedNames") && !allRightSites[i].hasClass("safeNames") && !allRightSites[i].hasClass("dataNames") && !allRightSites[i].hasClass("alternativeNames") && !allRightSites[i].hasClass("openNames") && !allRightSites[i].hasClass("advertisementNames") && !allRightSites[i].hasClass("realNames") && !allRightSites[i].hasClass("freeNames")) {
      allRightSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allRight.length; i++) {
    allRight[i].toggleClass('right');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchDecentralized() {
  let allDecentralizedSites = selectAll(".decentralizedNames");

  for (let i=0; i<allDecentralizedSites.length; i++) {
    if (!allDecentralizedSites[i].hasClass("freedomNames") && !allDecentralizedSites[i].hasClass("rightNames") && !allDecentralizedSites[i].hasClass("safeNames") && !allDecentralizedSites[i].hasClass("dataNames") && !allDecentralizedSites[i].hasClass("alternativeNames") && !allDecentralizedSites[i].hasClass("openNames") && !allDecentralizedSites[i].hasClass("advertisementNames") && !allDecentralizedSites[i].hasClass("realNames") && !allDecentralizedSites[i].hasClass("freeNames")) {
          allDecentralizedSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allDecentralized.length; i++) {
    allDecentralized[i].toggleClass('decentralized');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchSafe() {
  let allSafeSites = selectAll(".safeNames");

  for (let i=0; i<allSafeSites.length; i++) {
    if (!allRightSites[i].hasClass("freedomNames") && !allRightSites[i].hasClass("decentralizedNames") && !allRightSites[i].hasClass("safeNames") && !allRightSites[i].hasClass("dataNames") && !allRightSites[i].hasClass("alternativeNames") && !allRightSites[i].hasClass("openNames") && !allRightSites[i].hasClass("advertisementNames") && !allRightSites[i].hasClass("realNames") && !allRightSites[i].hasClass("freeNames")) {
          allSafeSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allSafe.length; i++) {
    allSafe[i].toggleClass('safe');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchData() {
  let allDataSites = selectAll(".dataNames");

  for (let i=0; i<allDataSites.length; i++) {
    if (!allRightSites[i].hasClass("freedomNames") && !allRightSites[i].hasClass("decentralizedNames") && !allRightSites[i].hasClass("safeNames") && !allRightSites[i].hasClass("dataNames") && !allRightSites[i].hasClass("alternativeNames") && !allRightSites[i].hasClass("openNames") && !allRightSites[i].hasClass("advertisementNames") && !allRightSites[i].hasClass("realNames") && !allRightSites[i].hasClass("freeNames")) {
      allDataSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allData.length; i++) {
    allData[i].toggleClass('data');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchAlternative() {
  let allAlternativeSites = selectAll(".alternativeNames");

  for (let i=0; i<allAlternativeSites.length; i++) {
    if (!allRightSites[i].hasClass("freedomNames") && !allRightSites[i].hasClass("decentralizedNames") && !allRightSites[i].hasClass("safeNames") && !allRightSites[i].hasClass("dataNames") && !allRightSites[i].hasClass("alternativeNames") && !allRightSites[i].hasClass("openNames") && !allRightSites[i].hasClass("advertisementNames") && !allRightSites[i].hasClass("realNames") && !allRightSites[i].hasClass("freeNames")) {
      allAlternativeSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allAlternative.length; i++) {
    allAlternative[i].toggleClass('alternative');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchOpen() {
  let allOpenSites = selectAll(".openNames");

  for (let i=0; i<allOpenSites.length; i++) {
    if (!allRightSites[i].hasClass("freedomNames") && !allRightSites[i].hasClass("decentralizedNames") && !allRightSites[i].hasClass("safeNames") && !allRightSites[i].hasClass("dataNames") && !allRightSites[i].hasClass("alternativeNames") && !allRightSites[i].hasClass("openNames") && !allRightSites[i].hasClass("advertisementNames") && !allRightSites[i].hasClass("realNames") && !allRightSites[i].hasClass("freeNames")) {
      allOpenSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allOpen.length; i++) {
    allOpen[i].toggleClass('open');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchAdvertisement() {
  let allAdvertisementSites = selectAll(".advertisementNames");

  for (let i=0; i<allAdvertisementSites.length; i++) {
    if (!allRightSites[i].hasClass("freedomNames") && !allRightSites[i].hasClass("decentralizedNames") && !allRightSites[i].hasClass("safeNames") && !allRightSites[i].hasClass("dataNames") && !allRightSites[i].hasClass("alternativeNames") && !allRightSites[i].hasClass("openNames") && !allRightSites[i].hasClass("advertisementNames") && !allRightSites[i].hasClass("realNames") && !allRightSites[i].hasClass("freeNames")) {
      allAdvertisementSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allAdvertisement.length; i++) {
    allAdvertisement[i].toggleClass('advertisement');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchReal() {
  let allRealSites = selectAll(".realNames");

  for (let i=0; i<allRealSites.length; i++) {
    if (!allRightSites[i].hasClass("freedomNames") && !allRightSites[i].hasClass("decentralizedNames") && !allRightSites[i].hasClass("safeNames") && !allRightSites[i].hasClass("dataNames") && !allRightSites[i].hasClass("alternativeNames") && !allRightSites[i].hasClass("openNames") && !allRightSites[i].hasClass("advertisementNames") && !allRightSites[i].hasClass("realNames") && !allRightSites[i].hasClass("freeNames")) {
    allRealSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allReal.length; i++) {
    allReal[i].toggleClass('real');
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchFree() {
  let allFreeSites = selectAll(".freeNames");

  for (let i=0; i<allFreeSites.length; i++) {
    if (!allRightSites[i].hasClass("freedomNames") && !allRightSites[i].hasClass("decentralizedNames") && !allRightSites[i].hasClass("safeNames") && !allRightSites[i].hasClass("dataNames") && !allRightSites[i].hasClass("alternativeNames") && !allRightSites[i].hasClass("openNames") && !allRightSites[i].hasClass("advertisementNames") && !allRightSites[i].hasClass("realNames") && !allRightSites[i].hasClass("freeNames")) {
      allFreeSites[i].toggleClass('scale');
    }
  }

  for (let i=0; i<allFree.length; i++) {
    allFree[i].toggleClass('free');
  }
}
