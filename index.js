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
    // find element that user chose
    const chosenScore = scoreArray.filter(".clicked");
    const points = scoreArray.index(chosenScore) + 1;

    while (true) {
        if (hasClickedClass === true) {
            $("#rating").fadeOut("slow", function () {
                $("#rating").hide();
                $("#score").html(` ${points} `);
                $("#thank-you").fadeIn("slow");
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
