personagemJogo();

function personagemJogo(){

    while(true){

        var escolha = prompt("1 -  Com pena do bichinho, ele o solta. \n 2 - Faz um jutso de selamento e o prende dentro d marionete.");

        if(escolha == 2){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>VOCÊ CONSEGUE PRENDE-LO PARA SEMPRE EM SUA MARIONETE, VOCÊ VENCEU, PARABÉNS!</p>
            <a href="../index.html"><button class="play">JOGAR NOVAMENTE</button></a>
            `)
            break;
        }

        else if (escolha == 1){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>NÃO ESTÁ CANSADO DE MORDIDA NO PESCOÇO?! ENTÃO TOMA MAIS UMA! GAME OVER</p>
            <a href="../index.html"><button class="play">REINICIAR</button></a>
            `)
            break;

        }

        else{
            alert("ESCOLHA INVÁLIDA, TENTE NOVAMENTE!");
        }

    }
}