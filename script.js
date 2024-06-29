function startCountdown(){
    let seconds = parseInt(document.getElementById('seconds').value);
    let countdownElement = document.getElementById('countdown');
    let interval = setInterval(function(){
        countdownElement.textContent = 'Time remainding:'   + seconds + 'seconds'; seconds--;
        if (seconds < 0){
            clearInterval(interval);
            countdownElement.textContent = ' countdown finished!';
        }
    }, 1000);
}