"use struct";

var defaultSpeed = 250; //the default speed
var time = null;
var temp = 0;
var word = ""; 

/*
 * when the user opens the page
 */
window.onload = function(){
   var ani = document.getElementById("de_animations");
   ani.onchange = changeAnimation;//change animation depending on user's selection
   ani.disabled = false;
   
   var biggieSmalls = document.getElementById("de_size");
   biggieSmalls.onchange = changeSize; //change size depending on user's selection
   
   var start = document.getElementById("start");
   start.onclick = startButton; //when button is clicked, do startButton function
   start.disabled = false; //start button is enabled
   
   var stop = document.getElementById("stop");
   stop.onclick = stopButton; //when button is clicked, do stopButton function
   stop.disabled = true; //stop button by default is disabled
   
   var amphetamine = document.getElementById("de_turbo");
   amphetamine.onchange = gottaGoFast; //activates turbo when user selects turbo 
};

/*
 * function for the start button
 */
function startButton(){
   var ani = document.getElementById("de_animations");
   var contents = ANIMATIONS[ani.value];
   var box = document.getElementById("boxbox");
   
   word = box.value;
   
   var aniArray = contents.split("=====\n");
   var length = aniArray.length;
   
   ani.disabled = false;
   document.getElementById("start").disabled = true; //make the start button disabled
   document.getElementById("stop").disabled = false; //make the stop button enabled
   time = setInterval(aniFrames, defaultSpeed, aniArray, length);
}

/*
 * function for the stop button
 */
function stopButton(){
   var box = document.getElementById("boxbox");
   
   box.value = word;
   word = ""; 
   clearInterval(time);
   time = null;
   temp = 0;
   document.getElementById("de_animations").disabled = false;
   document.getElementById("start").disabled = false; //make the start button enabled
   document.getElementById("stop").disabled = true; //make the stop button disabled
}

function aniFrames(array, length){
   var box = document.getElementById("boxbox");
   box.value = array[(temp%length)];
   temp ++;
}

/*
 * changing the animation
 */
function changeAnimation(){
   var ani = document.getElementById("de_animations");
   document.getElementById("boxbox").value = ANIMATIONS[ani.value];
}

/*
 * changing the size of the animation
 */
function changeSize(){
   var biggieSmalls = document.getElementById("de_size");
   var box = document.getElementById("boxbox");
   box.style.fontSize = biggieSmalls.value;
}

/*
 * ACTIVATE TURBO THRUSTERS
 */
function gottaGoFast(){
   if(this.checked){
      time = 50;
   }
   else{
      time = 250;
   }
