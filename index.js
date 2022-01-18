//Get the id of the clicked button
$(".dice").click(function(e){
    //Call function that generates a random number
    RandomNum(e);
});

//Make custom options visible
$(".custom").click(function(){
    $("#ndice").css("visibility", "visible");
    $(".rollcustom").css("visibility", "visible");

    $(".rollcustom").click(function(){
        var customsides = document.querySelector("#ndice").value;
        var num = Math.floor(Math.random() * customsides + 1);
        $("#result").attr("value", num);
    });

    document.querySelector("#ndice").value = 0;
});

//Function to reset all dice rolls
$(".reset").click(function(){
    $("#ndice").css("visibility", "hidden");
    $(".rollcustom").css("visibility", "hidden");
    $("#result").attr("value", 0);
});

//Function to generate a random number
function RandomNum(e){
    var sides = e.target.id;
    
    var num = Math.floor(Math.random() * sides + 1);
    $("#result").attr("value", num);
}