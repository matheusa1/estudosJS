const init = () => {
  let timer;

  hour = 0;
  minute = 0;
  seconds = 0;
  const timer1 = document.querySelector(".time");

  document.addEventListener("click", (e) => {
    const el = e.target;

    const accepted = {
      start: () => {
        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
        timer1.classList.remove("stopTimer");
      },
      stop: () => {
        clearInterval(timer);
        timer1.classList.add("stopTimer");
      },
      reset: () => {
        ResetTimer();
        timer1.classList.remove("stopTimer");
      },
    };

    if (el.classList[0] in accepted) accepted[el.classList[0]]();
  });

  const FormatTimer = () => {
    seconds === 60 ? ((seconds = 0), (minute = Number(minute) + 1)) : null;
    minute === 60 ? ((minute = 0), (hour = Number(hour) + 1)) : null;
  };

  const printTimer = () => {
    timer1.innerHTML = `${hour > 9 ? hour : "0" + hour}:${
      minute > 9 ? minute : "0" + minute
    }:${seconds > 9 ? seconds : "0" + seconds}`;
  };

  const ResetTimer = () => {
    hour = 0;
    minute = 0;
    seconds = 0;

    printTimer();
  };

  const updateTimer = () => {
    seconds = Number(seconds) + 1;
    FormatTimer();
    printTimer();
  };
};

init();
