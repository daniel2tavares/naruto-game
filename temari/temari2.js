personagemJogo();

function personagemJogo(){

    while(true){

        var escolha = prompt("1 - Usa seu leque para joga-la longe. \n 2 - Pensa bem na estratégia de ataque, pois não sabe o que aquele perfume pode fazer.");

        if(escolha == 1){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>Teca é jogada para longe, mas volta com mais raiva ainda. Apaixonou no leque de Temari e vai tentar pega-lo pra si. O que Temari vai fazer?</p>
            <p>1 - Usa seu leque como escudo para depois revidar com um golpe.</p>
            <p>2 - Tenta a técnica foice da doninha.</p>
            <a href="temari3.html"><button class="play">ESCOLHER</button></a>
            `)
            break;
        }

        else if (escolha == 2){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>PENSOU MUITO! GAME OVER</p>
            <a href="../index.html"><button class="play">REINICIAR</button></a>
            `)
            break;

        }

        else{
            alert("ESCOLHA INVÁLIDA, TENTE NOVAMENTE!");
        }

    }
}