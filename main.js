BelowNoseX=0;
BelowNoseY=0;
function preload(){
moustache= loadImage(' https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        BelowNoseX=results[0].pose.Below.Nose.X
        BelowNoseY=results[0].pose.Below.Nose.Y
        console.log("below nose x = " + BelowNoseX);
        console.log("below nose y = " + BelowNoseY);
    }
}
function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(BelowNoseX, BelowNoseY, 20);
}
function take_snapshot(){
    save('myFilterImage.png')
}