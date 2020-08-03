// $(() => {

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
        buttonChoice.text(choices[i].name + ": " + " " + choices[i].value)
        buttonChoice.appendTo($('#choices'))
        buttonChoice.click(() => {
            // Player Points
            points = points + choices[i].value
            let scoreCard = $('#scoreValue')
            scoreCard.appendTo('#scoreValue')
            scoreCard.text(points)
            $('#choices').empty()
            // Computer Points
            compPoints = compPoints + getComputerChoice(compItem.value)
            let compScoreCard = $('#compScoreValue')
            compScoreCard.appendTo('#compScoreValue')
            console.log(compPoints)
            })
    if (round >= totalRounds ) {
        winningScreen()
    }
}
}

// Computer Below

function getComputerChoice(list) {
    let compIndex = Math.floor(Math.random() * items.length)
    let compItem = items[compIndex]
    return [compItem]

}

function computerSearch(e) {
    console.log(getComputerChoice(items))
}





// })
