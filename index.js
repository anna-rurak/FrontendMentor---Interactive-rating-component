// - View the optimal layout for the app depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Select and submit a number rating
// - See the "Thank you" card state after submitting a rating

function toggleCards() {
    $("#rating").hide();
    $("#thank-you").show();
}

$(document).ready(function () {
    $("#rating").show();
    $("#thank-you").hide();
});

$(".point").on("click", function () {
    $(".point").removeClass("clicked");
    $(this).toggleClass("clicked");
});

$("button").on("click", function () {
    // checking if the score was choosen
    const scoreArray = $(".point");
    const hasClickedClass = scoreArray.hasClass("clicked");

    while (true) {
        if (hasClickedClass === true) {
            $("#rating").animate({ opacity: 0 }, 500, function () {
                $("#rating").hide();
                $("#thank-you").animate({ opacity: 1 }, 700).show();
            });
            break;
        } else {
            alert("You have to chose the score :)");
            break;
        }
    }
});

//change speed of the animation
// add sohwing how many points someone has chosen
// commit, push
