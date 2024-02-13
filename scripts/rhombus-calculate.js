function calculateRhombusArea(){
    const rhombusBase1 = getInputValueById('rhombus-base1');
    const rhombusBase2 = getInputValueById('rhombus-base2');
    const area = 0.5 * rhombusBase1 * rhombusBase2;
    setInnerTextById('rhombus-area', area);
    console.log(rhombusBase1, rhombusBase2, 'rhombus area:', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}