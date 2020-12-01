function verificarDados (num){
    var formularioD = document.getElementById("form_dados");
    // VALIDATING NAME AND LAST NAME
    if (formularioD.name.value == ""){
        if (num == 1) {

            alert("Insira seu Nome no campo designado.");
        }
        return false;
    }
    if(formularioD.lastname.value == ""){
        if (num == 1) {
            alert("Insira seu Sobrenome no campo designado.");
        }
            return false;
    }
    // VALIDATING EMAIL 
    if (formularioD.email.value == ""){
        if (num == 1) {
            alert("Insira seu Email no campo designado.");
        }
            return false;
    }
    if (formularioD.email.value.match(/@/) == null){
        if (num == 1) {
            alert("Insira um Email válido.");
        }
            return false;
    }
    // VALIDATING RG / CPF / CEP
    if (formularioD.rg.value == ""){
        if (num == 1) {
            alert("Insira seu RG no campo designado.");
        }
            return false;
    }
    if (formularioD.cpf.value == ""){
        if (num == 1) {
            alert("Insira seu CPF no campo designado.");
        }
            return false;
    }
    if (formularioD.cep.value == ""){
        if (num == 1) {
            alert("Insira seu CEP no campo designado.");
        }
            return false;
    }
    // VALIDATING ADDRESS
    if (formularioD.address.value == ""){
        if (num == 1) {
            alert("Insira seu Endereço no campo designado.");
        }
        return false;
    }
    if (formularioD.state.value == ""){
        if (num == 1) {
            alert("Insira a sigla do seu Estado no campo designado.");
        }
        return false;
    }
    if (formularioD.house_number.value == ""){
        if (num == 1) {
            alert("Insira o número da sua casa.");
        }
        return false;
    }
    if (formularioD.bairro.value == ""){
        if (num == 1) {
            alert("Insira seu Bairro no campo designado.");
        }
        return false;
    }
    if (formularioD.city.value == ""){
        if (num == 1) {
            alert("Insira sua Cidade no campo designado.");
        }
        return false;
    }
    if (num == 1) {
        verifica();
        document.getElementById("pagamento").checked = true;
    }
    return true
}

function verificarPagamento(num) {
    var formularioP = document.getElementById("form_pagamento");
    if (document.getElementById("cartao").checked) {
        if (!document.getElementById("credito").checked && !document.getElementById("debito").checked) {
            if (num == 1) {
                alert("Escolha entre o cartão de crédito ou débito.");
            }
            return false;
        }
        if (formularioP.titular.value == "") {
            if (num == 1) {
                alert("Insira o Nome do Titular no campo designado.");
            }
            return false;
        }
        if(formularioP.n_cartao.value == "") {
            if (num == 1) {
                alert("Insira o Número do Cartão no campo designado.");
            }
            return false;
        }
        if (formularioP.validade.value == "") {
            if (num == 1) {
                alert("Insira a Data de Validade no campo designado.");
            }
            return false;
        }
        if (formularioP.cvv.value == "") {
            if (num == 1) {
                alert("Insira o Número do CVV no campo designado.");
            }
            return false;
        }
        if (formularioP.parcelas.value <1 || formularioP.parcelas.value >12){
            if (num == 1) {
                alert("Insira um número válido de parcelas.");
            }
            return false;
        }
    }
    if (num == 1) {
        verifica();
        document.getElementById("questionario").checked = true;
    }
    return true
}

function verificarQuestionario(num) {
    if (!document.getElementById("termos").checked) {
        if (num == 1) {
            alert("Aceite os termos de uso.");
        }  
        return false;
    }
    if (num == 1) {
        verifica();
        document.getElementById("questionario").checked = false;
    }
    return true
}

function verifica() {
    if (verificarDados(2) == true && verificarPagamento(2) == true && verificarQuestionario(2) == true && isNaN(parseFloat(document.querySelector("#precoTotal").textContent)) == false) {
        document.getElementById("botao_confirmar").disabled = false;
        document.getElementById("botao_confirmar").style.background = "#5CCFA9";
    } else {
        document.getElementById("botao_confirmar").disabled = true;
        document.getElementById("botao_confirmar").style.background = "#9FCFBF";
    }
}