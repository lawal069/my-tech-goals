// JavaScript to display current time in UTC and current day of the week
document.addEventListener("DOMContentLoaded", () => {
  const utcTimeElement = document.getElementById("utcTime");
  const currentDayElement = document.getElementById("currentDay");

  function updateDateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });

    utcTimeElement.textContent = utcTime;
    currentDayElement.textContent = currentDay;
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);
});
