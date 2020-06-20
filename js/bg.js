const UNSPLASH_URL = "https://source.unsplash.com"
const body = document.queryseletor("body");
function paintBg(){
    body.style.backgroundImage = `url(${UNPLASH_URL})`;
}

function init(){
  paintBg();
}

init();
