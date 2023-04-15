const date = document.getElementById("date");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const clock = setInterval(function time() {
  let dateToday = new Date();
  let localDate =
    dateToday.getDate() +
    " / " +
    (dateToday.getMonth() + 1) +
    " / " +
    dateToday.getFullYear();

  let hrs = dateToday.getHours();
  let mins = dateToday.getMinutes();
  let scs = dateToday.getSeconds();

  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (scs < 10) {
    scs = "0" + scs;
  }

  date.textContent = localDate;
  hours.textContent = hrs;
  minutes.textContent = mins;
  seconds.textContent = scs;
});
