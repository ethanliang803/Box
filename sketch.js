var canvas;
var music;
var surface1, surface2, surface3, surface4
var box
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100, 550, 150, 20);
    surface1.shapeColor = "green"

    surface2 = createSprite(300, 550, 150, 20);
    surface2.shapeColor = "red"

    surface3 = createSprite(500, 550, 150, 20);
    surface3.shapeColor = "blue"

    surface4 = createSprite(700, 550, 150, 20);
    surface4.shapeColor = "yellow"

    box = createSprite(random(20, 750));
    box.shapeColor = "white"
    box.velocityY = 5
    

}

function draw() {
    background(rgb(169, 169, 169));

    edges = createEdgeSprites()

    box.bounceOff(edges);

    if (isTouching(box, surface1) && box.bounceOff(surface1)) {

        box.shapeColor = "green"
        
    }
    else {

        box.shapeColor = "white"

    }

    if (isTouching(box, surface2) && box.bounceOff(surface2)) {

        box.shapeColor = "red"
        
    }
    else {

        box.shapeColor = "white"

    }

    if (isTouching(box, surface3) && box.bounceOff(surface3)) {

        box.shapeColor = "blue"
        
    }
    else {

        box.shapeColor = "white"

    }

    if (isTouching(box, surface4) && box.bounceOff(surface4)) {

        box.shapeColor = "yellow"
    }
    else {

        box.shapeColor = "white"

    }



    drawSprites()
}

function isTouching(object1,object2) {

    if (object1.x - object2.x < object2.width / 2 + object.width / 2
        && object2.x - object1.x < object2.width / 2 + object1.width / 2
        && object1.y - object2.y < object2.height / 2 + object1.height / 2
        && object2.y - object1.y < object2.height / 2 + object1.height / 2) {
        return true;

    }
    else {
        return false;
    }

}
