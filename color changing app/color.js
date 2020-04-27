const color=["red","blue","black","violet","green","yellow"];

let button=document.getElementById("button");

button.addEventListener('click', function(){
//random colors generator
let colorIndex=parseInt((Math.random()*color.length)+1);

let canvas=document.getElementById('canvas');

canvas.style.background=`${color[colorIndex]}`;

})