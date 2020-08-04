




// Directions Screen Animations
$(() => {

let Kami = $("#Kami");
let Speech = $("#Speech");
Kami.hover(
  function() {
    Speech.css({
      "animation-name": "expand-bounce",
      "animation-duration": "0.25s"
    });
  },
  function() {
    Speech.css({
      "animation-name": "shrink",
      "animation-duration": "0.1s"
    });
  }
);

})





















// Item Array

let items = [
    { name: "Twig", value: 1 },
    { name: "Leaf", value: 2 },
    { name: "Feather", value: 4 },
    { name: "Flower Petal", value: 5, },
    { name: "Colorful Leaf", value: 7 },
    { name: "Whole Flower", value: 10 },
    { name: "Coin", value: 14 },
    { name: "Colored Plastic Bottle Cap", value: 15 },
    { name: "Berries", value: 17 },
    { name: "Colored Straw", value: 20 }
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
    round = round + 1
    let roundNumber = $('<h1>')
    roundNumber.text("Round: " + round)
    roundNumber.appendTo('#scoreValue')
    let choices = playerSubset(items, 3)
    for (let i = 0; i < choices.length; i++) {
        let buttonChoice = $('<button>')
        buttonChoice.text(choices[i].name)
        buttonChoice.appendTo($('#choices'))
        buttonChoice.click(() => {
            // Player Points
            points = points + choices[i].value
            let scoreCard = $('#scoreValue')
            scoreCard.appendTo('#scoreValue')
            scoreCard.text(points)
            $('#choices').empty()
            // Computer Points
            compPoints = compPoints + getComputerChoice().value
            let compScoreCard = $('#compScoreValue')
            compScoreCard.appendTo('#compScoreValue')
            console.log(compPoints)
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

function computerSearch(e) {
    console.log(getComputerChoice(items))
}

function winningScreen() {
    $('#removeForEnd').empty()
    let winningTitle = $('<h1>')
    winningTitle.text("Congratulations, your Bower has ranked in first! You've won her attention with a most stunning and colorful bower, and beat your competitor with a final rating of "+ playerSearch().points)
    winningTitle.appendTo('body')
    winningTitle.append("<img id='bowerImage' src='https://blogs.zeiss.com/sports-optics/birding/en/wp-content/uploads/sites/2/2018/05/Laubenvogel_Nestbau.jpg'/>");
}

function losingScreen() {
    $('#removeForEnd').empty()
    let losingTitle = $('<h1>')
    losingTitle.text("It would appear your competitors bower looked better than yours. But good news is, you can try with another lady if you'd like, or, if you're so heartbroken, you can wait until next season. What do ya say?")
    losingTitle.appendTo('#removeForEnd')
    let tryAgain = $('<button>')
    tryAgain.text("Try Again")
    tryAgain.appendTo(losingTitle)
    let givingUp = $('<button>')
    givingUp.text("I'll wait till next seson")
    givingUp.appendTo(losingTitle)
}


