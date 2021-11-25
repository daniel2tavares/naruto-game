personagemJogo();

function personagemJogo(){

    while(true){

        var escolha = prompt("1 - Usa sua marionete para prender Mogwai. \n Tenta acalmar o monstrinho.");

        if(escolha == 1){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>Com Mogwai preso dentro da marionete, Kankuro escuta sons fofos de dentro, o que ele faz?</p>
            <p>1 - Com pena do bichinho, ele o solta.</p>
            <p>2 - Faz um jutso de selamento e o prende dentro d marionete.</p>
            <a href="kankuro4.html"><button class="play">ESCOLHER</button></a>
            `)
            break;
        }

        else if (escolha == 2){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>ELE NÃO É VAMPIRO, MAS ADORA UMA JOGULAR! GAME OVER</p>
            <a href="../index.html"><button class="play">REINICIAR</button></a>
            `)
            break;

        }

        else{
            alert("ESCOLHA INVÁLIDA, TENTE NOVAMENTE!");
        }

    }
}