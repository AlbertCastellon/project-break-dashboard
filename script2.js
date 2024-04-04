const linkBtn = document.getElementById('link-button');
const linkName = document.getElementById('name');
const link = document.getElementById('link');
const list = document.getElementById('link-list')

let obj = {}
const render = () => {
    obj = JSON.parse(localStorage.getItem('links')) || {}
    for(let enlace in obj){
        const li = document.createElement('li')
        const a = document.createElement('a')
        const delBtn = document.createElement('button')
        delBtn.innerHTML = 'Eliminar'
        a.href= obj.enlace
        a.innerHTML = enlace + ': ' + obj[enlace]
        li.append(a, delBtn)
        list.appendChild(li)
    }
}

linkBtn.addEventListener('click', () => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    const delBtn = document.createElement('button')
    delBtn.innerHTML = 'Eliminar' 
    a.href= link.value
    a.innerHTML = linkName.value + ': ' + link.value
    li.append(a, delBtn)
    list.appendChild(li)

    obj[linkName.value] = link.value
    localStorage.setItem('links', JSON.stringify(obj))

    linkName.value = ''
    link.value = ''
})
render()

const botonEliminar = document.querySelectorAll('button')
console.log(botonEliminar)