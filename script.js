console.log("Das Parivar Wedding Gallery loaded ❤️");

// SECURITY CODE
const correctCode = "2026"; // change your code here

function checkCode(){
  const entered = document.getElementById("accessCode").value;
  if(entered === correctCode){
    document.getElementById("code-page").classList.add("hidden");
    document.getElementById("welcome-page").classList.remove("hidden");
  } else {
    document.getElementById("code-error").textContent = "Incorrect code, try again!";
  }
}

// OPEN GALLERY
function openGallery(){
  document.getElementById("welcome-page").classList.add("hidden");
  document.getElementById("gallery-page").classList.remove("hidden");
}

// BALLOONS & PATHEKHE ANIMATION (simple visual)
const canvas = document.getElementById("balloonsCanvas");
if(canvas){
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = 300;

  let balloons = [];
  for(let i=0;i<30;i++){
    balloons.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      r:10 + Math.random()*10,
      color:`hsl(${Math.random()*360},100%,70%)`
    });
  }

  function drawBalloons(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    balloons.forEach(b=>{
      ctx.beginPath();
      ctx.arc(b.x,b.y,b.r,0,Math.PI*2);
      ctx.fillStyle=b.color;
      ctx.fill();
      b.y -= 0.5;
      if(b.y + b.r < 0) b.y = canvas.height + b.r;
    });
    requestAnimationFrame(drawBalloons);
  }
  drawBalloons();
}
