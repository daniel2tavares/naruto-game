personagemJogo();

function personagemJogo(){

    while(true){

        var escolha = prompt("1 - Ela usa o fusajin no jutso para um ataque da natureza. \n 2 - Usa o kamaitachi no jutso e lança Teca por cima da névoa de areia, chegando a altura onde se vê o sol.");

        if(escolha == 2){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>QUANDO TECA VIU O SOL, DERRETEU NÃO SOBRANDO NEM O BATOM. VOCÊ VENCEU, PARABÉNS!</p>
            <a href="../index.html"><button class="play">JOGAR NOVAMENTE</button></a>
            `)
            break;
        }

        else if (escolha == 1){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>TECA DESTROI O QUE VEM PELA FRENTE E TE DÁ O BEIJO DA MORTE! GAME OVER</p>
            <a href="../index.html"><button class="play">REINICIAR</button></a>
            `)
            break;

        }

        else{
            alert("ESCOLHA INVÁLIDA, TENTE NOVAMENTE!");
        }

    }
}