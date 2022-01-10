function addRow(){ 
    const newRow = document.getElementsByClassName('column')
    for(let item of newRow){//for each of the new row that you already have from left to right,
        const newDiv = document.createElement('div')//its a 
        newDiv.setAttribute('class', "box")
        newDiv.addEventListener('click', setCellColor)
        item.append(newDiv) //what it does is that it creates another box below from the left to
    }
}
function addColumn(){ 
    const grid = document.getElementById('grid-cell')
    const newColumn = document.createElement('div')
    newColumn.setAttribute('class', 'column')
    const newRow = document.getElementsByClassName('column')
    const numOfBoxes = newRow[0].getElementsByClassName('box').length
    for(let i = 0; i < numOfBoxes; i++){
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', "box")
        newDiv.addEventListener('click', setCellColor) 
        newColumn.append(newDiv)
    }
    grid.append(newColumn)
}
function removeRow(){ 
    const newRow = document.getElementsByClassName('column')
    for(let item of newRow){
        const div = item.getElementsByClassName('box')
        if(div.length > 1){
            div[div.length - 1].remove()
        }
    }
}
function removeColumn(){ 
    const grid = document.getElementById('grid-cell')
    const cols = grid.getElementsByClassName('column')
    if(cols.length > 1){ 
        cols[cols.length - 1 ].remove()
    } 
}

function fillUncoloredCells() {
    const boxEls = document.getElementsByClassName('box')
    for (box of boxEls) {//for every box that was given to us currently
        const currentColor = getComputedStyle(box).backgroundColor 
        if (currentColor === "rgba(0, 0, 0, 0)"){//if the boxes are currently have no color whatsoever, 
            box.style.backgroundColor = selectedColor//this would activate and give the remaining color with that color
        }
    }
}
function fillAllCells() {
    const boxEls = document.getElementsByClassName('box')
    for (box of boxEls) {
        box.style.backgroundColor = selectedColor
    }
}
function clearColors() {
    const boxEls = document.getElementsByClassName('box')
    for (box of boxEls) {
        box.style.backgroundColor = "transparent"
    }
}
const colorSelectorEl = document.getElementById("color-selector")
let selectedColor = "transparent"
const setColor = (event) => {
    selectedColor = colorSelectorEl.value
}

colorSelectorEl.addEventListener("change", setColor)
function setCellColor(event) {
    event.target.style.backgroundColor = selectedColor;
}