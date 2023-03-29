
//declarar as variaveis:
//hunter(sprite e img),
//os monstros
//boss

var hunter,hunterImg;
var monstro1,monstro1Img;
var monstro2,monstro2Img;
var monstro3,monstro3Img;
var boss,bossImg;
var selva,selvaImg
var cidade,cidadeImg;
var teste;


function preload() {
    //carrega as imagens dentro das variaveis 

    hunterImg = loadImage("./imagens/soldado.png");
    monstro1Img = loadImage("./imagens/monstro1.png");
    monstro2Img =loadImage("./imagens/monstro2.png");
    monstro3Img = loadImage("./imagens/monstro3.png");
    bossImg = loadImage("./imagens/boss.jpg");
    selvaImg = loadImage("./imagens/selva.jpg");
    cidadeImg = loadImage("./imagens/cidade.jpg");
}

function setup() {

    createCanvas(windowWidth, windowHeight);//adaptatividade
    
    //criar um sprite para ser plano de fundo
    //criar os sprites dos personagens e posiciona-los
    //o personagem aparece o tempo todo? //boss = invisivel

    selva = createSprite(700,70,windowWidth,windowHeight)
    selva.addImage(selvaImg);
    selva.scale = 0.4;
   

    hunter = createSprite(205,400)
    hunter.addImage(hunterImg);
    hunter.scale = 0.2

    boss = createSprite(790,240);
    boss.addImage(bossImg);
    boss.scale = 0.5
    boss.visible = false;

    monstro1 = createSprite(550,220)
    monstro1.addImage(monstro1Img);
    monstro1.scale = 0.2;

    monstro2 = createSprite(200,170);
    monstro2.addImage(monstro2Img);
    monstro2.scale = 0.3

    monstro3 = createSprite(500,500);
    monstro3.addImage(monstro3Img)
    monstro3.scale = 0.4;



}
function draw() {
    background("black");
    //começar a criar as regras:
    //ex: monstro solta bola de fogo(function)
    //chamar a função, dentro do function draw 
    //monstro1.soltarHabilidade();

    drawSprites();
}

//funcão solta bola de fogo
//function nome(){
    //criar a cada quantidade de frames
    //grupo
    //ajustar tamanho, vel e direção
//}


function soltarHabilidade(){
    if(frameCount % 10){
        teste = createSprite(205,250)
        
        

    }
}