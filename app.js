
let items = [
    {name: "twig",value: 1},
    {name: "leaf",value: 2},
    {name: "flower petal",value: 5,},
    {name: "colorful leaf",value: 7},
    {name: "Whole flower", value: 10},
    {name: "Plastic Bottle Cap", value: 15},
    {name: "Blue Straw", value: 20}
    ]

function getRandomSubset (list, numChoices) {
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

function search (e){
    console.log(getRandomSubset(items, 3))
    $(() => {
        let choices = (getRandomSubset(items, 3))
        for (let i = 0; i < choices.length ; i++){
        let buttonChoice = $('<button>')
        buttonChoice.text(choices[i].name + ": " + " " + choices[i].value)
        buttonChoice.appendTo($('#choices'))
        }
    })
}

