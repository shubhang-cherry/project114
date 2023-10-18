noseX=0
noseY=0


function preload () {
    clownNose_image=loadImage(' https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is Initialized');
}

function gotPoses(results) 
{
    if(results.length>0) 
    {
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(results);
        console.log('nose x = '+ noseX-15);
        console.log('nose y = '+ noseY);
    }
}


function draw () {
    image(video, 0 ,0 ,300,300);
    image(clownNose_image,noseX,noseY,30,30);
}

function take_snapshot () {
save('MyFilteredImage.png');
}

