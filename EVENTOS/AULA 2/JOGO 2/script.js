  const botao1 = document.querySelector('#botao1');
        const botao2 = document.querySelector('#botao2');
        const texto = document.querySelector('#texto');

        let pontos = 0;
        let ganho = 1;
        let custo = 10;

        function atualizar() {

            texto.textContent =
            'Pontos: ' + pontos +
            ' | Ganho: ' + ganho +
            ' | Próximo custo: ' + custo;
        }

        function adicionar() {

            pontos += ganho;

            atualizar();
        }

        function melhorar() {

            if (pontos >= custo) {

                pontos -= custo;

                ganho++;

                custo += 10;

                atualizar();
            }
        }

        botao1.addEventListener('click', adicionar);

        botao2.addEventListener('click', melhorar);

        atualizar();
