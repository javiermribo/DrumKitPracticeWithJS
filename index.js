const playSound = e => {
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  const key = document.querySelector(`div[data-key=${e.key}]`);
  if (!audio) return; //detiene la fn si no hay ningún audio asociado a la tecla
  audio.currentTime = 0; //reinicia el audio
  audio.play();
  key.classList.add("class", "playing");
}

const removeTransition = e => {
  if (e.propertyName !== 'transform') return; //Ignora todo lo que no es transform
  e.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //Añadir el evento transitioned a toda tecla que tenga la clase key
window.addEventListener('keydown', playSound);