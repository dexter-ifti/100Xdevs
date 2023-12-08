/**
 * Creates a terminal clock displaying the current Time in HH:MM:SS format.
 */


// function for handling single digit values and adding a leading zero
function formatWithLeadingZero(value){
    return value < 10 ? "0" + value : value;
}

// function for getting the current time
function getCurrentTime() {
  const now = new Date();
  const hours =  formatWithLeadingZero(now.getHours());
  const minute = formatWithLeadingZero(now.getMinutes());
  const second = formatWithLeadingZero(now.getSeconds());
  console.log(`${hours} : ${minute} : ${second}`);
}

// call the getCurrentTime function every second
setInterval(getCurrentTime, 1000);

// call the getCurrentTime function once
getCurrentTime();