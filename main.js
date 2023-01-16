const iconButtonTurn = document.querySelector('.turn')
const iconButtonClose = document.querySelector('.close')
const sofaImage = document.querySelector('.img')
const sofaGif = document.querySelector('.gif')

function toggleBtn() {
  iconButtonClose.classList.toggle('hide')
  iconButtonTurn.classList.toggle('hide')
  sofaImage.classList.toggle('hide')
  sofaGif.classList.toggle('hide')
}

iconButtonTurn.addEventListener('click', toggleBtn)
iconButtonClose.addEventListener('click', toggleBtn)
