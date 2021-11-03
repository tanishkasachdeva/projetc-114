noseX_m=0;
noseY_m=0;
noseX_l=400;
noseY_l=0;
result= document.getElementById("enter_btn").value;

function preload(){
    mustache= loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    lipstick= loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
 
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(250,250);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        noseX_m = results[0].pose.nose.x;
        noseY_m = results[0].pose.nose.y;
        noseX_l = results[0].pose.nose.x; 
        noseY_l = results[0].pose.nose.y;

        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function modelLoaded()
{
    console.log("posNet model is loaded!"); 
}


function draw()
{
    image(video,0,0,300,300);
    if (result==true)
    {
    image(mustache,noseX_m+5,noseY_m+29,50,50);
    }
    else
    {
        image(lipstick,noseX_l+8,noseY_l+50,40,40);
    }
}   

function take_snapshot()
    {
        save("myfilterimage.png");
    }