const countdown = () => {
  let date = new Date(1656746854780).getTime();
  const now = new Date().getTime();
  const difference = date - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(difference / days);
  let timeHours = Math.floor((difference % days) / hours);
  let timeMinutes = Math.floor((difference % hours) / minutes);
  let timeSeconds = Math.floor((difference % minutes) / seconds);
  timeDays = timeDays < 10 ? `0${timeDays}` : timeDays;
  timeHours = timeHours < 10 ? `0${timeHours}` : timeHours;
  timeMinutes = timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes;
  timeSeconds = timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds;

  document.getElementById("day").innerHTML = timeDays;
  document.getElementById("hour").innerHTML = timeHours;
  document.getElementById("minute").innerHTML = timeMinutes;
  document.getElementById("second").innerHTML = timeSeconds;
};
countdown();
setInterval(countdown, 1000);
