function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    if (isNaN(quantidade) || quantidade <= 0){
        alert('Favor inserir quantidade valida.')
    }
    else{
        if( tipoDeIngresso.value == 'pista'){
            compraPista(quantidade);
        }
        else if ( tipoDeIngresso.value == 'superior'){
            compraSuperior(quantidade);
        }

        else {
            comprarInferior(quantidade);
        }
    }
}

function compraPista(quantidade){
    let pistaDisponivel = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > pistaDisponivel){
        alert('Não foi possivel efetuar a compra.');
    } else{
        pistaDisponivel = pistaDisponivel - quantidade;
        document.getElementById('qtd-pista').textContent = pistaDisponivel
        alert('Compra efetuada com sucesso!');
      
    }
}

function compraSuperior(quantidade){
    let superiorDisponivel = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > superiorDisponivel){
        alert('Não foi possivel efetuar a compra.');
    } else{
        superiorDisponivel = superiorDisponivel - quantidade;
        document.getElementById('qtd-superior').textContent = superiorDisponivel
        alert('Compra efetuada com sucesso!');
      
    }
}

function comprarInferior(quantidade){
    let inferiorDisponivel = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > inferiorDisponivel){
        alert('Não foi possivel efetuar a compra.');
    } else{
        inferiorDisponivel = inferiorDisponivel - quantidade;
        document.getElementById('qtd-inferior').textContent = inferiorDisponivel
        alert('Compra efetuada com sucesso!');
      
    }
}
// function quantidadeDisponivel(tipoDeIngresso,quantidade){
//     let pistaDisponivel = document.getElementById('qtd-pista');
//     let superiorDisponivel = document.getElementById('qtd-superior');
//     let inferiorDisponivel = document.getElementById('qtd-inferior');
   
//     if (tipoDeIngresso == 'Pista'){ 
//         if(quantidade > pistaDisponivel.textContent){
//             alert('Não foi possivel efetuar a compra.')
//         }
//         else{
//             alert('Compra efetuada com sucesso!')
//             pistaDisponivel.innerHTML = pistaDisponivel.textContent - quantidade;
//         }
//     }
//     else if (tipoDeIngresso == 'Cadeira inferior'){
//         if(quantidade > inferiorDisponivel.textContent){
//             alert('Não foi possivel efetuar a compra.')
//         }
//         else{
//             alert('Compra efetuada com sucesso!')
//             inferiorDisponivel.innerHTML = inferiorDisponivel.textContent - quantidade;
//         }
//     }
//     else if (tipoDeIngresso == 'Cadeira superior'){
//         if(quantidade > inferiorDisponivel.textContent){
//             alert('Não foi possivel efetuar a compra.')
//         }
//         else{
//             alert('Compra efetuada com sucesso!')
//             superiorDisponivel.innerHTML = superiorDisponivel.textContent - quantidade;
//         }
//     }
