const container = document.querySelector('.container')

const createRipple = (e) => {
    let ripple = document.createElement('span')
    let x = e.clientX
    let y = e.clientY

    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'

    container.appendChild(ripple)

    setTimeout(() => {
        ripple.remove()
    }, 5000)

    console.log(x, y)
}

container.addEventListener('click', createRipple)