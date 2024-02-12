
//console.log('rect connected');


function calculateRectangleArea() {
    //console.log('calculate rect area');

    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    //console.log(widthInput);
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);
    //console.log(widthText);


    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText)
    console.log(length);

    // calculate rectangle area
    const area = width * length;
    console.log('Area of the rectangle:', area);

    //display triangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}