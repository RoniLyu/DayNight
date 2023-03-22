const switcher = document.querySelector('button')

switcher.addEventListener('click', (event) => {
  if (event.target.innerText === 'Включить День') {
    event.target.innerText = 'Включить Ночь'
    document.querySelector('.window').style.backgroundColor = '#5cf'
    document.querySelector('.planet').style.backgroundColor = 'yellow'
  } else {
    event.target.innerText = 'Включить День'
    document.querySelector('.window').style.backgroundColor = 'blue'
    document.querySelector('.planet').style.backgroundColor = '#fff'
  }
})