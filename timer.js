// Set the date we're counting down to
var countDownDate = new Date("Nov 10, 2022 11:00").getTime();

function timePart(val,text,color="Green"){
  return `<h1 class="timer" style="color:${color};">${val}<div>${text}</div></h1>`
}

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Display the result in the element with id="demo"

 let res = timePart(days,'days') + timePart(hours,'hours') + timePart(minutes,'Mins')  + timePart(seconds,'Seconds','red');
document.getElementById("timer").innerHTML = res

  // If the count down is finished, write some text 
 if (distance < 0) {
    clearInterval(x);

document.getElementById("timer").innerHTML = "Sale Completed";
  }
}, 1000);