function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridiem = hours < 12 ? "AM" : "PM";
  
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    // Add leading zeros to minutes and seconds if less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    let timeString = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    document.getElementById("time").innerHTML = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();


  function updateTime() {
    var now = new Date();
    var timeElement = document.getElementById('time');
    var dateElement = document.getElementById('date');

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    var dateString = now.toDateString();

    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Call updateTime every second to update the clock
setInterval(updateTime, 1000);
  