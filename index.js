let rollSequence = [];

//---Make custom options visible---
$(".custom").click(function(){
    $("#ndice").css("visibility", "visible");
    $(".rollcustom").css("visibility", "visible");
});

//---Roll standard die---
$(".dice").click(function(){
    //Get how many dice to roll
    let diceToRoll = document.querySelector("#dquantity").value;
    let diceType = $(this).attr("id");

    let result = 0;
    let record = "";

    result = addModifier(result);
    record = calculate(diceToRoll, diceType, result, record);
    printRollSequence(diceToRoll, diceType, record);
});

//---Roll custom die---
$(".rollcustom").click(function(){
    //Get how many dice to roll
    let diceToRoll = document.querySelector("#dquantity").value;
    let diceType = $("#ndice").val();

    let result = 0;
    let record = "";

    result = addModifier(result);
    record = calculate(diceToRoll, diceType, result, record);
    printRollSequence(diceToRoll, diceType, record);
});

//---Reset all dice rolls and results---
$(".reset").click(function(){
    //Hide custom buttons
    $("#ndice").css("visibility", "hidden");
    $(".rollcustom").css("visibility", "hidden");

    //Set dice quantity to 1
    $(".d_quantity").val(1);

    //Set n. dice to 1
    document.querySelector("#ndice").value = 1;

    //Set modifier to 0
    $(".modifier").val(0);

    //Empty textarea and reset rollSequence (array of recorded dice rolls)
    document.getElementById("record").value = "";
    rollSequence = [];
});

////////////////////////////////////
//Generate a random number
function randomNum(dt){    
    //Generate random number between 1 and n. sides
    let n = Math.floor(Math.random() * dt + 1);
    return n;
}

//Add modifier to result
function addModifier(r){
    //Get modifier value
    let modif = parseInt(document.querySelector("#modifier").value);
    //Add modifier to result
    r += modif;
    return r;
}

//Calculate result and record it in a string
function calculate(dtr, dt, res, rec){
    for(i = 0; i < dtr; i++)
    {
        let n = randomNum(dt);
        res += n;
        
        if(dtr == 1)
            rec = `${res}`;
        else if(i === dtr - 1)
            rec += `${n} = ${res}`;
        else
            rec += `${n} + `;
    }

    return rec;
}

//Function to print roll sequence
function printRollSequence(dtr, dt, rec){
    //Add newRoll to rollSequence (an array that contains all dice roll, from last to first)
    let newRoll = `roll ${dtr}d${dt} +(${document.querySelector("#modifier").value}): ${rec}\n`;
    rollSequence.unshift(newRoll);
    //Show rollSequence in textarea
    document.getElementById("record").value = rollSequence.join('').toString();
}
