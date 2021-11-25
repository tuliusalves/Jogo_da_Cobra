let canvas = document.getElementById("snake");
let context= canvas.getContext("2d");
let box= 32;
let snake = [];
snake[0]={
    x:8* box,
    y:8*box
}
let direction= "right";//Variável da direção do movimento da cobra.
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 *box, 16*box);
}
function criarCobrinha(){
    for(i=0; i< snake.length;i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x,snake[i].y,box,box);
    }
}
//Função de intervalo de tempo
function iniciarJogo(){
    criarBG();
    criarCobrinha();
    //ponto de partida baseado nas posições x e y
    let snakeX= snake[0].x;
    let snakeY=snake[0].y;

    //cordenadas
    if(direction =="right") snakeX +=box;
    if(direction =="left") snkaeX -=box;
    if(direction == "up") snakeY -=box;
    if(direction == "down") snakeY +=box;

    //Retirando o último elemento do array
    snake.pop();

    //Acrescentando uma nova cabeça
    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo,100);// Variável de intervalo de tempo de início de jogo
