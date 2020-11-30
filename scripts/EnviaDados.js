// Armazenar e envair dados para outro html

document.querySelector("#botao_confirmar").addEventListener("click",()=>{

    // declaração de cada variável de input
    var i8 = 0; //Total a pagar

    const i1 = document.querySelector("#in1").value + " " + 
    document.querySelector("#in1_1").value; //Nome+Sobrenome
    const i2 = document.querySelector("#in2").value; //RG
    const i3 = document.querySelector("#in3").value + ", Nº" + 
    document.querySelector("#in3_1").value; //Endereço+, nº
        const estado_state = document.querySelector("#in4"); //Estado
        const estado_option = estado_state.children[estado_state.selectedIndex];//Opção selecionada de estado
        const i4 = estado_option.textContent;//Conteudo de texto de estado
    const i5 = document.querySelector("#in5").value; //Bairro
    const i6 = document.querySelector("#in6").value; //Cidade
    
    var i7 = document.querySelector('input[name=accordion_pagamento]:checked').id //Forma de pagamento
        if(i7 == "cartao"){
            i7 = document.querySelector('input[name=accordion_pagamento]:checked').id +
             " de " + document.querySelector('input[name=credito_debito]:checked').id;
        }    
    
        //Único caso de haver parcelas é no cartão de crédito
        if(i7 == "cartao de credito"){
            var parc = document.querySelector('input[name=parcelas]').value
            parc = parseFloat(parc);
            var tot = document.querySelector("#precoTotal").textContent;
            tot = parseFloat(tot);

            i8 = `${parc}x de $${(tot/parc).toFixed(2)}`;
        }
        else{
            i8 = "$"+document.querySelector("#precoTotal").textContent;
        }


    // Passar variáveis por URL
    window.location.href = "confirm.html?i1=" + i1
    + "&in2=" + i2
    + "&in3=" + i3
    + "&in4=" + i4
    + "&in5=" + i5
    + "&in6=" + i6
    + "&in7=" + i7
    + "&in8=" + i8;
})