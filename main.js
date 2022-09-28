let button = document.querySelector('.card__face__rating__submit');

button.addEventListener('click', function () {
  document.getElementById('card').classList.add('is-flipped');
  let results = document.getElementsByTagName('input');
  for (let i = 0; i < 5; i++) {
    if (results[i].checked) {
      document.getElementById('answer').innerHTML = `${i + 1}`
    }
  }
});

