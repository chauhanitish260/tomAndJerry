var  canvas,bg
var together;
var tom, tomImg1,tomImg2;
var jerry,jerryImg1,jerryImg2;

function preload() {
    //load the images here
  bg = loadImage("image/garden.png");
  tomImg1=loadImage('image/tomOne.png');
  tomImg2=loadImage("image/tomeTwo.png","image/tomThree.png");
  tomImg3=loadImage('image/tomFour');
  jerryImg1=loadImage("image/jerryOne.png");
  jerryImg2=loadImage("image/jerryTwo.png","image/jerryThree.png");
  jerryImg3=loadImage("image/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
      tom=createSprite(870,600);
      tom.addAnimation("tomStanding",tomImg1);
      tom.scale = 0.2;

      jerry=createSprite(200,600);
      jerry.addAnimation("jerryStanding",jerryImg1);
      jerry.scal = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collid
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    console.log(tom.y-jerry.x)
    {
         //write code here to change animation
         tom.velocityX = 0;
         tom.addAnimation("tomLastImage",tomImg3);
         tom.x = -300;
         tom.scale = 0.2;
         tom.changeAnimation("tomLastRunning");

         jerry.addAnimation("jerryLastImage",jerryImg3);
         jerry.scale = 0.15;
         jerry.changeAnimation("jerryLastRunning");  
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keycode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning",tomImg2);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("jerryTeasing",jerryImg2);
      jerry.framedelay = 25;
      jerry.changeAnimation("jerryTeasing");

  }

}
