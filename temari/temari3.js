personagemJogo();

function personagemJogo(){

    while(true){

        var escolha = prompt("1 - Usa seu leque como escudo para depois revidar com um golpe. \n 2 - Tenta a técnica foice da doninha.");

        if(escolha == 1){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>Seu leque de ferro a protege do ataque e já dá uma opção de contra golpe. Qual deve ser o ataque letal de Temari?</p>
            <p>1 - Ela usa o fusajin no jutso para um ataque da natureza.</p>
            <p>2 - Usa o kamaitachi no jutso e lança Teca por cima da névoa de areia, chegando a altura onde se vê o sol.</p>
            <a href="temari4.html"><button class="play">ESCOLHER</button></a>
            `)
            break;
        }

        else if (escolha == 2){

            document.getElementById("resposta-jogo").innerHTML = (`
            <p>COM VÁRIAS BEIJOCAS, TECA ATORDOA SUA DONINHA! GAME OVER</p>
            <a href="../index.html"><button class="play">REINICIAR</button></a>
            `)
            break;

        }

        else{
            alert("ESCOLHA INVÁLIDA, TENTE NOVAMENTE!");
        }

    }
}