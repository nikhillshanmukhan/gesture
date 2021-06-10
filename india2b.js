// Setting scene for 3D Object
var scene = new THREE.Scene();

const loader = new THREE.TextureLoader();
loader.load('https://gist.githubusercontent.com/brettlangdon/85942af486eb79118467/raw/2a7409cd3c26a90b2e82bdc40dc7db18b92b3517/nebula-wallpaper-for-2560x1600-61-700.jpg' , function(texture)
            {
             scene.background = texture;  
            });

/*            
scene.background = new THREE.Color( 0xF0F8FF);
*/

var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
var vector = new THREE.Vector3();
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var objects = [];
var objectss = [];
var rbr='';

var flagrbr=0;
/*
const loader = new THREE.TextureLoader();
const bgTexture = loader.load('https://threejsfundamentals.org/threejs/resources/images/daikanyama.jpg');
scene.background = bgTexture;
*/
//speach
var msg1='nine hundred and sixty five';
            		/* JS comes here */
                function textToAudio() {
                  let msg = document.getElementById("text-to-speech").value;
                  
                  let speech = new SpeechSynthesisUtterance();
                  speech.lang = "en-Uk";
                  
                  speech.text = msg1;
                
     //random number            //speech.text = Math.floor(Math.random() * (10000 - 1000)) + 1000;
    /* random word 
 var x=0;
 var y=0;
 var a=0;
 var b=0;
 var c=0;
 var d=0;
 x=speech.text;
 a=x/1000;           
 x=speech.text;
 y=x/100;
 b=y%10;
 x=speech.text;
 y=x%100;
 c=y/10;
 x=speech.text;
 d=x%10;
 */
                  speech.volume = 1;
                  speech.rate = .5;
                  speech.pitch = 1;
                  
                  window.speechSynthesis.speak(speech);
              }
// Creating 3D object


camera.position.z = 5;

/*
var square = new THREE.Shape();
square.moveTo(1, 1);
square.lineTo(1, -1);
square.lineTo(-1, -1);
square.lineTo(-1, 1);
var geometry = new THREE.ShapeGeometry(square);

var material = new THREE.MeshBasicMaterial({
      color: "black",
      side: THREE.DoubleSide,
      depthWrite: false
});

*/



//1-6
var map1 = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/nikhillshanmukhan/Gesture-Game-icons/47eb881156ba458f903316559885536ca40721da/Numbers%20icons/6.svg' );
var material1 = new THREE.SpriteMaterial( { map: map1, color: 0xffffff } );
var square1 = new THREE.Sprite( material1 );
square1.scale.set(2,2,1);
scene.add(square1);
square1.position.x=3;
objects.push(square1);

//2-5
var map2 = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/nikhillshanmukhan/Gesture-Game-icons/47eb881156ba458f903316559885536ca40721da/Numbers%20icons/5.svg' );
var material2 = new THREE.SpriteMaterial( { map: map2, color: 0xffffff } );
var square2= new THREE.Sprite( material2 );
square2.scale.set(2,2,1);
scene.add(square2);
square2.position.x=0;
objects.push(square2);

//3-9
var map3 = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/nikhillshanmukhan/Gesture-Game-icons/47eb881156ba458f903316559885536ca40721da/Numbers%20icons/9.svg' );
var material3 = new THREE.SpriteMaterial( { map: map3, color: 0xffffff } );
var square3 = new THREE.Sprite( material3 );
square3.scale.set(2,2,1);
scene.add(square3);
square3.position.x=-3;
objects.push(square3);



// Optional animation to rotate the element
var animate = function() {
  requestAnimationFrame(animate);
 // cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();


function handtrack(){


  // Creating Canavs for video Input
const video = document.getElementById("myvideo");
const handimg = document.getElementById("handimage");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let trackButton = document.getElementById("trackbutton");
let updateNote = document.getElementById("updatenote");


let imgindex = 1;
let isVideo = false;
let model = null;

// Params to initialize Handtracking js
const modelParams = {
  flipHorizontal: true,
  maxNumBoxes: 4,
  iouThreshold: 0.5,
  scoreThreshold: 0.7
};

handTrack.load(modelParams).then(lmodel => {
  model = lmodel;
 // updateNote.innerText = "Loaded Model!";
  //trackButton.disabled = false;
});
  // Method to start a video
  function startVideo() {
    handTrack.startVideo(video).then(function(status) {
      if (status) {
      //  updateNote.innerText = "Video started. Now tracking";
        isVideo = true;
        runDetection();
      } else {
      //  updateNote.innerText = "Please enable video";
      }
    });
  }
  
  // Method to toggle a video
  function toggleVideo() {
    if (!isVideo) {
     // updateNote.innerText = "Starting video";
      startVideo();
    } else {
     // updateNote.innerText = "Stopping video";
      handTrack.stopVideo(video);
      isVideo = false;
     // updateNote.innerText = "Video stopped";
    }
  }
  toggleVideo();

  //Method to detect movement
  function runDetection() {
    model.detect(video).then(predictions => {
      model.renderPredictions(predictions, canvas, context, video);
      if (isVideo) {
        requestAnimationFrame(runDetection);
      }
      if (predictions.length > 0) {
        changeData(predictions[0].bbox);
      }
    });
  }
  
  //Method to Change prediction data into useful information
  function changeData(value) {
    let midvalX = value[0] + value[2] / 2;
    let midvalY = value[1] + value[3] / 2;
  
    document.querySelector(".hand-1 #hand-x span").innerHTML = midvalX;
    document.querySelector(".hand-1 #hand-y span").innerHTML = midvalY;
  
    moveTheBox({ x: (midvalX - 300) / 600, y: (midvalY - 250) / 500 });
  }
  
  var lmno=-2;
  var k=0;
  var flag=0;
  //Method to use prediction data to render cude accordingly
  function moveTheBox(value) {
  //square1.translateX(1);
  //square2.translateY(1);
  //square3.translateY(-1);
  //square4.translateX(-1);


  
  if(square2.position.x ==3 && flag==0){
    
    msg1='This level is Successfull';
    textToAudio();
    flag=1;
    flagrbr=1;
    isVideo=true;
    toggleVideo();
     }
  if(flag==0)
     {
       //document.write(rbr);
       //if(value.x > -0.000001){
          //square3.position.x=2;
         // square4.position.x=-2;
          //}		
        if(rbr == '3'){
          square1.position.x = ((window.innerWidth * value.x) / window.innerWidth) * 2;
          flagsel=0;
          if(value.x < 0.2 ){
            square1.position.x=0;
            square2.position.x=3;
           
            //runbabyrun();
            }	
          }
        else if(rbr == '2'){
            square2.position.x = ((window.innerWidth * value.x) / window.innerWidth) * 2;
            flagsel=0;
            if(value.x > -0.2 ){
              square2.position.x=3;
              square1.position.x=0;
              flagsel=1;
              //runbabyrun();
              }	
          }
  }
  renderer.render(scene, camera);


}



}

  var flagsel=0;


function selectionbox()
{
  


  const config = {
    video: { width: 640, height: 480, fps: 30 }
  };

  const landmarkColors = {
    thumb: 'red',
    indexFinger: 'blue',
    middleFinger: 'yellow',
    ringFinger: 'green',
    pinky: 'pink',
    palmBase: 'white'
  };

  const gestureStrings = {
    'thumbs_up': '1',
    'victory': '2',
    'thumbs_down': '4',
    'thre':'3'
  };

  async function main() {
    


    const video = document.querySelector("#pose-video");
    const canvas = document.querySelector("#pose-canvas");
    const ctx = canvas.getContext("2d");

    const resultLayer = document.querySelector("#pose-result");

    // configure gesture estimator
    // add "✌🏻" and "👍" as sample gestures
    const knownGestures = [
      fp.Gestures.VictoryGesture,
      fp.Gestures.ThumbsUpGesture,
      fp.Gestures.ThumbsDownGesture,
      fp.Gestures.ThreGesture
    ];
    const GE = new fp.GestureEstimator(knownGestures);

    // load handpose model
    const model = await handpose.load();
    console.log("Handpose model loaded");

    // main estimation loop
    const estimateHands = async () => {

      // clear canvas overlay
      ctx.clearRect(0, 0, config.video.width, config.video.height);
      resultLayer.innerText = '';

      // get hand landmarks from video
      // Note: Handpose currently only detects one hand at a time
      // Therefore the maximum number of predictions is 1
      const predictions = await model.estimateHands(video, true);

      for(let i = 0; i < predictions.length; i++) {

        // draw colored dots at each predicted joint position
        for(let part in predictions[i].annotations) {
          for(let point of predictions[i].annotations[part]) {
            drawPoint(ctx, point[0], point[1], 3, landmarkColors[part]);
          }
        }

        // now estimate gestures based on landmarks
        // using a minimum confidence of 7.5 (out of 10)
        const est = GE.estimate(predictions[i].landmarks, 7.5);

        if(est.gestures.length > 0) {

          // find gesture with highest confidence
          let result = est.gestures.reduce((p, c) => { 
            return (p.confidence > c.confidence) ? p : c;
          });

          resultLayer.innerText = gestureStrings[result.name];
          rbr = gestureStrings[result.name];
          //flagsel = 1;
          video.pause();
          return
        }
      }

      // ...and so on
      setTimeout(() => { estimateHands(); }, 1000 / config.video.fps);
    };

    estimateHands();
    console.log("Starting predictions");
  
  }

  async function initCamera(width, height, fps) {
   


    const constraints = {
      audio: false,
      video: {
        facingMode: "user",
        width: width,
        height: height,
        frameRate: { max: fps }
      }
    };

    const video = document.querySelector("#pose-video");
    video.width = width;
    video.height = height;

    // get video stream
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;

    return new Promise(resolve => {
      video.onloadedmetadata = () => { resolve(video) };
    });
  

  }

  function drawPoint(ctx, x, y, r, color) {

   


    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();

    
  }

  //window.addEventListener("DOMContentLoaded", () => {

    initCamera(
      config.video.width, config.video.height, config.video.fps
    ).then(video => {
      video.play();
     // video.addEventListener("loadeddata", event => {
        console.log("Camera is ready");
        main();
     // });
    });

    const canvas = document.querySelector("#pose-canvas");
    canvas.width = config.video.width;
    canvas.height = config.video.height;
    console.log("Canvas initialized");
  //});



  



      

}





function runbabyrun(){

  if(flagrbr==0){
    
    selectionbox();
    handtrack();
    
  }
}