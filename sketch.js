var rickyaSlider, godelSlider, billSlider;

function setup(){
    createCanvas(600,400);
    background(0);
    
    //createSlider(min, max, default)
    rickyaSlider = createSlider(0, 255, 0);
    //.position(x, y)
    rickyaSlider.position(20,20);
    
    godelSlider = createSlider(0, 255, 0);
    godelSlider.position(20,50);
    
    billSlider = createSlider(0, 255, 0);
    billSlider.position(20,80);
}

function draw(){
   redValue = rickyaSlider.value();
   greenValue = godelSlider.value();
   blueValue = billSlider.value();
   
   background(redValue, greenValue, blueValue);
}