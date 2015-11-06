/* your code should go here */
var tmpl="<li id=\"N\" class=\"done\">"+
         "<h3>NUM</h3> "   +
         "</li>";

// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet

$(document).ready(function(){

    var counter = 0;
    $("#gattino").click(function(){
        counter++;
        $("#counter").html(counter);
    });
});







