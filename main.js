function preload(){}

function setup(){
canvas= createCanvas( 800,600);
canvas.position( 110,280);
video= createCapture(VIDEO)
video.hide();
tint_color=" ";
}

function draw(){
    image( video,44,44,700,500);
    tint(tint_color);
    fill(255,100,100,55);
    rect(5, 60,60, 540);
    rect(60, 5, 800, 60);
    rect(742, 5, 60, 540);
    rect(50, 742, 800, 540);
    fill(255,0,78,150);
    rect(5, 6, 60, 60);
    rect(142, 5, 60, 60);
    rect(342, 5, 60,60);
    rect(542, 5, 60, 60);
    rect(742, 5, 60, 60);
    
}

function applyFilter(){
    tint_color= document.getElementById("color").value;
}

function take_snapshot(){
    save('myImage.jpg');
}
