
// Directions Screen Animations
$(() => {

    let Kami = $("#Kami");
    let Speech = $("#Speech");
    Kami.hover(
        function () {
            Speech.css({
                "animation-name": "expand-bounce",
                "animation-duration": "0.25s"
            });
        },
        function () {
            Speech.css({
                "animation-name": "shrink",
                "animation-duration": "0.1s"
            });
        }
    );

})


// Item Array

let items = [
    { name: "Twig", value: 1, color: "#a6885e" },
    { name: "Leaf", value: 2, color: "#598F71" },
    { name: "Feather", value: 4, color: "#D1D2DC" },
    { name: "Flower Petal", value: 5, color: "#FFB6CI" },
    { name: "Colorful Leaf", value: 7, color: "#8A3D36" },
    { name: "Whole Flower", value: 10, color: "#DA70D6" },
    { name: "Coin", value: 14, color: "#FFD700" },
    { name: "Colored Plastic Bottle Cap", value: 15, color: "#00BFFF" },
    { name: "Berries", value: 17, color: "#9B4466" },
    { name: "Colored Straw", value: 20, color: "#7FFFD4" }
]

// Player Below

function playerSubset(list, numChoices) {
    let pickedItems = []
    let currentItems = list.slice()
    for (let i = 0; i < numChoices; i++) {
        let index = Math.floor(Math.random() * currentItems.length)
        let item = currentItems[index]
        currentItems.splice(index, 1)
        pickedItems.push(item)
    }
    return pickedItems
}

let compPoints = 0
let points = 0
let round = 1
let totalRounds = 10

function playerSearch(e) {
    $('#Search').hide()
    round = round + 1
    let roundNumber = $('#round')
    roundNumber.text("Round: " + round)
    roundNumber.appendTo('#removeForEnd')
    let choices = playerSubset(items, 3)
    for (let i = 0; i < choices.length; i++) {
        let buttonChoice = $('<button>')
        buttonChoice.text(choices[i].name)
        buttonChoice.css('background-color', choices[i].color)
        buttonChoice.appendTo($('#choices'))
        buttonChoice.click(() => {
            $('#Search').show()
            // Player Points
            points = points + choices[i].value
            let scoreCard = $('#scoreValue')
            scoreCard.appendTo('#scoreValue')
            scoreCard.text("Score: " + points)
            $('#choices').empty()
            // Computer Points
            compPoints = compPoints + getComputerChoice().value
            let compScoreCard = $('#compScoreValue')
            compScoreCard.appendTo('#compScoreValue')
        })

    }
    if (points > compPoints && round >= totalRounds) {
        winningScreen()
    }
    if (points < compPoints && round >= totalRounds) {
        losingScreen()
    }
}

// Computer Below

function getComputerChoice() {
    let compIndex = Math.floor(Math.random() * items.length)
    let compItem = items[compIndex]
    return compItem

}



function checkComputerScore() {
    if (round >= 8) {
        alert("Sorry, too late for that pal!")
        $('#Check-Opponent').hide()
    }
    else {
        round = round + 2
        let checkedScore = $('<h1>')
        checkedScore.text("Your Rivals Bower Score is " + compPoints)
        checkedScore.appendTo('#round')
        $('#Check-Opponent').hide()
    }
}

function winningScreen() {
    $('#removeForEnd').empty()
    let winningTitle = $('<h1>')
    winningTitle.text("Congratulations, your Bower has ranked in first! You've won her attention with a most stunning and colorful bower, and beat your competitor with a final rating of " + points + "! Most don't even get this far so give yourself a wing on the back! So, whats the plan? Want to try again with another fair lady, or call it quits for the season?")
    winningTitle.appendTo('#removeForEnd')
    let tryAgain = $('<a>')
    tryAgain.addClass("Winner")
    tryAgain.text("Try Again")
    tryAgain.appendTo($('#button-container'))
    tryAgain.click(
        () => { 
            window.location = "Gameplay.html"
        })
    let givingUp = $('<a>')
    givingUp.addClass("Loser")
    givingUp.text("I'll wait till next season")
    givingUp.appendTo($('#button-container'))
    givingUp.click(
        () => {
            window.location = "index.html"
        })
}

function losingScreen() {
    $('#removeForEnd').empty()
    let losingTitle = $('<h1>')
    losingTitle.text("It would appear your competitors bower looked better than yours. But good news is, you can try with another lady if you'd like, or, if you're so heartbroken, you can wait until next season. What do ya say?")
    losingTitle.appendTo('#removeForEnd')
    let tryAgain = $('<a>')
    tryAgain.addClass("Winner")
    tryAgain.text("Try Again")
    tryAgain.appendTo($('#button-container'))
    tryAgain.click(
        () => { 
            window.location = "Gameplay.html"
        })
    let givingUp = $('<a>')
    givingUp.addClass("Loser")
    givingUp.text("I'll wait till next season")
    givingUp.appendTo($('#button-container'))
    givingUp.click(
        () => {
        window.location = "index.html"
    })

}


