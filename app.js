// Jquery Below
$(() => {
})

// Javascript Below

let items = [
    {name: "twig",value: 1},
    {name: "leaf",value: 2},
    {name: "flower petal",value: 5,},
    {name: "colorful leaf",value: 7},
    {name: "Whole flower", value: 10},
    {name: "Plastic Bottle Cap", value: 15},
    {name: "Blue Straw", value: 20}
    ]

function presentItems (items) {
    let pickedItems = []
    items = items[Math.floor(Math.random() *7)-1];
        items.push(pickedItems)
    console.log(pickedItems)
}