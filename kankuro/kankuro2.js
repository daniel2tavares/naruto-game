personagemJogo();

function personagemJogo(){

    while(true){

        var escolha = prompt("1 - Vai até Mogwai para pega-lo achando que é apenas um bichinho indefeso. \n 2 - Faz com que uma de suas marionetes veja o que é.");

        if(escolha == 2){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>Mogwai voa na jugular achando que era humano. E agora, o que Kankuro deve fazer?</p>
            <p>1 - Usa sua marionete para prender Mogwai.</p>
            <p>2 - Tenta acalmar o monstrinho.</p>
            <a href="kankuro3.html"><button class="play">ESCOLHER</button></a>
            `)
            break;
        }

        else if (escolha == 1){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>TOMA AQUELA FINALIZAÇÃO NO PESCOÇO! GAME OVER</p>
            <a href="../index.html"><button class="play">REINICIAR</button></a>
            `)
            break;

        }

        else{
            alert("ESCOLHA INVÁLIDA, TENTE NOVAMENTE!");
        }

    }
}