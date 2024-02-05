 const tec = [
    'JavaScript' ,'Java' ,'Ruby' ,
    'PHP' ,'Cobol' ,'C#','Python'
]
 
const lista = document.getElementById('lista')

  for(let i =0; i<tec.length;i+=1) {

     const novoElemento = document.createElement('li')

     novoElemento .innerText = tec [i]

     lista .appendChild(novoElemento)

     
    //console.log(novoElemento);

}
    
    


    
 //const turma = document.getElementById('turma')

//console.log(turma);//

//turma.innerText ='turma 4' 



// console.log(lista);



