function verificarDados (num){
    var formularioD = document.getElementById("form_dados");
    // VALIDATING NAME AND LAST NAME
    if (formularioD.name.value == ""){
        alert("Insira seu Nome no campo designado");
        return false;
    }
    if(formularioD.lastname.value == ""){
        alert("Insira seu Sobrenome no campo designado");
        return false;
    }
    // VALIDATING EMAIL 
    if (formularioD.email.value == ""){
        alert("Insira seu Email no campo designado");
        return false;
    }
    if (formularioD.email.value.match(/@/) == null){
        alert("Insira um Email válido");
        return false;
    }
    // VALIDATING RG / CPF / CEP
    if (formularioD.rg.value == ""){
        alert("Insira seu RG no campo designado");
        return false;
    }
    if (formularioD.cpf.value == ""){
        alert("Insira seu CPF no campo designado");
        return false;
    }
    if (formularioD.cep.value == ""){
        alert("Insira seu CEP no campo designado");
        return false;
    }
    // VALIDATING ADDRESS
    if (formularioD.address.value == ""){
        alert("Insira seu Endereço no campo designado");
        return false;
    }
    if (formularioD.state.value == ""){
        alert("Insira a sigla do seu Estado no campo designado");
        return false;
    }
    if (formularioD.house_number.value == ""){
        alert("Insira a sigla do seu Estado no campo designado");
        return false;
    }
    if (formularioD.bairro.value == ""){
        alert("Insira seu Bairro no campo designado");
        return false;
    }
    if (formularioD.city.value == ""){
        alert("Insira sua Cidade no campo designado");
        return false;
    }
    if (num == 1) {
        alert("Tudo certo!");
    }
    if (num == 1) {
        alert("Tudo certo!");
    }
    return true
}

function verificarPagamento(num) {
    var formularioP = document.getElementById("form_pagamento");
        if (!document.getElementsById("credito").checked && !document.getElementsById("debito").checked) {
            alert("Escolha entre o credito e o débito!");
            return false;
        }
        if (formularioP.titular.value == "") {
            alert("Insira o Nome do Titular no campo designado");
            return false;
        }
        if(formularioP.n_cartao.value == "") {
            alert("Insira o Número do Cartão no campo designado");
            return false;
        }
        if (formularioP.validade.value == "") {
            alert("Insira a Data de Validade no campo designado");
            return false;
        }
        if (formularioP.cvv.value == "") {
            alert("Insira o Número do CVV no campo designado");
            return false;
        }
        if (document.getElementById("credito").checked) {
            if (formularioP.parcelas.value == "") {
                alert("Insira a quantidade de parcelas no campo designado");
                return false;
            }
        }
    }
    if (num == 1) {
        alert("Tudo certo!");
    }
    return true
}

function verificarQuestionario(num) {
    if (!document.getElementById("termos").checked) {
        alert("Aceite os termos de uso!");
            return false;
    }
    if (num == 1) {
        alert("Tudo certo!");
    }
    return true
}