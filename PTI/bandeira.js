const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(250,100,60,0,2*Math.PI);
ctx.fillStyle = "red"; 
ctx.fill(); 

ctx.beginPath();
ctx.lineWidth = "3";
ctx.strokeStyle = "black";
ctx.rect(10, 5, 480, 200);
ctx.stroke();
