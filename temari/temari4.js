personagemJogo();

function personagemJogo(){

    while(true){

        var escolha = prompt("1 - Se transforma em jinchuriki e ataca com toda sua força \n 2 - Faz um super roda moinho de areia e abre o céu para o sol aparecer");

        if(escolha == 2){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>VOCÊ ABRIU O CÉU, O SOL APARECEU E DERRETEU MOICANO E SUA GANGUE, VOCÊ VENCEU, PARABÉNS!</p>
            <a href="../index.html"><button class="play">JOGAR NOVAMENTE</button></a>
            `)
            break;
        }

        else if (escolha == 1){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>VOCÊ ESCOLHEU ERRADO! GAME OVER</p>
            <a href="../index.html"><button class="play">REINICIAR</button></a>
            `)
            break;

        }

        else{
            alert("ESCOLHA INVÁLIDA, TENTE NOVAMENTE!");
        }

    }
}