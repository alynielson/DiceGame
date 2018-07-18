"use strict";

function rollDie() {
    let rollResult = getRollResult();
    let diceSides = getDiceSidesFromActiveButton();
    document.getElementById("roll-result").innerHTML = rollResult;
    document.getElementById("result-message").innerHTML = "You just rolled the d" + diceSides + " and got " + rollResult + ".";
    decideWhatToDoNext(diceSides, rollResult);
}

function getRollResult() {
    let diceSides = getDiceSidesFromActiveButton();
    let rollResult = Math.floor((Math.random() * diceSides) + 1);
    return rollResult;
}

function getCurrentlyActiveDiceButton() {
    let currentlyActiveButton = document.getElementsByClassName("dice-button active");
    return currentlyActiveButton[0];
}

function changeButtonToNotActive(currentlyActiveButton) {
    currentlyActiveButton.className = currentlyActiveButton.className.replace(" active","");
}

function changeButtonToActive(clickedButton) {
    clickedButton.className += " active";
}

function clickDiceButton(clickedButton) {
    let currentlyActiveButton = getCurrentlyActiveDiceButton(); 
    changeButtonToNotActive(currentlyActiveButton);
    changeButtonToActive(clickedButton);
}

function getActiveButtonId(currentlyActiveButton) {
    let diceButtonId = currentlyActiveButton.id;
    return diceButtonId;
}

function getDiceSidesFromDiceId(id) {
    let diceSides = Number(id);
    return diceSides;
}

function getDiceSidesFromActiveButton() {
    let currentlyActiveButton = getCurrentlyActiveDiceButton();
    let diceButtonId = getActiveButtonId(currentlyActiveButton);
    let diceSides = getDiceSidesFromDiceId(diceButtonId);
    return diceSides;
}

function getLuckyNumberInitially(diceSides, rollResult) {
    if (diceSides === 10 && rollResult === 10) {
        rollResult = 0;
        document.getElementById("lucky-number").innerText = "Your lucky number: " + rollResult;
        document.getElementById("lucky-number").value = rollResult;
        document.getElementById("last-step").innerText = "";
        document.getElementById("next-step").innerText = "Now roll the d10 to get your kryptonite number.";
        document.getElementById("info-next-step").innerText = "This number is bad for you. If your score ever ends in your kryptonite number, you lose points. 10 means 0.";
    }
    else if (diceSides === 10) {
        document.getElementById("lucky-number").innerText = "Your lucky number: " + rollResult;
        document.getElementById("lucky-number").value = rollResult;
        document.getElementById("last-step").innerText = "";
        document.getElementById("next-step").innerText = "Now roll the d10 to get your kryptonite number.";
        document.getElementById("info-next-step").innerText = "This number is bad for you. If your score ever ends in your kryptonite number, you lose points. 10 means 0.";
    }
    else {
        document.getElementById("last-step").innerText = "You didn't roll the d10! Try again."
    }
}

function getKryptoniteInitially(diceSides,rollResult) {
    let luckyNumber = getLuckyNumber();
    if (diceSides === 10){
        if ((luckyNumber === rollResult) || (luckyNumber === 10 && rollResult === 0)) {
            document.getElementById("last-step").innerText = "Your kryptonite can't be the same as your lucky number! Roll again.";
        }
        else if (rollResult === 10) {
            rollResult = 0;
            document.getElementById("kryptonite").innerText = "Your kryptonite: " + rollResult;
            document.getElementById("kryptonite").value = rollResult;
            document.getElementById("last-step").innerText = "";
            document.getElementById("next-step").innerText = "Now it's time to fight your first monster. Roll the d20 to get their strength.";
            document.getElementById("info-next-step").innerText = "";
            document.getElementById("total-score").innerText = "Your score is 0.";
        }
        else {
            document.getElementById("kryptonite").innerText = "Your kryptonite: " + rollResult;
            document.getElementById("kryptonite").value = rollResult;
            document.getElementById("last-step").innerText = "";
            document.getElementById("next-step").innerText = "Now it's time to fight your first monster. Roll the d20 to get their strength.";
            document.getElementById("info-next-step").innerText = "";
            document.getElementById("total-score").innerText = "Your score is 0.";
        }
    }
    else {
        document.getElementById("last-step").innerText = "You didn't roll the d10! Try again.";
    }
}

function getLuckyNumber() {
    let luckyNumber = document.getElementById("lucky-number").value;
    return luckyNumber;
}

function getKryptonite() {
    let kryptonite = document.getElementById("kryptonite").value;
    return kryptonite;
}

function checkIfActionPresent(){
    if (!document.getElementById("current-action").value) {
        return false;
    } 
    else {
        return true;
    }
}

function getCurrentAction() {
    let currentAction;
    if (document.getElementById("current-action").value === 1) {
        currentAction = 1;
    }
    else if (document.getElementById("current-action").value === 2) {
        currentAction = 2;
    }
    else if (document.getElementById("current-action").value === 3) {
        currentAction = 3;
    }
    return currentAction;
}

function getMonsterStrength(diceSides, rollResult) {
    if (diceSides === 20) {
        document.getElementById("info-last-step").innerText = "";
        let monsterStrength = rollResult;
        document.getElementById("next-step").innerText = "Your monster has a strength of " + monsterStrength + "!";
        document.getElementById("info-next-step").innerText = "Now roll three times in a row. Choose any dice to roll each time. If the sum is greater than (or equal to) the monster's strength, you get the monster's strength minus the amount you were over. If less, you lose, and your score goes down by the monster's strength. You have to roll three times no matter what.";
        document.getElementById("monster-strength").value = monsterStrength;
        document.getElementById("last-step").innerText = "";
    }
    else {
        document.getElementById("last-step").innerText = "You didn't roll the d20! Try again.";
    }
}

function checkIfMonsterStrengthExists() { 
    if (!document.getElementById("monster-strength").value) {
        return false;
    }
    else {
        return true;
    }
}

function getValueOfMonsterStrength() {
    let monsterStrength = document.getElementById("monster-strength").value;
    return monsterStrength;
}

function rollAgainstMonster(diceSides,rollResult) {
    if (!document.getElementById("roll-result1").innerText) {
        document.getElementById("roll-result1").innerText = rollResult;
        document.getElementById("roll-result1").value = rollResult;
    }
    else if (!document.getElementById("roll-result2").innerText) {
        document.getElementById("roll-result2").innerText = rollResult;
        document.getElementById("roll-result2").value = rollResult;
    }
    else if (!document.getElementById("roll-result3").innerText) {
        document.getElementById("roll-result3").innerText = rollResult;
        document.getElementById("roll-result3").value = rollResult;
    }
}

function getMonsterRollSum() {
    let roll1 = document.getElementById("roll-result1").value;
    let roll2 = document.getElementById("roll-result2").value;
    let roll3 = document.getElementById("roll-result3").value;
    let sum = roll1 + roll2 + roll3;
    return sum;
}

function getMonsterRollPoints(sum, monsterStrength) {
    let addToScore = 0;
    if (sum < monsterStrength) {
        addToScore = addToScore - monsterStrength;
    }
    else if (sum === monsterStrength) {
        addToScore = addToScore + monsterStrength;
    }
    else {
        addToScore = addToScore + monsterStrength - (sum - monsterStrength);
    }
    return addToScore;
}

function fightMonster(diceSides,rollResult) {
    document.getElementById("info-last-step").innerText = "";
    if (checkIfMonsterStrengthExists() === false) { 
        getMonsterStrength(diceSides, rollResult);
    }
    else if (getValueOfMonsterStrength() < 3) { 
        let addToScore = getValueOfMonsterStrength();
        let currentScore = changeCurrentScore(addToScore);
        let kryptonite = getKryptonite();
        let luckyNumber = getLuckyNumber();
        document.getElementById("next-step").innerText = "";
        document.getElementById("info-next-step").innerText = "Now roll the d20 to get the strength of the next monster.";
        document.getElementById("total-score").innerText = "Your score is " + currentScore + ".";
        document.getElementById("info-last-step").innerText = "Since 3 rolls can't possibly be less than the monster's strength, you beat the monster! " + addToScore + " was added to your score.";
        document.getElementById("current-action").value = "";
        document.getElementById("current-action").innerText = "";
        document.getElementById("roll-result1").innerText = "";
        document.getElementById("roll-result1").value = "";
        document.getElementById("roll-result2").innerText = "";
        document.getElementById("roll-result2").value = "";
        document.getElementById("roll-result3").innerText = "";
        document.getElementById("roll-result3").value = "";
        document.getElementById("monster-strength").value = "";
        checkScore(currentScore,kryptonite, luckyNumber);
    }
    else if (!document.getElementById("roll-result2").innerText) {
        rollAgainstMonster(diceSides,rollResult);
    }
    else if (!document.getElementById("roll-result3").innerText) {
        rollAgainstMonster(diceSides,rollResult);
        let monsterStrength = getValueOfMonsterStrength()
        let sum = getMonsterRollSum();
        let addToScore = getMonsterRollPoints(sum, monsterStrength);
        let currentScore = changeCurrentScore(addToScore);
        let kryptonite = getKryptonite();
        let luckyNumber = getLuckyNumber();
        document.getElementById("info-next-step").innerText = "Now roll the d20 to get the strength of your next monster!"; 
        document.getElementById("current-action").value = "";
        document.getElementById("current-action").innerText = "";
        document.getElementById("next-step").innerText = "";
        document.getElementById("total-score").innerText = "Your score is " + currentScore + ".";
        document.getElementById("info-last-step").innerText = "The sum of your rolls was " + sum + ", while the monster's strength was " + monsterStrength +". " + addToScore + " was added to your score.";
        checkScore(currentScore,kryptonite, luckyNumber);
        document.getElementById("roll-result1").innerText = "";
        document.getElementById("roll-result1").value = "";
        document.getElementById("roll-result2").innerText = "";
        document.getElementById("roll-result2").value = "";
        document.getElementById("roll-result3").innerText = "";
        document.getElementById("roll-result3").value = "";
        document.getElementById("monster-strength").value = "";
    }
}

function decideWhatToDoNext(diceSides, rollResult) {
    if (!document.getElementById("lucky-number").innerText) {
        getLuckyNumberInitially(diceSides,rollResult);
    }
    else if (!document.getElementById("kryptonite").innerText) {
        getKryptoniteInitially(diceSides,rollResult);
    }
    else if (!checkIfActionPresent()) {
        fightMonster(diceSides,rollResult);    
    }
    else {
        let currentAction = getCurrentAction();
        if (currentAction === 1) {
            fightMonster(diceSides,rollResult);
        }
        else if (currentAction ===2) {
            rollForKryptonite(diceSides, rollResult);
        }
        else if (currentAction === 3) {
            rollForLuckyNumber(diceSides, rollResult);
        }
    }
}

function rollForKryptonite(diceSides, rollResult) {
    document.getElementById("next-step").innerText = "";
    if (diceSides === 10) {
        let addToScore = 0 - rollResult;
        let currentScore = changeCurrentScore(addToScore);
        let kryptonite = getKryptonite();
        let luckyNumber = getLuckyNumber();
        document.getElementById("info-last-step").innerText = "Since you rolled " + rollResult + ", your score dropped by " + rollResult + ".";
        document.getElementById("last-step").innerText = "";
        document.getElementById("next-step").innerText = "Now roll the d20 to get the strength of your next monster."
        document.getElementById("total-score").innerText = "Your score is " + currentScore + ".";
        document.getElementById("info-next-step").innerText = "";
        document.getElementById("current-action").innerText = "";
        checkScore(currentScore, kryptonite, luckyNumber);
    }
    else {
        document.getElementById("info-last-step").innerText = "";
        document.getElementById("last-step").innerText = "You didn't roll the d10! Try again.";
    }
}

function rollForLuckyNumber(diceSides, rollResult) {
    document.getElementById("next-step").innerText = "";
    if (diceSides === 10) {
        
        let addToScore = 0 + rollResult;
        let currentScore = changeCurrentScore(addToScore);
        let luckyNumber = getLuckyNumber();
        document.getElementById("info-last-step").innerText = "Since you rolled " + rollResult + ", your score went up by " + rollResult + ".";
        document.getElementById("last-step").innerText = "";
        document.getElementById("next-step").innerText = "Now roll the d20 to get the strength of your next monster.";
        document.getElementById("total-score").innerText = "Your score is " + currentScore + ".";
        document.getElementById("info-next-step").innerText = "";
        document.getElementById("current-action").innerText = "";
        checkScore(currentScore, kryptonite, luckyNumber);
    }
    else {
        document.getElementById("info-last-step").innerText = "";
        document.getElementById("last-step").innerText = "You didn't roll the d10! Try again.";
    }
}

function changeCurrentScore(addToScore) { 
    let currentScore = document.getElementById("total-score").value;
    if (currentScore === undefined) {
        currentScore = 0;
    }
    currentScore = currentScore + addToScore;
    document.getElementById("total-score").value = currentScore;
    return currentScore;
}

function checkScore(currentScore,kryptonite,luckyNumber) {
    if (currentScore > 100) { 
        let over100 = currentScore - 100;
        let addToScore = 0 - over100 - over100;
        document.getElementById("info-next-step").innerText = "Uh oh! Your last turn made your score go over 100! You lose " + over100 + " points from 100, since you were over 100 by " + over100 + "!";
        currentScore = changeCurrentScore(addToScore);
        document.getElementById("total-score").innerText = "Your score is " + currentScore + ".";
        document.getElementById("info-last-step").innerText = "";
        document.getElementById("next-step").innerText = "Now roll the d20 to get the strength of your next monster.";
        checkScore(currentScore,kryptonite,luckyNumber);
    }
    else if (currentScore === 100) {
        document.getElementById("info-next-step").innerText = "You won the game!";
    }
    else {
        let scoreAsString = currentScore.toString();
        let lastCharIndex = scoreAsString.length - 1;
        let lastCharOfScore = scoreAsString[lastCharIndex];
        
        lastCharOfScore = Number(lastCharOfScore);
        if (kryptonite === lastCharOfScore) {
            document.getElementById("info-next-step").innerText = "Uh oh! You hit your kryptonite. Roll the d10 to see how much your score will drop.";
            document.getElementById("current-action").innerText = "Landed on Kryptonite!";
            document.getElementById("next-step").innerText = "";
            document.getElementById("current-action").value = 2;
        }
        else if (luckyNumber === lastCharOfScore) {
            document.getElementById("info-next-step").innerText = "Awesome! You hit your lucky number. Roll the d10 to see how much your score will go up.";
            document.getElementById("current-action").innerText = "Landed on lucky number!";
            document.getElementById("next-step").innerText = "";
            document.getElementById("current-action").value = 3;
        }
        else {
            document.getElementById("current-action").value = 1; 
        }
    }
    }
