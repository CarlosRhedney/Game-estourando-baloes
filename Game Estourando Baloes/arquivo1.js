function inicia_jogo(){
	var nivel_jogo = document.getElementById("nivel_jogo").value;
	window.location.href = "jogo.php?"+nivel_jogo;
}