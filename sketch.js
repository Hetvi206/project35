//Create variables here
var happyDog,dog,dogv,database,foodS,foodStock,food;
function preload(){
	//load images here
  dog = loadImage("images/dogimg.png");
  happyDog = loadImage("images/dogimg1.png");
}

function setup() {
  database=firebase.database();
createCanvas(500, 500);

  dogv=createSprite(250,250,50,50);
  dogv.addImage(dog);
  dogv.scale=0.15;

  
foodStock=database.ref(food);
foodStock.on("value",readStock);


}


function draw() {  
background(46,139,87);

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dogv.addImage(happyDog);
}

  drawSprites();

  fill(255,255,254);
  textSize(15);
  text("Food remaining : "+ foodStock , 10,30);
 
}

function readStock(data){
  foodS=data.val();
}


function writeStock(x){

  if(x<=0){
    x=0;
  }else {
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}
