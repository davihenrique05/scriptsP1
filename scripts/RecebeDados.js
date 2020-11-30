//Receber dados de confirm.html

const dados = window.location.search;
const dadosP = new URLSearchParams(dados);

let writer = "Valores <br/>";
const dadosP_size = dadosP.keys();

for(let chave of dadosP_size){
    writer +=  dadosP.get(chave) + "<br/>";
}

document.querySelector("#teste").innerHTML = writer;