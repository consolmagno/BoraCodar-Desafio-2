const iconButtonTurn = document.querySelector('.turn')
const iconButtonClose = document.querySelector('.close')

iconButtonTurn.addEventListener('click', function () {
  iconButtonClose.classList.toggle('hide')
  iconButtonTurn.classList.toggle('hide')
})

iconButtonClose.addEventListener('click', function () {
  iconButtonClose.classList.toggle('hide')
  iconButtonTurn.classList.toggle('hide')
})
