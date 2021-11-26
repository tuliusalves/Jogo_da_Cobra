let canvas = document.getElementById("snake");
let context= canvas.getContext("2d");
let box= 32;
let snake = [];
snake[0]={
    x:8* box,
    y:8*box
}
let food ={
    x:Math.floor(Math.random()*15+1)*box,
    y:Math.floor(Math.random()* 15+1)*box
}
let direction= "right";//Variável da direção do movimento da cobra.
function criarBG(){
    context.fillStyle = "black";
    context.fillRect(0,0,16 *box, 16*box);
}
function criarCobrinha(){
    for(i=0; i< snake.length;i++){
        context.fillStyle="gray";
        context.fillRect(snake[i].x,snake[i].y,box,box);
    }
}
//Função da comida
function drawFood(){
    context.fillStyle= "red";
    context.fillRect(food.x,food.y,box,box); 
}
//pegando evento de clique e chamando a update
document.addEventListener('keydown',update);
/*movendo a cobra de acordo com a tecla pressionada e, impedir de mover para a
direção oposta*/
function update(event){
    if(event.keyCode ==37 && direction != "right") direction= "left";
    if(event.keyCode ==38 && direction != "down") direction= "up";
    if(event.keyCode ==39 && direction != "left") direction= "right";
    if(event.keyCode ==40 && direction != "up") direction= "down";
}
//Função de intervalo de tempo
function iniciarJogo(){
    
    //realizando retorno ao passar uma parede
    if(snake[0].x>15 * box && direction =="right")snake[0].x=0;
    if(snake[0].x<0 && direction =="left")snake[0].x=16*box;
    if(snake[0].y>15 *box && direction =="down")snake[0].y=0;
    if(snake[0].y<0 && direction =="up")snake[0].y=16*box;

   /*loop for checando se cada cordenada se choca com i, ao fazer
    isso o jogo será finalizado*/
    for( i=1;i<snake.length;i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game over :(");
        }
    }
    
    criarBG();
    criarCobrinha();
    drawFood();
    //ponto de partida baseado nas posições x e y
    let snakeX= snake[0].x;
    let snakeY=snake[0].y;

    //cordenadas
    if(direction =="right") snakeX +=box;
    if(direction =="left") snakeX -=box;
    if(direction == "up") snakeY -=box;
    if(direction == "down") snakeY +=box;

    if(snakeX != food.x || snakeY != food.y){
        //Retirando o último elemento do array
    snake.pop();
    }else{
      food.x= Math.floor(Math.random()*15+1)*box;
      food.y= Math.floor(Math.random()* 15+1)*box;
   }

   

    //Acrescentando uma nova cabeça
    let newHead ={
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo,100);// Variável de intervalo de tempo de início de jogo
