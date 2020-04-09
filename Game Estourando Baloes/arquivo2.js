var timerId = null;
function iniciar_jogo(){
	var url = window.location.search;
	var nivel_jogo = url.replace("?", "");
	var tempo_segundos = 0;
	if(nivel_jogo == 1){
		tempo_segundos = 120;
	}
	if(nivel_jogo == 2){
		tempo_segundos = 60;
	}
	if(nivel_jogo == 3){
		tempo_segundos = 30;
	}
	document.getElementById("cronometro").innerHTML = tempo_segundos;
	var qtde_baloes = 30;
	cria_baloes(qtde_baloes);
	document.getElementById("baloes_inteiros").innerHTML = qtde_baloes;
	document.getElementById("baloes_estourados").innerHTML = 0;
	contagem_tempo(tempo_segundos +1);
}

function contagem_tempo(tempo_segundos){
	tempo_segundos = tempo_segundos -1;
	if(tempo_segundos == -1){
		clearTimeout(timerId);
		game_over();
		return false;
	}
	document.getElementById("cronometro").innerHTML = tempo_segundos;
	timerId = setTimeout("contagem_tempo("+tempo_segundos+")", 1000);
}

function game_over(){
	alert("GAME OVER!");
	remove_eventos_baloes();
}

function cria_baloes(qtde_baloes){
	for(var i = 1; i <= qtde_baloes; i++){
		var balao = document.createElement("img");
		balao.src = "imagens/balao_azul_pequeno.png";
		balao.style.margin = "10px";
		balao.id = "c"+i;
		balao.onclick = function(){estourar(this);};
		document.getElementById("cenario").appendChild(balao);
	}
}

function estourar(e){
	var id_balao = e.id;
	document.getElementById(id_balao).src = "imagens/balao_azul_pequeno_estourado.png";
	document.getElementById(id_balao).setAttribute("onclick", "");
	pontuacao(-1);
}

function pontuacao(acao){
	var baloes_inteiros = document.getElementById("baloes_inteiros").innerHTML;
	var baloes_estourados = document.getElementById("baloes_estourados").innerHTML;
	baloes_inteiros = parseInt(baloes_inteiros);
	baloes_estourados = parseInt(baloes_estourados);
	baloes_inteiros = baloes_inteiros + acao;
	baloes_estourados = baloes_estourados - acao;
	document.getElementById("baloes_inteiros").innerHTML = baloes_inteiros;
	document.getElementById("baloes_estourados").innerHTML = baloes_estourados;
	situacao_jogo(baloes_inteiros);
}

function remove_eventos_baloes() {
	var i = 1;
	while(document.getElementById('c'+i)) {
		document.getElementById('c'+i).onclick = '';
		i++;
	}
}

function situacao_jogo(baloes_inteiros){
	if(baloes_inteiros == 0){
		alert("Parabéns voçê estourou todos os balões a tempo!");
		parar_jogo();
	}
}

function parar_jogo(){
	clearTimeout(timerId);
}

function voltar_jogo(){
	window.location.href = "index.php";
}