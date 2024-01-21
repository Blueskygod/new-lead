let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minsItem = document.querySelector("#mins");
let secsItem = document.querySelector("#secs");

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

let hideafter = document.getElementById("time");

/*
//sector of timer
let countDown = () => {
    let futureDate = new Date("18 January 2024 00:37:00");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;


    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

    let hours = Math.floor(myDate / 1000 / 60 / 60 / 60 ) % 24;

    let mins = Math.floor(myDate / 1000 / 60) % 60;

    let secs = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minsItem.innerHTML = mins;
    secsItem.innerHTML = secs;

countDown()
setInterval(countDown, 1000)
*/
var countDownDate = new Date("18 March, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
//  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
//  + minutes + "m " + seconds + "s ";

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minsItem.innerHTML = minutes;
  secsItem.innerHTML = seconds;

  // If the count down is finished, show the content and hide the timer
  if (distance < 0) {
    clearInterval(x);

   // document.getElementById("timer").style.display = "none";
    // document.getElementsByClassName("content")[0].style.display = "block";
    hideafter.style.display = "none"
  }
}, 1000);

// SEctor of the quote box
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---by " + author.innerHTML , "tweet Window", "widdth=600, height=300");
}

