$(document).ready(function () {
  /*

  Cooldown of every server in milliseconds

  */

  const cooldown = {
    skySword: 360000,
    skydariaOlympe: 300000,
    skydariaPirate: 315000,
    hadaria: 125000,
  };

  /*

  Timing to prevent for an upcoming word in milliseconds

  */

  const preventTiming = 15000;

  /*

  Audio init

  */

  const audioToPlay = new Audio("bip.mp3");

  /*

  Every server settings

  */

  let skySword = {
    pause: false,
    updateTimer: null,
    currentTimer: 0,
    timerToBeDisplayed: cooldown.skySword,
    playOneTime: true,
    startBtn: $("#startTimerSkySword"),
    resumeBtn: $("#resumeTimerSkySword"),
    pauseBtn: $("#pauseTimerSkySword"),
    resetBtn: $("#resetTimerSkySword"),
    display: {
      timer: $("#display-timer-skysword"),
      progressBar: $("#timer-progressbar-skysword"),
      hidedContent: $("#hided-content-skysword"),
    },
  };

  let skydariaOlympe = {
    pause: false,
    updateTimer: null,
    currentTimer: 0,
    timerToBeDisplayed: cooldown.skydariaOlympe,
    playOneTime: true,
    startBtn: $("#startTimerSkydariaOlympe"),
    resumeBtn: $("#resumeTimerSkydariaOlympe"),
    pauseBtn: $("#pauseTimerSkydariaOlympe"),
    resetBtn: $("#resetTimerSkydariaOlympe"),
    display: {
      timer: $("#display-timer-skydariaolympe"),
      progressBar: $("#timer-progressbar-skydariaolympe"),
      hidedContent: $("#hided-content-skydariaolympe"),
    },
  };

  let skydariaPirate = {
    pause: false,
    updateTimer: null,
    currentTimer: 0,
    timerToBeDisplayed: cooldown.skydariaPirate,
    playOneTime: true,
    startBtn: $("#startTimerSkydariaPirate"),
    resumeBtn: $("#resumeTimerSkydariaPirate"),
    pauseBtn: $("#pauseTimerSkydariaPirate"),
    resetBtn: $("#resetTimerSkydariaPirate"),
    display: {
      timer: $("#display-timer-skydariapirate"),
      progressBar: $("#timer-progressbar-skydariapirate"),
      hidedContent: $("#hided-content-skydariapirate"),
    },
  };

  let hadaria = {
    pause: false,
    updateTimer: null,
    currentTimer: 0,
    timerToBeDisplayed: cooldown.hadaria,
    playOneTime: true,
    startBtn: $("#startTimerHadaria"),
    resumeBtn: $("#resumeTimerHadaria"),
    pauseBtn: $("#pauseTimerHadaria"),
    resetBtn: $("#resetTimerHadaria"),
    display: {
      timer: $("#display-timer-hadaria"),
      progressBar: $("#timer-progressbar-hadaria"),
      hidedContent: $("#hided-content-hadaria"),
    },
  };

  /*

  SkySword

  */

  skySword.resetBtn.click(function () {
    clearInterval(skySword.updateTimer);
    skySword = {
      ...skySword,
      pause: false,
      currentTimer: 0,
      timerToBeDisplayed: cooldown.skySword,
      playOneTime: true,
    };
    skySword.display.progressBar.width("0%");
    skySword.resumeBtn.css("display", "none");
    skySword.startBtn.css("display", "inline");
    skySword.resetBtn.prop("disabled", true);
    skySword.pauseBtn.prop("disabled", true);
    skySword.display.hidedContent.css("display", "none");
    skySword.display.timer.html("");
  });
  skySword.pauseBtn.click(function () {
    skySword.pause = true;
    skySword.resumeBtn.prop("disabled", false);
    skySword.pauseBtn.prop("disabled", true);
  });
  skySword.resumeBtn.click(function () {
    skySword.pause = false;
    skySword.resumeBtn.prop("disabled", true);
    skySword.pauseBtn.prop("disabled", false);
  });
  skySword.startBtn.click(function () {
    skySword.startBtn.css("display", "none");
    skySword.pauseBtn.prop("disabled", false);
    skySword.resetBtn.prop("disabled", false);
    skySword.resumeBtn.css("display", "inline");
    skySword.resumeBtn.prop("disabled", true);

    skySword.updateTimer = setInterval(function () {
      if (!skySword.pause) {
        skySword.currentTimer += 1000;
        skySword.timerToBeDisplayed -= 1000;

        const minutes = Math.floor(
          (skySword.timerToBeDisplayed % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
          (skySword.timerToBeDisplayed % (1000 * 60)) / 1000
        );

        const widthToSet = (skySword.currentTimer / cooldown.skySword) * 100;

        skySword.display.timer.html(minutes + "m " + seconds + "s ");

        skySword.display.hidedContent.css("display", "flex");
        skySword.display.progressBar.width(widthToSet + "%");

        if (skySword.currentTimer >= cooldown.skySword - preventTiming) {
          if (skySword.playOneTime) {
            skySword.playOneTime = false;
            audioToPlay.play();
          }
        }

        if (skySword.currentTimer == cooldown.skySword) {
          skySword.playOneTime = true;
          skySword.currentTimer = 0;
          skySword.timerToBeDisplayed = cooldown.skySword;
        }
      }
    }, 1000);
  });

  /*

  Skydaria Olympe

  */

  skydariaOlympe.resetBtn.click(function () {
    clearInterval(skydariaOlympe.updateTimer);
    skydariaOlympe = {
      ...skydariaOlympe,
      pause: false,
      currentTimer: 0,
      timerToBeDisplayed: cooldown.skydariaOlympe,
      playOneTime: true,
    };
    skydariaOlympe.display.progressBar.width("0%");
    skydariaOlympe.resumeBtn.css("display", "none");
    skydariaOlympe.startBtn.css("display", "inline");
    skydariaOlympe.resetBtn.prop("disabled", true);
    skydariaOlympe.pauseBtn.prop("disabled", true);
    skydariaOlympe.display.hidedContent.css("display", "none");
    skydariaOlympe.display.timer.html("");
  });
  skydariaOlympe.pauseBtn.click(function () {
    skydariaOlympe.pause = true;
    skydariaOlympe.resumeBtn.prop("disabled", false);
    skydariaOlympe.pauseBtn.prop("disabled", true);
  });
  skydariaOlympe.resumeBtn.click(function () {
    skydariaOlympe.pause = false;
    skydariaOlympe.resumeBtn.prop("disabled", true);
    skydariaOlympe.pauseBtn.prop("disabled", false);
  });
  skydariaOlympe.startBtn.click(function () {
    skydariaOlympe.startBtn.css("display", "none");
    skydariaOlympe.pauseBtn.prop("disabled", false);
    skydariaOlympe.resetBtn.prop("disabled", false);
    skydariaOlympe.resumeBtn.css("display", "inline");
    skydariaOlympe.resumeBtn.prop("disabled", true);

    skydariaOlympe.updateTimer = setInterval(function () {
      if (!skydariaOlympe.pause) {
        skydariaOlympe.currentTimer += 1000;
        skydariaOlympe.timerToBeDisplayed -= 1000;

        const minutes = Math.floor(
          (skydariaOlympe.timerToBeDisplayed % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
          (skydariaOlympe.timerToBeDisplayed % (1000 * 60)) / 1000
        );

        const widthToSet =
          (skydariaOlympe.currentTimer / cooldown.skydariaOlympe) * 100;

        skydariaOlympe.display.timer.html(minutes + "m " + seconds + "s ");

        skydariaOlympe.display.hidedContent.css("display", "flex");
        skydariaOlympe.display.progressBar.width(widthToSet + "%");

        if (
          skydariaOlympe.currentTimer >=
          cooldown.skydariaOlympe - preventTiming
        ) {
          if (skydariaOlympe.playOneTime) {
            skydariaOlympe.playOneTime = false;
            audioToPlay.play();
          }
        }

        if (skydariaOlympe.currentTimer == cooldown.skydariaOlympe) {
          skydariaOlympe.playOneTime = true;
          skydariaOlympe.currentTimer = 0;
          skydariaOlympe.timerToBeDisplayed = cooldown.skydariaOlympe;
        }
      }
    }, 1000);
  });

  /*

  Skydaria Pirate

  */

  skydariaPirate.resetBtn.click(function () {
    clearInterval(skydariaPirate.updateTimer);
    skydariaPirate = {
      ...skydariaPirate,
      pause: false,
      currentTimer: 0,
      timerToBeDisplayed: cooldown.skydariaPirate,
      playOneTime: true,
    };
    skydariaPirate.display.progressBar.width("0%");
    skydariaPirate.resumeBtn.css("display", "none");
    skydariaPirate.startBtn.css("display", "inline");
    skydariaPirate.resetBtn.prop("disabled", true);
    skydariaPirate.pauseBtn.prop("disabled", true);
    skydariaPirate.display.hidedContent.css("display", "none");
    skydariaPirate.display.timer.html("");
  });
  skydariaPirate.pauseBtn.click(function () {
    skydariaPirate.pause = true;
    skydariaPirate.resumeBtn.prop("disabled", false);
    skydariaPirate.pauseBtn.prop("disabled", true);
  });
  skydariaPirate.resumeBtn.click(function () {
    skydariaPirate.pause = false;
    skydariaPirate.resumeBtn.prop("disabled", true);
    skydariaPirate.pauseBtn.prop("disabled", false);
  });
  skydariaPirate.startBtn.click(function () {
    skydariaPirate.startBtn.css("display", "none");
    skydariaPirate.pauseBtn.prop("disabled", false);
    skydariaPirate.resetBtn.prop("disabled", false);
    skydariaPirate.resumeBtn.css("display", "inline");
    skydariaPirate.resumeBtn.prop("disabled", true);

    skydariaPirate.updateTimer = setInterval(function () {
      if (!skydariaPirate.pause) {
        skydariaPirate.currentTimer += 1000;
        skydariaPirate.timerToBeDisplayed -= 1000;

        const minutes = Math.floor(
          (skydariaPirate.timerToBeDisplayed % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
          (skydariaPirate.timerToBeDisplayed % (1000 * 60)) / 1000
        );

        const widthToSet =
          (skydariaPirate.currentTimer / cooldown.skydariaPirate) * 100;

        skydariaPirate.display.timer.html(minutes + "m " + seconds + "s ");

        skydariaPirate.display.hidedContent.css("display", "flex");
        skydariaPirate.display.progressBar.width(widthToSet + "%");

        if (
          skydariaPirate.currentTimer >=
          cooldown.skydariaPirate - preventTiming
        ) {
          if (skydariaPirate.playOneTime) {
            skydariaPirate.playOneTime = false;
            audioToPlay.play();
          }
        }

        if (skydariaPirate.currentTimer == cooldown.skydariaPirate) {
          skydariaPirate.playOneTime = true;
          skydariaPirate.currentTimer = 0;
          skydariaPirate.timerToBeDisplayed = cooldown.skydariaPirate;
        }
      }
    }, 1000);
  });

  /*

  Hadaria

  */

  hadaria.resetBtn.click(function () {
    clearInterval(hadaria.updateTimer);
    hadaria = {
      ...hadaria,
      pause: false,
      currentTimer: 0,
      timerToBeDisplayed: cooldown.hadaria,
      playOneTime: true,
    };
    hadaria.display.progressBar.width("0%");
    hadaria.resumeBtn.css("display", "none");
    hadaria.startBtn.css("display", "inline");
    hadaria.resetBtn.prop("disabled", true);
    hadaria.pauseBtn.prop("disabled", true);
    hadaria.display.hidedContent.css("display", "none");
    hadaria.display.timer.html("");
  });
  hadaria.pauseBtn.click(function () {
    hadaria.pause = true;
    hadaria.resumeBtn.prop("disabled", false);
    hadaria.pauseBtn.prop("disabled", true);
  });
  hadaria.resumeBtn.click(function () {
    hadaria.pause = false;
    hadaria.resumeBtn.prop("disabled", true);
    hadaria.pauseBtn.prop("disabled", false);
  });
  hadaria.startBtn.click(function () {
    hadaria.startBtn.css("display", "none");
    hadaria.pauseBtn.prop("disabled", false);
    hadaria.resetBtn.prop("disabled", false);
    hadaria.resumeBtn.css("display", "inline");
    hadaria.resumeBtn.prop("disabled", true);

    hadaria.updateTimer = setInterval(function () {
      if (!hadaria.pause) {
        hadaria.currentTimer += 1000;
        hadaria.timerToBeDisplayed -= 1000;

        const minutes = Math.floor(
          (hadaria.timerToBeDisplayed % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
          (hadaria.timerToBeDisplayed % (1000 * 60)) / 1000
        );

        const widthToSet = (hadaria.currentTimer / cooldown.hadaria) * 100;

        hadaria.display.timer.html(minutes + "m " + seconds + "s ");

        hadaria.display.hidedContent.css("display", "flex");
        hadaria.display.progressBar.width(widthToSet + "%");

        if (hadaria.currentTimer >= cooldown.hadaria - preventTiming) {
          if (hadaria.playOneTime) {
            hadaria.playOneTime = false;
            audioToPlay.play();
          }
        }

        if (hadaria.currentTimer == cooldown.hadaria) {
          hadaria.playOneTime = true;
          hadaria.currentTimer = 0;
          hadaria.timerToBeDisplayed = cooldown.hadaria;
        }
      }
    }, 1000);
  });
});
