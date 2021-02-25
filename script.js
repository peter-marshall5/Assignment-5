const diameterInput = document.getElementById('d')
const calcButton = document.getElementById('calc')
const resultDisp = document.getElementById('result')

function round (n) {
  return Math.round(n * 1000) / 1000
}

function onclick () {
  const diameter = parseFloat(diameterInput.value)
  const circumference = round(Math.PI * diameter)
  const area = round(Math.PI * Math.pow(diameter / 2, 2))
  resultDisp.innerText = 'Circumference: ' + circumference + '\nArea: ' + area
}

calcButton.addEventListener('click', onclick)
