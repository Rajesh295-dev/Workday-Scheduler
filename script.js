// currentDay date and time
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);


$("document").ready(function () {

    // click listener for saveBtn
    $(".saveBtn").on("click", function () {
        // To pass relative values of the description in jQuery
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // to save input description to the realtive date
        localStorage.setItem(time, input);
    })

    // to access saved input from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    function timeChecker() {
        //set present time by hourly.
        var presentTime = moment().hour();

        // set up time blocks realtive to indicators
        $(".time-block").each(function () {
            var relativeTime = parseInt($(this).attr("id").split("hour")[1]);
         // To match the background indicators class according to the time
         if (relativeTime < presentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (relativeTime === presentTime) {
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

    timeChecker();


})