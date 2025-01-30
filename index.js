
const screen = document.querySelector(".screen")

function numeros(value){
    if(screen.textContent == '0'){
        screen.textContent = value
    } else {
        screen.textContent += value
    }
}

function clear(){
    screen.textContent = '0'
}

function operator(){
    try {
        screen.textContent = eval(screen.textContent.replace('x','*'));
    } catch(error) {
        screen.textContent = 'error'
    }
}
document.querySelectorAll('.button').forEach( button => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if(value == 'C'){
            clear()
        } else if(value == '='){
            operator()
        } else {
            numeros(value)
        }
    })
})