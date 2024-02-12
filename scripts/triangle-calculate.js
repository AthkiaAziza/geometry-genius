/**
 * 
 * objective: get base, height of a triangle. Calculate the area by using the provided formula and then display the area.
 * Step 1: Get base value
 * step 2: added an id in the base input field
 * step 3: use getElementById to access the input field
 * step 4: get value from the input field. (value is string now)
 * step 5: convert the value to a number. use parseFloat
 * 
 */


function calculateTriangleArea() {
    //console.log('inside function');
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBAseText = triangleBaseInput.value;
    const base = parseFloat(triangleBAseText)
    console.log(base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);
    //console.log(triangleHeightInput);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area);

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}