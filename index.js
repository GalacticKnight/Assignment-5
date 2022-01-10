function addRow(){ 
    const newRow = document.getElementsByClassName('column')
    for(let item of newRow){
        const newDiv = document.createElement('div')//its a 
        newDiv.setAttribute('class', "box")
        newDiv.addEventListener('click', setCellColor)
        item.append(newDiv)
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
    for (box of boxEls) {
        const currentColor = getComputedStyle(box).backgroundColor 
        if (currentColor === "rgba(0, 0, 0, 0)"){
            box.style.backgroundColor = selectedColor
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
const focus = document.getElementById("color-selector")
let selectedColor = "transparent"
const setColor = (event) => {
    selectedColor = focus.value
}

focus.addEventListener("change", setColor)
function setCellColor(event) {
    event.target.style.backgroundColor = selectedColor;
}