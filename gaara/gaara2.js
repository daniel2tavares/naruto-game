personagemJogo();

function personagemJogo(){

    while(true){

        var escolha = prompt("1 - Mesmo assim Gaara arrisca usar sua manipulação de areia \n 2 - Gaara usa seu ninjutsu para atacar Moicano e sua guitarra");

        if(escolha == 2){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>Gaara faz um ataque ninjutsu e consegue destruir a guitarra de Moicano. Moicano chama toda a gangue para atacar Gaara ao mesmo tempo. O que ele deve fazer ?</p>
            <p>1 - Manipula a areia e faz um grande casulo de proteção</p>
            <p>2 - Manipula a natureza formando rochas para atacar os Gremlins</p>
            <a href="gaara3.html"><button class="play">ESCOLHER</button></a>
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