const UNSPLASH_URL = "https://source.unsplash.com"
const body = document.querySeletor("body");
function paintBg(){
    body.style.backgroundImage = `url(${UNPLASH_URL})`;
}

function init(){
  paintBg();
}

init();
