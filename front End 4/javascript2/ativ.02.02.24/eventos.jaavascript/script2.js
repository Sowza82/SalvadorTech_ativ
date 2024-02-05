const p = document .querySelector('turma')
const button = document .getElementById('btt')

const callback = (event) =>{
    console .log(event.target);
event.target.innerText = "Mudei"
p.innerText = 'tec'
p.computedStyleMap.color ='red'
p.id ='tec'
p.className = 'class-tec'

}

button .addEventListener('click',callback)