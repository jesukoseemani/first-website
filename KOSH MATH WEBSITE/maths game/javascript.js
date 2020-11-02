var playing = false;
var score;
var action;
var timeleft;
var correctanswer;


document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
         
    }else{
        playing = true;
        
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("startreset").innerHTML = "Reset Game";
      
         hide("gameover");
        show("time");
        
        timeleft = 60;
        document.getElementById("timevalue").innerHTML = timeleft;
        
        
        
        startcountdown();
        
       
        
        generateQA();
        
          
    }
}

function startcountdown(){
    action = setInterval(function(){
        timeleft -= 1;
document.getElementById("timevalue").innerHTML = timeleft;
        if(timeleft == 0){
            stopcountdown();
           
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>game over!</p><p> your score is " + score + ".</p>";
            
            hide("time");
            hide("correct");
            hide("wrong");
            playing = false;
   document.getElementById("startreset").innerHTML = "Start Game";         
            
        }
                         },1000);
}







function stopcountdown(){
    clearInterval(action);
}

function show(Id){
    document.getElementById(Id).style.display = "block";
}
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function generateQA(){
    
    var x = 5+ Math.round(Math.random()*15);
    var y = 5+ Math.round(Math.random()*15);
    correctanswer = x*y;
    
    document.getElementById("questionbox").innerHTML = x + "x" + y;
    
    var correctposition = 1+  Math.round(Math.random()*3);
    document.getElementById("box"+correctposition).innerHTML = correctanswer;
    
    var answers = [correctanswer];
    for(i=1; i<5; i++){
        if(i !== correctposition){
            var wronganswer;
            do{
            wronganswer = 8+ Math.round(Math.random()*15)*6+ Math.round(Math.random()*15);
            }
            while(answers.indexOf(wronganswer)>-1);
            
            
        document.getElementById("box"+i).innerHTML = wronganswer;
            answers.push(wronganswer);
            
        }
    }
    
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        if(playing == true){
            if(this.innerHTML == correctanswer){
                score++
               document.getElementById("scorevalue").innerHTML = score;
                show("correct");
                hide("wrong");
                timer();
                generateQA();
            }else{
                if(score>0){score--
                document.getElementById("scorevalue").innerHTML = score; } 
        
                show("wrong");
                hide("correct");
                timer2();
                generateQA();
            }
        }
        
    } 
}

function timer(){
    setTimeout(function(){
        hide("correct");
    },1000);
}

function timer2(){
    setTimeout(function(){
        hide("wrong");
    },1000)
}