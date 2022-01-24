//let rollSequence = [];

//Make custom options visible
$(".custom").click(function(){
    $("#ndice").css("visibility", "visible");
    $(".rollcustom").css("visibility", "visible");
});

//Roll standard die
$(".dice").click(function(e){
    //Get how many dice to roll
    var diceToRoll = document.querySelector("#dquantity").value;
    var diceType = e.target.id;

    var result = 0;
    var record = "";

    //Call the function that generates a random number
    //Repeat n times where n = dice to roll
    for(i = 0; i < diceToRoll; i++)
    {
        var n = RandomNum(e);
        result += n;
        
        if(diceToRoll == 1)
            record = `${n}`;
        else if(i === diceToRoll - 1)
            record += `${n} = ${result}`;
        else
            record += `${n} + `;
    }

    document.getElementById("record").value = `roll ${diceToRoll}d${diceType}: ${record}`;
    //rollSequence.push(record);
});

//Roll custom die (TO DO: improve this function)
$(".rollcustom").click(function(e){
    //Get how many dice to roll
    var diceToRoll = document.querySelector("#dquantity").value;
    var result = 0;
    var record = "";

    //Generate random number between 1 and n. sides of custom die
    //Repeat n times where n = dice to roll
    for(i = 0; i < diceToRoll; i++)
    {
        var customsides = document.querySelector("#ndice").value;
        var num = Math.floor(Math.random() * customsides + 1);
        result += num;

        if(diceToRoll == 1)
            record = `${num}`;
        else if(i === diceToRoll - 1)
            record += `${num} = ${result}`;
        else
            record += `${num} + `;
    }

    document.getElementById("record").value = `roll ${diceToRoll} custom dice: ${record}`;
});

//Reset all dice rolls and results
$(".reset").click(function(){
    $("#ndice").css("visibility", "hidden");
    $(".rollcustom").css("visibility", "hidden");
    $("#result").attr("value", 0);
    $(".d_quantity").val(1);
    document.querySelector("#ndice").value = 1;
    document.getElementById("record").value = "";
});

////////////////////////////////////
//Function to generate a random number
function RandomNum(e){
    //Get the id of the clicked button
    var sides = e.target.id;
    
    //Generate random number between 1 and n. sides
    var n = Math.floor(Math.random() * sides + 1);
    return n;
}
