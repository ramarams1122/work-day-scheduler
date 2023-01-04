  // Display today's day, date and time
var todayDate = dayjs().format('dddd - DD/MM/YYYY    hh:mm:ss');
$("#currentDay").html(todayDate);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // Add a listener for click events on the save button. This code should
  $(".saveBtn").on("click", function () {

    // Reference in the click listener
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save in local storage
    localStorage.setItem(time, text);
  })
  function timeTracker() {

    var timeNow = dayjs().hour();

    // Time blocks and id to check
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);
    console.log(blockTime)
    console.log(timeNow)

  // The past, present, or future time blocks
      if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }
  
  // user inpur saved in local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  timeTracker();
})