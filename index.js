console.log('funguju!');

const userSetTime = Number(prompt('Zadej pocet sekund:') * 1000);
const audio = document.querySelector('audio');
const btnElm = document.querySelector('button');

const ring = () => {
  const alarmElm = document.querySelector('.alarm');
  alarmElm.classList.add('alarm--ring')
  audio.play();
}

const deduction = setTimeout(ring, userSetTime);


btnElm.addEventListener('click', () => {
  clearTimeout(deduction);
});

