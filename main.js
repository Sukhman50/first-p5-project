function preload() {
}
function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    stroke(19, 252, 3);
    strokeWeight(5);
    rect(10, 10, 620, 460);
    stroke(255, 0, 0);
    strokeWeight(5);
    circle(20, 20, 40);
    circle(620, 20, 40);
    circle(20, 460, 40);
    circle(620, 460, 40);
    image(video, 30 , 20, 580, 440);
}
function take_snapshot() {
    save('student_name.png');
}