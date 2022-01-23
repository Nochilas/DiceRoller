//Make custom options visible
$(".custom").click(function(){
    $("#ndice").css("visibility", "visible");
    $(".rollcustom").css("visibility", "visible");
});

//Roll standard die
$(".dice").click(function(e){
    //Get how many dice to roll
    var diceToRoll = document.querySelector("#dquantity").value;
    var result = 0;

    //Call the function that generates a random number
    //Repeat n times where n = dice to roll
    for(i = 0; i < diceToRoll; i++)
        result += RandomNum(e);
    
    $("#result").attr("value", result);
});

//Roll custom die
$(".rollcustom").click(function(){
    //Get how many dice to roll
    var diceToRoll = document.querySelector("#dquantity").value;
    var result = 0;

    //Generate random number between 1 and n. sides of custom die
    //Repeat n times where n = dice to roll
    for(i = 0; i < diceToRoll; i++)
    {
        var customsides = document.querySelector("#ndice").value;
        var num = Math.floor(Math.random() * customsides + 1);
        result += num;
    }

    $("#result").attr("value", result);
});

//Function to reset all dice rolls
$(".reset").click(function(){
    $("#ndice").css("visibility", "hidden");
    $(".rollcustom").css("visibility", "hidden");
    $("#result").attr("value", 0);
    $(".d_quantity").val(1);
    document.querySelector("#ndice").value = 1;
});

//Function to generate a random number
function RandomNum(e){
    //Get the id of the clicked button
    var sides = e.target.id;
    
    //Generate random number between 1 and n. sides
    var n = Math.floor(Math.random() * sides + 1);
    return n;
}