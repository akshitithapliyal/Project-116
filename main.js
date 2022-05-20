moustache_x=0;
moustache_y=0;

function preload(){
    moustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log('poseNet is on and intialized');
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        moustache_x=results[0].pose.nose.x-40;
        moustache_y=results[0].pose.nose.y;
    }
}

function take_snapshot(){
    save('mynewface.png');
}

function draw(){
    image(video,0,0,300,300);
    image(moustache,moustache_x,moustache_y,100,30);
}
