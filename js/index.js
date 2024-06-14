$(document).ready(function() {
    console.log("JavaScript file is loaded correctly.");

    // Event listener for card buttons
    $(".card-button").click(function() {
        console.log("Card button was clicked!");
// Additional UI interaction: Change button color to indicate it was clicked
        $(this).css("background-color", "#2B0150");
    });
});
 // Event listener for card buttons hover
 $(".card-button").hover(
    function() {
        // Mouse enters the element
        $(this).css({
            "background-color": "#FFFFFF",
            "border-color": "#FFFFFF"
        });
        $(this).css("color", "#5A00A7"); // Change the arrow color to #5A00A7
    }, 
    function() {
        // Mouse leaves the element
        $(this).css({
            "background-color": "#5A00A7",
            "border-color": "#5A00A7"
        });
        $(this).css("color", "#FFFFFF"); // Revert the arrow color to #FFFFFF
    }
);
