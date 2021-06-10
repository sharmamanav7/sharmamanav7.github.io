let runningTotal = 0;
let buffer ="0";
let previousOperator=null;

const screen = document.querySelector('.screen');


function init(){
    document.querySelector('.calc-buttons').addEventListener('click',function(event){
        buttonClick(event.target.innerText);
    });
    $(document).keypress(function(e){
        console.log(e);
        console.log(e.keyCode);
        console.log(String.fromCharCode(e.keyCode));
        if((e.keyCode>=48 && e.keyCode<=57) || (e.keyCode==67 || e.keyCode==99 || e.keyCode==42 || e.keyCode==43 || e.keyCode==45 || e.keyCode==47 || e.keyCode==61)){
            buttonClick(String.fromCharCode(e.keyCode));
        }   
        else if(e.keyCode==13){
            buttonClick("enter");
        }
    });
    $(document).keyup(function(e){
        if(e.keyCode==08){
            buttonClick("back");
        }
    })
}
init();

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
    screen.innerText=buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case "C" :
        case "c":    
            buffer=0;
            runningTotal = 0;
            break;
        case "←": 
        case "back":   
            console.log("buffer "+buffer)
            console.log("buffer length "+buffer.length);
            if(String(buffer).length===1){
                buffer = 0;
            }
            else{     
                buffer=String(buffer).substring(0,String(buffer).length-1);
            }
            break;
        case "=":
        case "enter":    
            if(previousOperator==null){
                return;
            }    
            else{
                flushOperator(parseInt(buffer));
                buffer=runningTotal;
                runningTotal=0;
                previousOperator=null;
            }
            break;
        case "+":
        case "−":
        case "-":    
        case "/":
        case "*":             
        case "×":
        case "÷":
            handleMath(symbol);
            break;        
    }


    
}

function handleNumber(NumberString){
    if(buffer==="0"){
        buffer = NumberString;
    }
    else{
        buffer+=NumberString;
    }
    console.log("number",buffer );
   
}

function handleMath(symbol){
    if(buffer==="0"){
        return;
    }

    const intBuffer = parseInt(buffer);
    if(runningTotal=="0"){
        console.log("running total is zero");
        runningTotal = intBuffer;
        console.group(`running total is ${runningTotal}`);
    }
    else{
        flushOperator(intBuffer);
    }
    previousOperator=symbol;
    buffer="0";
    console.log("buffer length "+buffer.length);
    console.log("symbol",symbol);
}

function flushOperator(intBuffer){
    switch(previousOperator){
        case "+":
            console.log("addition");
            runningTotal+=intBuffer;
            break;
        case "−":
        case "-":        
            runningTotal-=intBuffer;    
            break;
        case "×":
        case "*":   
            runningTotal*=intBuffer;
            break;
        case "÷":
        case "/":    
            runningTotal/=intBuffer;
            break;
                        
    }
    console.log(runningTotal);
}