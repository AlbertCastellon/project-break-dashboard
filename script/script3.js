const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const minus = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()-_=+'
const arr = [mayus, minus, numbers, symbols]
const crearBtn = document.getElementById('crear-password')
const numCaracteres = document.getElementById('num-caracteres')
const resultadoPassword = document.getElementById('resultado-password')
crearBtn.addEventListener('click', () => {
    
    if(!numCaracteres.value){
        numCaracteres.value = 12
    }else if (!parseInt(numCaracteres.value)){
        alert('Introduce un número')
        return
    }
    let password = []
    let a 
    let b
    
    for(let i = 0; i < numCaracteres.value; i++){
        if(i == 1){
            a = 3
        }else if(i == 4){
            a = 1
        }else if(i == 7){
            a = 0
        }else if(i == 10){
            a = 2
        }else{
            a = Math.floor(Math.random() * 4)
        }
        b = Math.floor(Math.random() * arr[a].length)
        password.push(arr[a][b])
    }
    resultadoPassword.innerHTML = 'La nueva contraseña es : ' + password.join('')
})


