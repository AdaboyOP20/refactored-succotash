img = " ";

// Creates Canvas
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

// loads the image
function preload()
{
    img = loadImage('dog_cat.jpg');
}

// puts the image on the canvas and displays the corresponding texts
function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}