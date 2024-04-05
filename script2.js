const linkBtn = document.getElementById('link-button');
const linkName = document.getElementById('name');
const link = document.getElementById('link');
const list = document.getElementById('link-list')


let links = {}
const render = () => {
    links = JSON.parse(localStorage.getItem('links')) || {}
    for(let enlace in links){
        const li = document.createElement('li')
        const a = document.createElement('a')
        const delBtn = document.createElement('button')
        delBtn.innerHTML = 'Eliminar'
        a.href = links.enlace
        a.target = 'blank'
        a.innerHTML = enlace
        li.append(a, delBtn)
        list.appendChild(li)

        delBtn.addEventListener('click', () => {
            delete links[enlace]
            localStorage.setItem('links', JSON.stringify(links))
            li.remove()
            
        })
    }
}

linkBtn.addEventListener('click', () => {
    if(!linkName.value || !link.value){
        return
    }
    const li = document.createElement('li')
    const a = document.createElement('a')
    const delBtn = document.createElement('button')
    delBtn.innerHTML = 'Eliminar' 
    a.href= link.value
    a.target = 'blank'
    a.innerHTML = linkName.value
    li.append(a, delBtn)
    list.appendChild(li)

    links[linkName.value] = link.value
    localStorage.setItem('links', JSON.stringify(links))

    delBtn.addEventListener('click', () => {
        delete links[linkName.value]
        localStorage.setItem('links', JSON.stringify(links))
        li.remove()

    })
    linkName.value = ''
    link.value = ''
})
render()

