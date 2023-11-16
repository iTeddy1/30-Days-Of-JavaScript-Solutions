let keyPress = document.querySelector('#keyboard')
let keyCode = document.getElementById('keycode')

document.addEventListener('keydown', key => {
    keyCode.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    let keyButton = key.key == ' ' ? 'Space' : key.key
    keyPress.innerHTML = `<h1>You pressed <span style = 'color: #04AA6D'>${keyButton}</span></h1>`
    keyCode.innerHTML = `<h2 style='color: #04AA6D'>${key.keyCode}</h2>`
})