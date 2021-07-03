// it will provide the date for the day
var dateToday = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(dateToday);

$(document).ready(function () {
    // click event listener for save button
    $(".saveBtn").on("click", function () {
        // To pass relative values of the description in jQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // to save input description to the relative date
        localStorage.setItem(time, text);
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

    function hourChecker() {
        //set present time by hourly.
        var currentTime = moment().hour();

        // set up time blocks according to indicators
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To match the background indicators class according to the time
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
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



    hourChecker();
})