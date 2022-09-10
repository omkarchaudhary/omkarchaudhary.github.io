window.onload = function(){
    "use strict";
    
    let delayTime = 250;
    let animator = undefined;
    let textAreaValue = null;
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var animationSelector = document.getElementById("animation");
    var sizeSelector = document.getElementById("fontsize");
    var speedCheckbox = document.getElementById("turbo");
    var textArea = document.getElementById("text-area");

    startButton.onclick = onStartClick;
    stopButton.onclick = onStopClick;
    animationSelector.onchange = onAnimationSelector;
    sizeSelector.onchange = onSizeSelector;
    speedCheckbox.onchange = onSpeedSelector;

    function onStartClick(){
        startButton.disabled= true;
        animationSelector.disabled = true;
        stopButton.disabled = false;
        animation(textArea.value, delayTime);
    }

    function onStopClick(){
        startButton.disabled= false;
        animationSelector.disabled = false;
        stopButton.disabled = true;
        clearInterval(animator);
        displayAnimation();
        
    }
    function onAnimationSelector(){
        displayAnimation();
    }
    function onSizeSelector(){
        var selectedValue = sizeSelector.value;
        textArea.style.fontSize = selectedValue+"px";
    }
    function onSpeedSelector(){
        if(speedCheckbox.checked){
            delayTime = 50;
        }else{
            delayTime = 250;
        }
        if(startButton.disabled){
            animation(textAreaValue, delayTime);
        }
    }

    function animation(textValue,timer){
        let i = 0;
        let frame = textValue.split("=====\n");
        clearInterval(animator);
          animator = setInterval(function(){
            textArea.value = frame[i];
            i++;
            if(i == frame.length){
                i = 0;
            }
         }, timer);

    }

    function displayAnimation(){
       var selectedAnimation = animationSelector.value;
       textAreaValue = ANIMATIONS[selectedAnimation];
       textArea.value = textAreaValue;
       
    }
}