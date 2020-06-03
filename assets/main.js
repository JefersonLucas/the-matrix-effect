const listaKatakana = [
  'ア', 'イ', 'ウ',  'エ',  'オ',
  'カ', 'キ',	'ク',	'ケ', 	'コ',
  'サ', 'シ',	'ス',	'セ', 	'ソ',
  'タ', 'チ',	'ツ',	'テ', 	'ト',
  'ナ', 'ニ',	'ヌ',	'ネ', 	'ノ',
  'ハ', 'ヒ',	'フ',	'ヘ', 	'ホ',
  'マ', 'ミ',	'ム',	'メ', 	'モ',
  'ラ', 'リ',	'ル',	'レ', 	'ロ',
  'ヤ', 'ユ',	'ヨ',   'ワ', 'ヲ',
  'ン'	 	 	 	 
];
const totalKatakana = listaKatakana.length;
function katakanaAleatorio(){
	return listaKatakana[Math.floor(Math.random() * totalKatakana)];
}

function efeitoMatrix(neo) {
//	Variáveis globais
	var tela 	= window.screen;
	var largura = neo.width 	= tela.width;
	var altura 	= neo.height 	= tela.height;
	var letras 	= Array(256).join(1).split('');
//	Desenha o efeito matrix na tela	
	var desenhaMatrix = function(){
	// Fundo Preto e transparência em .05
		neo.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
		neo.getContext('2d').fillRect(0,0,largura,altura);
	//	Letras
		neo.getContext('2d').fillStyle = '#0F0';
	//
		letras.map(function(posicao_y, index){
	//	Texto 
		var texto = katakanaAleatorio();
		var posicao_x = index * 10;
		neo.getContext('2d').fillText(texto, posicao_x, posicao_y);
	//	Array index
		letras[index] = (posicao_y > 758 + Math.random() * 1e4) ? 0 : posicao_y + 10;	 
		});
	}
	setInterval(desenhaMatrix, 60);
}
//	Função de carregar a página e passar o id canvas para a função
function carregar() {
	var canvas = document.getElementById('canvas')
	efeitoMatrix(canvas);
}
