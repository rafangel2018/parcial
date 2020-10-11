const formulario_regUI = document.querySelector('#formulario_registrar');
const listaMateriasUI = document.getElementById('listaMaterias');
let materia=[];

function CrearJSON(){
        /* Sacar los Valores de HTML accediendo al DOM. */
    var nombre = document.getElementById("materia").value
    var codigo = document.getElementById("Codigo").value;
    var quiz = document.getElementById("Quiz").value;
    var pQuiz = document.getElementById("PQuiz").value;
    var taller = document.getElementById("Taller").value;
    var pTaller = document.getElementById("Ptaller").value;
    var teorico = document.getElementById("Teorico").value;
    var pTeorico = document.getElementById("Pteorico").value;
    var practico = document.getElementById("Practico").value;
    var pPractico = document.getElementById("Ppractico").value;
    var nota = CalcularCorte1(quiz,pQuiz, taller,pTaller, teorico,pTeorico, practico,pPractico);

    var quiz2 = document.getElementById("Quiz2").value;
    var pQuiz2 = document.getElementById("PQuiz2").value;
    var taller2 = document.getElementById("Taller2").value;
    var pTaller2 = document.getElementById("Ptaller2").value;
    var teorico2= document.getElementById("Teorico2").value;
    var pTeorico2 = document.getElementById("Pteorico2").value;
    var practico2 = document.getElementById("Practico2").value;
    var pPractico2 = document.getElementById("Ppractico2").value;
    var nota2 = CalcularCorte2(quiz2,pQuiz2, taller2,pTaller2, teorico2,pTeorico2, practico2,pPractico2);

    var quiz3 = document.getElementById("Quiz3").value;
    var pQuiz3 = document.getElementById("PQuiz3").value;
    var taller3 = document.getElementById("Taller3").value;
    var pTaller3 = document.getElementById("Ptaller3").value;
    var teorico3 = document.getElementById("Teorico3").value;
    var pTeorico3 = document.getElementById("Pteorico3").value;
    var practico3 = document.getElementById("Practico3").value;
    var pPractico3 = document.getElementById("Ppractico3").value;
    var nota3 = CalcularCorte3(quiz3,pQuiz3, taller3,pTaller3, teorico3,pTeorico3, practico3,pPractico3);
    var promedio = CalcularPromedio(nota,nota2,nota3);
   // const calcularN  = document.getElementById('listaMaterias');

    var nota = {
        "materia":nombre,
        "Codigo":codigo,
        "Nota1": nota,
        "Nota2":nota2,
        "Nota3":nota3,
        "Promedio":promedio,

    }
    return nota;
}
function CalcularNota1(nota){
    let notas =[];
    var corte = CrearJSON();
}

function CalcularCorte1(Quiz,PQUiz, Taller,PTaller, Teorico,PTeorico, Practico, PPractico){
    var nota =0;
    var porcentajes=0;
   porcentajes = (parseInt(PQUiz) + parseInt(PTaller) + parseInt(PTeorico) + parseInt(PPractico));
    if(porcentajes ===100){
        PQUiz =PQUiz/100;
        PTaller= PTaller/100;
        PTeorico= PTeorico/100; 
        PPractico= PPractico/100;
        nota = ((Quiz*PQUiz)+(Taller*PTaller)+(Teorico*PTeorico)+(Practico*PPractico));
        document.getElementById("Nota1").value = nota;
      
        return nota;
    
    }else{
        alert('Por favor verifique porcentajes corte 1');
    }


}

function CalcularNota2(nota){
    let notas2 =[];
    var corte2 = CrearJSON();
}

function CalcularCorte2(Quiz2,PQUiz2, Taller2,PTaller2, Teorico2,PTeorico2, Practico2, PPractico2){
    var nota2 =0;
    var porcentajes2=0;
   porcentajes2 = (parseInt(PQUiz2) + parseInt(PTaller2) + parseInt(PTeorico2) + parseInt(PPractico2));
    if(porcentajes2 ===100){
        PQUiz2 =PQUiz2/100;
        PTaller2= PTaller2/100;
        PTeorico2= PTeorico2/100; 
        PPractico2= PPractico2/100;
        nota2 = ((Quiz2*PQUiz2)+(Taller2*PTaller2)+(Teorico2*PTeorico2)+(Practico2*PPractico2));
        document.getElementById("Nota2").value = nota2;
      
        return nota2;
    
    }else{
        alert('Por favor verifique porcentajes corte 2');
    }


}

function CalcularNota3(nota){
    let notas3 =[];
    var corte3 = CrearJSON();
}
/*sfdgfdgfdg*/
function CalcularCorte3(Quiz3,PQUiz3, Taller3,PTaller3, Teorico3,PTeorico3, Practico3, PPractico3){
    var nota3 =0;
    var porcentajes3=0;
   porcentajes3 = (parseInt(PQUiz3) + parseInt(PTaller3) + parseInt(PTeorico3) + parseInt(PPractico3));
    if(porcentajes3 ===100){
        PQUiz3 =PQUiz3/100;
        PTaller3= PTaller3/100;
        PTeorico3= PTeorico3/100; 
        PPractico3= PPractico3/100;
        nota3 = ((Quiz3*PQUiz3)+(Taller3*PTaller3)+(Teorico3*PTeorico3)+(Practico3*PPractico3));
        document.getElementById("Nota3").value = nota3;
      
        return nota3;
    
    }else{
        alert('Por favor verifique porcentajes corte 3');
    }


}
function CalcularPromedio(nota,nota2,nota3){
    var promedio =0;
    promedio = ((nota*0.3)+(nota2*0.3)+(nota3*0.4));
    document.getElementById("Promedio").value = promedio;
    return promedio;
}

function guardarCorte(nota) {
    let materias = [];
    var nota = CrearJSON();

    if (localStorage.getItem('BDLocal') != null) {
        materias = JSON.parse(localStorage.getItem('BDLocal'));
    }
    materias.push(nota);/* Addicionar la nueva persona al array de Personas*/
    localStorage.setItem('BDLocal', JSON.stringify(materias));
   

}



function consultarMaterias() {
    var materias = []; 
    if (localStorage.getItem('BDLocal') != null) {
        materias = JSON.parse(localStorage.getItem('BDLocal'));
    }
    materias.forEach(item => {
        document.getElementById("tbodypulsacion").innerHTML+=
        '<tr>' +
            '<td >' + item.materia + '</td>' +
            '<td align="center" style="dislay: none;">' + item.Codigo+ '</td>' +
            '<td align="center" style="dislay: none;">' + item.Nota1+ '</td>' +
            '<td align="center" style="dislay: none;">' + item.Nota2+ '</td>' +
            '<td align="center" style="dislay: none;">' + item.Nota3+ '</td>' + '</tr>';
    });
   }

/*



























const EliminarDB=(materia)=>{
   let indexArray
   arrayMateria.forEach((element, index)=>{
    if(element.materia === materia){
        indexArray = index;
    }   
   });
   arrayMateria.splice(indexArray,1);
   GuardarDB();

}

const EditarDB=(materia)=>{
 let indexAarray = arrayMateria.findIndex((element)=>
     element.materia===materia
 );
 arrayMateria[indexAarray].codigo=5;
 GuardarDB();
}
*/

/*
const PintarDB=()=>{
    listaMateriasUI.innerHTML='';
    materias=JSON.parse(localStorage.getItem('BDLocal'));
    if(materias===null){
        materias=[];
    }else{
        materias.forEach(element => {
          
                listaMateriasUI.innerHTML += `<div class="alert alert-success" role="alert">
                <span class="material-icons float-left mr-3">accessibility
                </span> <b>Materia: </b>${element.materia} - <b>Codigo: </b> ${element.codigo} </b>- <b>Nota1</b> ${element.Nota1s}<span class="float-right"><span class="material-icons">done</span><span class="material-icons">delete_forever</span></span></div>`
          
            });
    }
}

*/
/*
formulario_regUI.addEventListener('submit', (e) => {
e.preventDefault();
let materiaUI= document.querySelector('#materia','#codigo').value;
CrearItemMateria(materiaUI);
GuardarDB();
formulario_regUI.reset();
});

document.addEventListener('DOMContentLoaded', PintarDB);
listaMateriasUI.addEventListener('click', (e)=>{
e.preventDefault();

//console.log(e.target.innerHTML);
//console.log(e.path[2].childNodes[3].innerHTML);



if(e.target.innerHTML==='done' || e.target.innerHTML==='delete_forever'){
 let texto= e.path[2].childNodes[3].innerHTML;
  if(e.target.innerHTML==='done'){
     EditarDB(texto);
  }

  if(e.target.innerHTML==='delete_forever'){
  EliminarDB(texto);
  }
}
});*/