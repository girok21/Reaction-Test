window.onload = function(){
    testScreen = $("#TestScreen");
    majorText = $('#majorText');
    secondaryText = $('#secondaryText');
    stateIcon = $('#stateIcon')
    var red = "rgb(206, 38, 54)";
    var green = "rgb(75, 219, 106)";
    var blue = "rgb(43, 135, 209)";
    var startTime = 0;
    var reactionTime = 0;
    var bestTime = Infinity;
    var color = testScreen.css("background-color");
    var readyState = false;
    testScreen.click(function(){
        var pauseTime = Math.floor(Math.random() * 3000) + 1000;
        // if the user presses too soon
        if(readyState){
            testScreen.css("background-color", blue);
            color=blue;
            majorText.text("Too Soon!")
            secondaryText.text('Click to try again.')
            readyState = false;
            return;
        }
        if(color == green){
            testScreen.css("background-color", blue);
            reactionTime =  Date.now() - startTime;
            bestTime = Math.min(reactionTime, bestTime);
            console.log(bestTime)
            color = blue;
            majorText.text(`${reactionTime} ms`)
            stateIcon.attr("src", "./icons/resultIcon.png")
            secondaryText.html(`Click to keep going <br> <h3 style='font-weight:100; margin-top:10px; font-size: 20px'>Best Time: ${bestTime} ms<\h3>`)
            reactionTime = 0;
            startTime = 0;
            radyState = false;
            return;
        }
        if(color == blue){
            testScreen.css("background-color", red);
            color = red;
            stateIcon.attr("src", "./icons/threeDots.png")
            majorText.text('Wait for green')
            secondaryText.text('')
            readyState = true;
        }
        if(color == red){
            setTimeout(()=>{
                if(readyState)
                {
                    testScreen.css("background-color", green);
                    startTime = Date.now();
                    color = green;
                    majorText.text("Click!")
                    readyState = false;
                }
            }, pauseTime);
        }
    });
    // testScreen.hover(function(){
    //     $(document).getElementById("demo").style.cursor = "pointer";
    // });
};



