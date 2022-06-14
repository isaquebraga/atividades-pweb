// window.onload = function() {

// }

// referencia o canvas e obtém o contexto gráfico
var canvas = document.getElementById("main-canvas");
var context = canvas.getContext("2d");


// --- inicia um caminho (apaga os desenhos anteriores) ---
// context.beginPath();


// --- desenha um retangulo ---
// context.fillStyle = "#FF0000";
// context.fillRect(50, 50, 100, 100);

// --- contorno preto com expessura de 3px ---
// context.lineWidth = 3;
// context.strokeStyle = "#000000";
// context.strokeRect(50, 50, 100, 100);


// --- desenha estrela ---
// context.moveTo(75, 250);
// context.lineTo(150, 50);
// context.lineTo(225, 250);
// context.lineTo(50, 120);
// context.lineTo(250, 120);
// context.lineTo(75, 250);

// --- configura a linha ---
// context.lineWidth = 2;
// context.strokeStyle = "#FF0000";

// --- traça todas as linhas do caminho ---
// context.stroke();


// --- desenhando arcos ---
// context.arc(
//     50,
//     50,
//     40,
//     90 * Math.PI/180,
//     270 * Math.PI/180,
//     false
// );

// context.arc(
//     50,
//     50,
//     40,
//     90 * Math.PI/180,
//     270 * Math.PI/180,
//     true
// );

// context.fill();
// context.stroke();

// context.fillStyle = "#FF0000";
// context.strokeStyle = "#000000";
// context.lineWidth = 2;


// context.arc(250, 50, 40, 0, 2 * Math.PI);
// context.fill();
// context.stroke();


// var imagem = new Image();
// imagem.src = "/cap1/img/ovni.png";

// imagem.onload = function() {
//     var x = 20;

//     for (var i = 1; i <= 5; i++) {
//         context.drawImage(imagem, x, 20, 64, 32);
//         x += 70;
//     }
// }


// var imagem = new Image();
// imagem.src = "/cap1/img/explosao.png";

// imagem.onload = function() {
//     context.drawImage(
//         imagem, 
//         10, 10, 60, 65,
//         0, 20, 60, 65);

//     context.drawImage(
//         imagem, 
//         80, 10, 60, 65,
//         50, 20, 60, 65);

//     context.drawImage(
//         imagem, 
//         150, 10, 60, 65,
//         120, 20, 60, 65);
    
//     context.drawImage(
//         imagem, 
//         220, 10, 60, 65,
//         190, 20, 60, 65);

//     context.drawImage(
//         imagem, 
//         290, 10, 60, 65,
//         250, 20, 60, 65);
// }


// --- animação de uma bola ---
// var x = 20;
// var y = 100;
// var raio = 5;

// var anterior = new Date().getTime();

// requestAnimationFrame(mexerBola);

// function mexerBola() {
//     var agora = new Date().getTime();
//     var decorrido = agora - anterior;

//     context.clearRect(0, 0, canvas.width, canvas.height);

//     context.beginPath();
//     context.arc(x, y, raio, 0, Math.PI * 2);
//     context.fill();

//     var velocidade = 20;
//     x += velocidade * decorrido / 1000;

//     anterior = agora;
//     requestAnimationFrame(mexerBola);
// }