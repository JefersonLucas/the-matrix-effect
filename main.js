function efeitoMatrix(neo) {

    let tela 	= window.screen;
    let largura = neo.width 	= tela.width;
    let altura 	= neo.height 	= tela.height;
    let letras 	= Array(256).join(1).split('');

//	Desenha o efeito matrix na tela	
    let desenhaMatrix = function() {

       //Fundo Preto
        neo.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
        neo.getContext('2d').fillRect(0,0,largura,altura);
        //Letras
        neo.getContext('2d').fillStyle = '#0F0';
        
        letras.map(function(posicao_y, index) {

            //Texto 
            let texto = String.fromCharCode(48 + Math.random() * 33);
            let posicao_x = index * 10;
            neo.getContext('2d').fillText(texto, posicao_x, posicao_y);
            //Array index
            letras[index] = (posicao_y > 758 + Math.random() * 1e4) ? 0 : posicao_y + 10;

        });

    }

    setInterval(desenhaMatrix, 60);

}

//	Função de carregar a página e pasar o id canvas para a função
function carregar() {

    let canvas = document.getElementById('canvas');
    efeitoMatrix(canvas);

}