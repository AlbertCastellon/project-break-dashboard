const linkBtn = document.getElementById('link-button');
const linkName = document.getElementById('name');
const link = document.getElementById('link');
const list = document.getElementById('link-list')
let entrada

let links = {}
const render = () => {
    links = JSON.parse(localStorage.getItem('links')) || {}
    for(let enlace in links){
        const li = document.createElement('li')
        const a = document.createElement('a')
        const delBtn = document.createElement('button')
        delBtn.innerHTML = 'Eliminar'
        a.href = links[enlace]
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
    }else if (!URL.canParse(link.value)){
        alert('El link introducido no es valido')
        linkName.value = ''
        link.value = ''
        return
    }
    if(linkName.value.length > 20) {
        linkName.value = linkName.value.slice(17) + '...';
    }
    entrada = linkName.value
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
        delete links[a.innerHTML]
        localStorage.setItem('links', JSON.stringify(links))
        li.remove()

    })
    linkName.value = ''
    link.value = ''
})
render()

/*function isUrlValid(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}*/