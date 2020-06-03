
//  Quando a página for carregada 
//  Chama a função carregar()
//

const listaKatakana = [
    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ',
    'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
    'ヤ', 'ユ', 'ヨ', 'ワ', 'ヲ',
    'ン'
];
const totalKatakana = listaKatakana.length;
function katakanaAleatorio() {
    return listaKatakana[Math.floor(Math.random() * totalKatakana)];
}

function orientalAleatorio() {
    return String.fromCharCode(48 + Math.random() * 33);
}

function textoAleatorio() {
    //	Mix Oriental e Ocidental Chars
    let weightOriental = 0.6;
    if (Math.random() <= weightOriental) {
        return katakanaAleatorio()
    } else {
        return orientalAleatorio()
    }
}



window.onload = function carregar() {
    //  Captura o Canvas
    var canvas = document.getElementById("canvas");
    //  Passagem do canvas para a função efeitoMatrix()
    efeitoMatrix(canvas);
    //  Função que efetua o efeito matrix
    function efeitoMatrix(neo) {
        //	Variáveis
        var tela = window.screen;
        var largura = (neo.width = tela.width);
        var altura = (neo.height = tela.height);
        var letras = Array(256).join(1).split("");
        //	Desenha o efeito matrix na tela
        var desenhaMatrix = function () {
            //  Fundo Preto e transparência em .05
            neo.getContext("2d").fillStyle = "rgba(0,0,0,.05)";
            neo.getContext("2d").fillRect(0, 0, largura, altura);
            //	Letras
            neo.getContext("2d").fillStyle = "#0F0";
            //  Função Map que desenha as letras
            letras.map(function (posicao_y, index) {
                //	Texto
                var texto = textoAleatorio();
                var posicao_x = index * 10;
                neo.getContext("2d").fillText(texto, posicao_x, posicao_y);
                //	Array index de descreve o efeito matrix
                letras[index] = posicao_y > 758 + Math.random() * 1e4 ? 0 : posicao_y + 10;
                //
            });
        }
        //  A um intervalo de milisegundos a função desenhaMatrix() é chamada
        setInterval(desenhaMatrix, 60);
    }
}