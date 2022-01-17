let freedomKeywords;
let freedomDiv;
let freedomTitle;
let freedomCollapsible;

let decentralizedKeywords;
let decentralizedDiv;
let decentralizedTitle;
let decentralizedCollapsible;

let rightKeywords;
let rightDiv;
let rightTitle;
let rightCollapsible;

let safeKeywords;
let safeDiv;
let safeTitle;
let safeCollapsible;

let dataKeywords;
let dataDiv;
let dataTitle;
let dataCollapsible;


let alternativeKeywords;
let alternativeDiv;
let alternativeTitle;
let alternativeCollapsible;

let openKeywords;
let openDiv;
let openTitle;
let openCollapsible;

let advertisementKeywords;
let advertisementDiv;
let advertisementTitle;
let advertisementCollapsible;

let realKeywords;
let realDiv;
let realTitle;
let realCollapsible;

let freeKeywords;
let freeDiv;
let freeTitle;
let freeCollapsible;

let underlinable = false;

function preload() {
  freedomKeywords = loadJSON("freedom.json");
  decentralizedKeywords = loadJSON("decentralized.json");
  rightKeywords = loadJSON("right.json");
  safeKeywords = loadJSON("safe.json");
  dataKeywords = loadJSON("data.json");
  alternativeKeywords = loadJSON("alternative.json");
  openKeywords = loadJSON("open.json");
  advertisementKeywords = loadJSON("advertisement.json");
  realKeywords = loadJSON("real.json");
  freeKeywords = loadJSON("free.json");
}

function setup() {
  noCanvas();

  freedomDiv = select("#freedomKeywords");
  freedomTitle = select("#freedomTitle");
  freedomCollapsible = select("#freedomCollapsible");
  freedomCollapsible.mousePressed(toggleFreedom);
  freedomCreate();

  decentralizedDiv = select("#decentralizedKeywords");
  decentralizedTitle = select("#decentralizedTitle");
  decentralizedCollapsible = select("#decentralizedCollapsible");
  decentralizedCollapsible.mousePressed(toggleDecentralized);
  decentralizedCreate();

  rightDiv = select("#rightKeywords");
  rightTitle = select("#rightTitle");
  rightCollapsible = select("#rightCollapsible");
  rightCollapsible.mousePressed(toggleRight);
  rightCreate();

  safeDiv = select("#safeKeywords");
  safeTitle = select("#safeTitle");
  safeCollapsible = select("#safeCollapsible");
  safeCollapsible.mousePressed(toggleSafe);
  safeCreate();

  dataDiv = select("#dataKeywords");
  dataTitle = select("#dataTitle");
  dataCollapsible = select("#dataCollapsible");
  dataCollapsible.mousePressed(toggleData);
  dataCreate();

  alternativeDiv = select("#alternativeKeywords");
  alternativeTitle = select("#alternativeTitle");
  alternativeCollapsible = select("#alternativeCollapsible");
  alternativeCollapsible.mousePressed(toggleAlternative);
  alternativeCreate();

  openDiv = select("#openKeywords");
  openTitle = select("#openTitle");
  openCollapsible = select("#openCollapsible");
  openCollapsible.mousePressed(toggleOpen);
  openCreate();

  advertisementDiv = select("#advertisementKeywords");
  advertisementTitle = select("#advertisementTitle");
  advertisementCollapsible = select("#advertisementCollapsible");
  advertisementCollapsible.mousePressed(toggleAdvertisement);
  advertisementCreate();

  realDiv = select("#realKeywords");
  realTitle = select("#realTitle");
  realCollapsible = select("#realCollapsible");
  realCollapsible.mousePressed(toggleReal);
  realCreate();

  freeDiv = select("#freeKeywords");
  freeTitle = select("#freeTitle");
  freeCollapsible = select("#freeCollapsible");
  freeCollapsible.mousePressed(toggleFree);
  freeCreate();
}

function freedomCreate() {
  for (let i = 0; i < 36; i++) {
    let wholeKeyword = freedomKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let counter;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(freedomDiv);
      keyword.addClass("word");
      keyword.addClass(freedomKeywords[i].Keyword);
      thisKeywords.push(keyword);
      keyword.mouseOver(underline);
      keyword.mouseOut(unUnderline);

      let websites = createDiv("Keyword used by:<br>" + freedomKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }

    function underline() {
      for (k = 0; k < thisKeywords.length; k++) {
        thisKeywords[k].toggleClass("underline");
      }
    }

    function unUnderline() {
      for (k = 0; k < thisKeywords.length; k++) {
        thisKeywords[k].toggleClass("underline");
      }
    }

  }
}



function toggleFreedom() {
  freedomTitle.toggleClass("freedomColor");
}

//---------------------------------------------------------------------------------------------------

function decentralizedCreate() {
  for (let i = 0; i < 19; i++) {
    let wholeKeyword = decentralizedKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(decentralizedDiv);
      keyword.addClass("word");
      keyword.addClass(decentralizedKeywords[i].Keyword);
      thisKeywords.push(keyword);
      keyword.mouseOver(underline);
      keyword.mouseOut(unUnderline);

      let websites = createDiv("Keyword used by:<br>" + decentralizedKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }

    function underline() {
      for (k = 0; k < thisKeywords.length; k++) {
        thisKeywords[k].toggleClass("underline");
      }
    }

    function unUnderline() {
      for (k = 0; k < thisKeywords.length; k++) {
        thisKeywords[k].toggleClass("underline");
      }
    }

  }
}

function toggleDecentralized() {
  decentralizedTitle.toggleClass("decentralizedColor");
}

//---------------------------------------------------------------------------------------------
function rightCreate() {
  for (let i = 0; i < 18; i++) {
    let wholeKeyword = rightKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(rightDiv);
      keyword.addClass("word");
      keyword.addClass(rightKeywords[i].Keyword);
      thisKeywords.push(keyword);
      keyword.mouseOver(underline);
      keyword.mouseOut(unUnderline);

      let websites = createDiv("Keyword used by:<br>" + rightKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }

    function underline() {
      for (k = 0; k < thisKeywords.length; k++) {
        thisKeywords[k].toggleClass("underline");
      }
    }

    function unUnderline() {
      for (k = 0; k < thisKeywords.length; k++) {
        thisKeywords[k].toggleClass("underline");
      }
    }

  }
}

function toggleRight() {
  rightTitle.toggleClass("rightColor");
}

//---------------------------------------------------------------------------------------------
function safeCreate() {
  for (let i = 0; i < 23; i++) {
    let wholeKeyword = safeKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(safeDiv);
      keyword.addClass("word");

      let websites = createDiv("Keyword used by:<br>" + safeKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }

    function underline() {
      for (k = 0; k < thisKeywords.length; k++) {
        thisKeywords[k].toggleClass("underline");
      }
    }

    function unUnderline() {
      for (k = 0; k < thisKeywords.length; k++) {
        thisKeywords[k].toggleClass("underline");
      }
    }

  }
}


function toggleSafe() {
  safeTitle.toggleClass("safeColor");
}
//---------------------------------------------------------------------------------------------
function dataCreate() {
  for (let i = 0; i < 21; i++) {
    let wholeKeyword = dataKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(dataDiv);
      keyword.addClass("word");

      let websites = createDiv("Keyword used by:<br>" + dataKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }
  }
}

function toggleData() {
  dataTitle.toggleClass("dataColor");
}

//---------------------------------------------------------------------------------------------
function alternativeCreate() {
  for (let i = 0; i < 13; i++) {
    let wholeKeyword = alternativeKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(alternativeDiv);
      keyword.addClass("word");

      let websites = createDiv("Keyword used by:<br>" + alternativeKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }
  }
}

function toggleAlternative() {
  alternativeTitle.toggleClass("alternativeColor");
}

//---------------------------------------------------------------------------------------------
function openCreate() {
  for (let i = 0; i < 5; i++) {
    let wholeKeyword = openKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(openDiv);
      keyword.addClass("word");

      let websites = createDiv("Keyword used by:<br>" + openKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }
  }
}

function toggleOpen() {
  openTitle.toggleClass("openColor");
}

//---------------------------------------------------------------------------------------------
function advertisementCreate() {
  for (let i = 0; i < 2; i++) {
    let wholeKeyword = advertisementKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(advertisementDiv);
      keyword.addClass("word");

      let websites = createDiv("Keyword used by:<br>" + advertisementKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }
  }
}

function toggleAdvertisement() {
  advertisementTitle.toggleClass("advertisementColor");
}

//---------------------------------------------------------------------------------------------
function realCreate() {
  for (let i = 0; i < 8; i++) {
    let wholeKeyword = realKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(realDiv);
      keyword.addClass("word");

      let websites = createDiv("Keyword used by:<br>" + realKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }
  }
}

function toggleReal() {
  realTitle.toggleClass("realColor");
}

//---------------------------------------------------------------------------------------------
function freeCreate() {
  for (let i = 0; i < 5; i++) {
    let wholeKeyword = freeKeywords[i].Keyword;
    let splitKeyword = split(wholeKeyword, " ");
    let keyword;
    let thisKeywords = [];
    for (let j = 0; j < splitKeyword.length; j++) {
      keyword = createDiv(splitKeyword[j]);
      keyword.parent(freeDiv);
      keyword.addClass("word");

      let websites = createDiv("Keyword used by:<br>" + freeKeywords[i].Websites);
      websites.parent(keyword);
      websites.addClass("dropdown");
    }
  }
}

function toggleFree() {
  freeTitle.toggleClass("freeColor");
}

//---------------------------------------------------------------------------------------------


function draw() {}
