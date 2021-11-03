var score = 0 
var count = 80
var gamestate = 1
var ecount = 70

function preload(){
  coinImg = loadImage("coin.png")
}

function setup() {
  createCanvas(800,400);
  player = createSprite(50, 350, 30, 30);
  edges = createEdgeSprites()
  coinG = createGroup()
  enemyG = createGroup()
}

function draw() {
  background("blue"); 
  textSize(20)
  text("Score: "+score,40,40)
  if(gamestate===1){
   coins()
// a = a+2  a+=2
    if(keyDown("up")){
  player.y -= 5
  }

  if(keyDown("down")){
    player.y += 5
    }

    if(keyDown("left")){
      player.x -= 5
      }

      if(keyDown("right")){
        player.x += 5
        }
   player.collide(edges)  
  for(var i = 0; i<coinG.length; i++){
  if(player.isTouching(coinG.get(i))){
    coinG.get(i).destroy()
    score += 1
    if(count>=11){
      count -= 10
    }
    if(ecount>=6){
      ecount -= 5
    }
    
  }
}
console.log(count)
for(var j= 0;j<enemyG;j++){
  if(player.x === enemyG.get(j).x&& player.y === enemyG.get(j).y){
    enemyG.get(j).x+=30
    enemyG.get(j).y+=30
  }
}
  enemies()
  if(player.isTouching(enemyG)){
    gamestate = 0
  }
}

if(gamestate===0){
  enemyG.destroyEach()
  coinG.destroyEach()
  text("Game Over",350,200)
  text("Press K to Restart",330,250)
  if(keyDown("K")){
    location.reload()
  }
}
  

  drawSprites();
}

function coins(){
  
  if(frameCount%count===0){
    coin = createSprite(random(50,750),random(50,350))
    coin.addImage(coinImg)
    coin.scale = 0.2
    coin.lifetime = 80
    coinG.add(coin)
  }
}

function enemies(){
  if(frameCount%ecount===0){
    enemy = createSprite(random(50,750),random(50,350),30,30)
    enemy.shapeColor = "red"
    enemy.lifetime = 50
    enemyG.add(enemy)
  }
}
