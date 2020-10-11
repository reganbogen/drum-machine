const keymap = {
  65: "A",
  83: "S",
  68: "D",
  70: "F",
  71: "G",
  72: "H",
  74: "J",
  75: "K",
  76: "L"  
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(event) {
  //if(event.propertyName !== 'transform') return;
   this.classList.remove('keydown');
}

function clickHandler (key) {
  play(key);
}

function play(key) {
    var keyElement = document.querySelector(`.key[id="${key}"]`); 
    var audioElement = document.querySelector(`audio[data-key="${key}"]`);
    
    keyElement.classList.add('keydown');
    audioElement.currentTime = 0;
    audioElement.play();
}


window.onkeydown = (event) => {
  var key = keymap[event.keyCode];
  if (key) {
    play(key);
  }
}

audio.addEventListener('canplaythrough', isAppLoaded, false);
