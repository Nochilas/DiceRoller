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

    //Add newRoll to rollSequence (an array that contains all dice roll, from last to first)
    let newRoll = `roll ${diceToRoll}d${diceType}: ${record}\n`;
    rollSequence.unshift(newRoll);
    //Show rollSequence in textarea
    document.getElementById("record").value = rollSequence.join('').toString();
});

//Roll custom die (TO DO: improve this function)
$(".rollcustom").click(function(){
    //Get how many dice to roll
    let diceToRoll = document.querySelector("#dquantity").value;
    let result = 0;
    let record = "";
    let diceType = $("#ndice").val();

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

    //Add newCustomRoll to rollSequence (an array that contains all dice roll, from last to first)
    let newCustomRoll = `roll ${diceToRoll}d${diceType}: ${record}\n`;
    rollSequence.unshift(newCustomRoll);
    //Show rollSequence in textarea
    document.getElementById("record").value = rollSequence.join('').toString();
});

//Reset all dice rolls and results
$(".reset").click(function(){
    //Hide custom buttons
    $("#ndice").css("visibility", "hidden");
    $(".rollcustom").css("visibility", "hidden");

    //Set dice quantity to 1
    $(".d_quantity").val(1);
    //Set n. dice to 1
    document.querySelector("#ndice").value = 1;
    //Empty textarea and reset rollSequence (array of recorded dice rolls)
    document.getElementById("record").value = "";
    rollSequence = [];
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
