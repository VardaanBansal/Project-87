const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height =30;
player_x =10;
player_y =10;

var player_object = "";
var player_object = "";
function player_update()
{
    fabric.Image.fromURL("player.png" , function(Img){
        player_object =Img;

        player_object.scaleToWidth(150);
        player_object.player_object.scaleToheight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
if(keypressd == '70')
{
    new_image('ironman_face.png')
    console.log("f")
}
if(keypressed == '66')
{
    new_image('spiderman_body.png');
    console.log("b")
}
if(keypressd == '76')
{
    new_image('hulk_legs.png');
    console.log("l")
}
if(keypressd == '82')
{
    new_image('thor_right_hand.png')
    console.log("r")
}
if(keypressd == '72')
{
    new_image('captin_america_left_hand.png');
    console.log("h");
}
if(keypressd == '38')
{
    up();
    console.log("up");
}