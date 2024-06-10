  let gameseq=[];
  let userseq=[];
  let started =false ;
  let level=0;
  let high=0;
  let btns=["yellow","red","purple","green"];

  let h2=document.querySelector("h2");
   
   document.addEventListener("keyup",function(){
    console.log("log")
    if(started==false){
        started=true;
        console.log("keshav");
         

        levelup();
        
    }

   });

   function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
   }

   function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
   }

   function levelup(){
    userseq =[];
    level++;
    h2.innerText=`level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    console.log(randbtn);
    gameseq.push(randcolor);
    gameflash(randbtn);
   }
   
   
   function checkans(idx){
    console.log("keshav ffdd")
    
    if(userseq[idx]===gameseq[idx]){
        if (userseq.length==gameseq.length) {
             setTimeout( levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        let body=document.querySelector("body");
        body.style.backgroundImage="none";
        body.style.backgroundColor="red";
        setTimeout(() => {
           body.style.backgroundImage="url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGhnazhjaHBqc2pmbTFiaDdpNzR5a3Jrb2dieHEyNjV5Mzd0YWNiYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ov9jCYBYtLNI3Qqbu/giphy.gif)";
            
        }, 150);
        high=Math.max(high,level);
        let lhigh=document.querySelector(".high");
        lhigh.innerHTML=`<b>Your high score:${high}</b>`;
        
        reset();
    }
      
   }
  
  
   function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

      checkans(userseq.length-1);
   }
   let allbtns=document.querySelectorAll(".btn");
   for(btn of allbtns){
    btn.addEventListener("click",btnpress);
   }


   function reset(){
    started=0;
    gameseq=[];
    userseq=[];
    level=0;
   }
    
  