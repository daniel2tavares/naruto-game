personagemJogo();

function personagemJogo(){

    while(true){

        var escolha = prompt("1 - Manipula a areia e faz um grande casulo de proteção \n 2 - Manipula a natureza formando rochas para atacar os Gremlins");

        if(escolha == 1){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>Quando todos os gremlins o atacam, param em seu casulo de areia, e ele os lança para longe, deixando-os atordoados. Qual será o ataque final de Gaara.</p>
            <p>1 - Se transforma em jinchuriki e ataca com toda sua força</p>
            <p>2 - Faz um super roda moinho de areia e abre o céu para o sol aparecer</p>
            <a href="gaara4.html"><button class="play">ESCOLHER</button></a>
            `)
            break;
        }

        else if (escolha == 2){

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