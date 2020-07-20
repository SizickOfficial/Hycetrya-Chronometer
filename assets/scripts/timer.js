
$(document).ready(function(){
    $("#startTimer").click(function () {

    let currentTimer = 0;
    let timerToBeDisplayed = 305000;
    let playOneTime = true;

    const audio = new Audio("bip.mp3");
    const updateTimer = setInterval(function () {

      currentTimer += 1000;
      timerToBeDisplayed -= 1000;

      const minutes = Math.floor((timerToBeDisplayed % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timerToBeDisplayed % (1000 * 60)) / 1000);

      const widthToSet = (currentTimer / 305000) * 100;

      $('#display-timer').html(minutes + "m " + seconds + "s ");

      
      $("#timer-progressbar").width(widthToSet+"%");

      if (currentTimer > 290000) {
        if (playOneTime) {
          playOneTime = false;
          audio.play();
        }
      }

      if (currentTimer == 305000) {
        playOneTime = true;
        currentTimer = 0;
        timerToBeDisplayed = 305000;
      }
    }, 1000);
  });
});