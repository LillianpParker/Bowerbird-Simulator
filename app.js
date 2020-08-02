
let items = [
    {name: "Twig",value: 1},
    {name: "Leaf",value: 2},
    {name: "Feather", value: 4},
    {name: "Flower Petal",value: 5,},
    {name: "Colorful Leaf",value: 7},
    {name: "Whole Flower", value: 10},
    {name: "Coin", value: 14},
    {name: "Colored Plastic Bottle Cap", value: 15},
    {name: "Berries", value: 17},
    {name: "Colored Straw", value: 20}
    ]

    // Player Below

function playerSubset (list, numChoices) {
    let pickedItems = []
    let currentItems = list.slice()
    for ( let i=0; i < numChoices; i++){
        let index = Math.floor(Math.random()*currentItems.length)
        let item = currentItems[index]
        currentItems.splice(index, 1)
        pickedItems.push(item)
    }
    return pickedItems
}

function playerSearch (e){
    $(() => {
        let choices = (playerSubset(items, 3))
        for (let i = 0; i < choices.length ; i++){
        let buttonChoice = $('<button>')
        buttonChoice.text(choices[i].name + ": " + " " + choices[i].value)
        buttonChoice.appendTo($('#choices'))
        }
    })
}

// Computer Below

function computerSubset (list, numChoices) {
    let compPickedItems = []
    let compCurrentItems = list.slice()
    for ( let i=0; i < numChoices; i++){
        let compIndex = Math.floor(Math.random()*compCurrentItems.length)
        let compItem = compCurrentItems[compIndex]
        compCurrentItems.splice(compIndex, 1)
        compPickedItems.push(compItem)
    }
    return compPickedItems
}

function computerSearch (e){
    console.log(computerSubset(items, 1))
}
