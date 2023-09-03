function getCurrentDateAndTime() {
  const dateTime = new Date();
  return dateTime.toLocaleString();
}
const dateDisplay = document.getElementById("datetime");

dateDisplay.value = getCurrentDateAndTime();

