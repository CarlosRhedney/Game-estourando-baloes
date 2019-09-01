<DOCTYPE html>
<html lang="pt-br">
<head>
	<title>jogo</title>
	<meta charset="UTF-8" />
	<link rel="icon" href="imagens/iniciar.png" />
	<link rel="stylesheet" type="text/css" href="estilo.css" />
	<link href="https://fonts.googleapis.com/css?family=Megrim|Press+Start+2P" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
	<script src="arquivo2.js" type="text/javascript"></script>
</head>
<h1><span style="font-family: 'Press Start 2P', cursive; letter-spacing:-5px;"><span style="color: #DB7093">GAME</span> <span style="color: #BDB76B;">ESTOURANDO</span> <span style="color: #D8BFD8;">BALÕES</span></h1>
<body style="background:#F5DEB3;" onload="iniciar_jogo()">
	<div align="center" style="float:left; width:auto; height:500px; background:fff; border:1px solid red;">
		<table border="0">
			<tr>
				<td><img src="imagens/balao_azul_grande.png" class="animated infinite pulse" /></td>
				<td><span style="font-size:40px;" id="baloes_inteiros"></span></td>
			</tr>
		</table>
		<table border="0">
			<tr>
				<td><img src="imagens/balao_azul_grande_estourado.png" class="animated infinite pulse" /></td>
				<td><span style="font-size:40px;" id="baloes_estourados"></span></td>
			</tr>
		</table>
		<table border="0">
			<tr>
				<td id="cronometro" style="width:138px; height:132px; background: url('imagens/cronometro.png'); font-size:40px; color:red; text-align:center;"></td>
			</tr>
		</table>
		<table border = "0" style="width:140px; height:132px">
        	<tr style="transform: rotate(180deg);">
         	 <td><img style="margin-left:20px; rotate:40px;" class="animated infinite tada" src="imagens/iniciar.png" onclick="voltar_jogo()" /></td>
        	</tr>
        </table>

	</div>
	<div id="cenario" align="center" style="float:left; width:600px; height:500px; background: url('imagens/cenario.png'); background-position:bottom;"></div>
</body>
</html>