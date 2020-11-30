//Receber dados de confirm.html

const dados = window.location.search;
const dadosP = new URLSearchParams(dados); //Armazena dados recebidos em um objeto

let writer = new Array; // Declara um vetor parar armazenar dados recebidos
const dadosP_size = dadosP.keys(); //define o tamanho do vetor

for(let chave of dadosP_size){
    writer.push(dadosP.get(chave)); //Preenche o vetor com dados obtidos
}

////////////////// DATA E HORA //////////////////

var data = new Date();

var meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

document.querySelector("#data_info").innerHTML = writer[5] + ", " + 
data.getDate() + " de " + meses[data.getMonth()] + " de " + data.getFullYear();

////////////////// ESCRITA //////////////////

document.querySelector("#nome_comp").innerHTML = "CLIENTE: " + writer[0];

document.querySelector("#rg").innerHTML = "PORTADOR DO RG: " + writer[1];

document.querySelector("#rua").innerHTML = "RUA: " + writer[2];

document.querySelector("#estado").innerHTML = "ESTADO: " + writer[3];

document.querySelector("#bairro").innerHTML = "BAIRRO: " + writer[4];

document.querySelector("#cidade").innerHTML = "CIDADE: " + writer[5];

switch(writer[6]){
    case "cartao de credito":
        document.querySelector("#pagamento").innerHTML = 
        "FORMA DE PAGAMENTO ESCOLHIDA:<br/>Cartão de Crédito";
        break;

    case "cartao de debito":
        document.querySelector("#pagamento").innerHTML = 
        "FORMA DE PAGAMENTO ESCOLHIDA:<br/>Cartão de Débito";
        break;

    case "boleto":
        document.querySelector("#pagamento").innerHTML = 
        "FORMA DE PAGAMENTO ESCOLHIDA:<br/>Boleto";
        break;
}

document.querySelector("#total").innerHTML = "VALOR A SER PAGO<br/> " + writer[7];