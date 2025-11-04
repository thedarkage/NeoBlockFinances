const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let dots = [];
for (let i=0;i<60;i++){
  dots.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,dx:(Math.random()-0.5)*0.3,dy:(Math.random()-0.5)*0.3});
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let d of dots){
    ctx.fillStyle="rgba(80,200,255,0.7)";
    ctx.beginPath();
    ctx.arc(d.x,d.y,2.2,0,Math.PI*2);
    ctx.fill();
    d.x+=d.dx; d.y+=d.dy;
    if(d.x<0||d.x>canvas.width) d.dx=-d.dx;
    if(d.y<0||d.y>canvas.height) d.dy=-d.dy;
  }
  requestAnimationFrame(draw);
}
draw();
