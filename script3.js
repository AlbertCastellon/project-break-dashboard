const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minus = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()-_=+'
const arr = [mayus, minus, numbers, symbols]
const crearBtn = document.getElementById('crear-password')
const numCaracteres = document.getElementById('num-caracteres')
const resultadoPassword = document.getElementById('resultado-password')
crearBtn.addEventListener('click', () => {
    let password = []
    let a 
    let b
    for(let i = 0; i < numCaracteres.value; i++){
        a = Math.floor(Math.random() * 4)
        if(a === 0 || a === 1){
            b = Math.floor(Math.random() * 26)
        }else if (a === 2){
            b = Math.floor(Math.random() * 10)
        }else{
            b = Math.floor(Math.random() * 14)
        }
        password.push(arr[a][b])
    }
    resultadoPassword.innerHTML = 'La nueva contraseña es : ' + password.join('')
})


