function setup() {

    canvas = createCanvas(490, 490);

    canvas.position(550, 250);

    Video = createCapture(VIDEO);

    Video.hide();

}

function draw() {

    image(Video, 0, 0, 490, 490);

    stroke("lime");

    fill("skyblue");

    //top

    circle(0, 0, 80);

    circle(240, 0, 80);

    circle(490, 0, 80);

    //left

    circle(0, 240, 80);

    circle(0, 480, 80);

    //bottom

    circle(240, 490, 80)

    circle(490, 490, 80)

    //right

    circle(490, 240, 80)

}

function TakeSnapshot() {

    save("img.png");

}