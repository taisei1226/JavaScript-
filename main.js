'use strict';
{   
    var time = 0;
    var timerLabel = document.getElementById('time');
    var startBtn = document.getElementById('start');
    var stopBtn = document.getElementById('stop');
    var resetBtn = document.getElementById('reset');
    var id;

    function start() {
        startBtn.disabled = true;
        time++;
        var hour = Math.floor(time/1000/60/60);
        var min = Math.floor(time/100/60);
        var sec = Math.floor(time/100);
        var mSec = time % 10;
        if (min >= 60) min = min % 60; 
        if (sec >= 60) sec = sec % 60; 
        
        timerLabel.innerHTML = hour + ':' + min + ':' + sec + ':' + mSec;
        id = setTimeout(start, 10);
    }

    function stop() {
        clearTimeout(id);
        startBtn.disabled = false;

    }

    function reset() {
        clearTimeout(id);
        time = 0;
        timerLabel.innerHTML = '0:0:0:0';
        startBtn.disabled= false;
    }

    startBtn.addEventListener('click', start, false); 
    stopBtn.addEventListener('click', stop, false); 
    resetBtn.addEventListener('click', reset, false); 
}
