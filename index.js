let rollSequence = [];

//Make custom options visible
$(".custom").click(function(){
    $("#ndice").css("visibility", "visible");
    $(".rollcustom").css("visibility", "visible");
});

//Roll standard die
$(".dice").click(function(e){
    //Get how many dice to roll
    let diceToRoll = document.querySelector("#dquantity").value;
    let diceType = e.target.id;

    let result = 0;
    let record = "";

    //Call the function that generates a random number
    //Repeat n times where n = dice to roll
    for(i = 0; i < diceToRoll; i++)
    {
        let n = RandomNum(e);
        result += n;
        
        if(diceToRoll == 1)
            record = `${n}`;
        else if(i === diceToRoll - 1)
            record += `${n} = ${result}`;
        else
            record += `${n} + `;
    }

    //Create rollSequence, an array that contains all dice roll, from last to first
    let newRoll = `roll ${diceToRoll}d${diceType}: ${record}`;
    rollSequence.unshift(newRoll);
    //Show rollSequence (TO DO: show each element on a new line)
    document.getElementById("record").value = rollSequence.toString();
});

//Roll custom die (TO DO: improve this function)
$(".rollcustom").click(function(e){
    //Get how many dice to roll
    let diceToRoll = document.querySelector("#dquantity").value;
    let result = 0;
    let record = "";

    //Generate random number between 1 and n. sides of custom die
    //Repeat n times where n = dice to roll
    for(i = 0; i < diceToRoll; i++)
    {
        let customsides = document.querySelector("#ndice").value;
        let num = Math.floor(Math.random() * customsides + 1);
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
    let sides = e.target.id;
    
    //Generate random number between 1 and n. sides
    let n = Math.floor(Math.random() * sides + 1);
    return n;
}
