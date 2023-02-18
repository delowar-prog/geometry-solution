//Traingle Area
document.getElementById('btn-traingle').addEventListener('click', function(){
    const traingleArea=areaCalculationById('traingle', 'input-b', 'input-h');  
})
//Rectangle Area
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleArea=areaCalculationById('rectangle', 'input-w', 'input-i');
})
//Parallelogram Area
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramArea=areaCalculationById('parallelogram', 'parallelogram-b', 'parallelogram-h');
})
//Rhombus Area
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusArea=areaCalculationById('rhombus', 'input-d1', 'input-d2');
})
//Pentagon Area
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pentagonArea=areaCalculationById('pentagon', 'pentagon-input-p', 'pentagon-input-b');
})
//Ellips Area
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipse=document.getElementById('ellipse').innerText;
    const a=getInputFieldValue('ellipse-input-a');
    const b=getInputFieldValue('ellipse-input-b');
    const ellipsArea=3.14*a*b;
    if(!isNaN(ellipsArea)){
        removeError();
        dispalyResult(ellipse, ellipsArea);
    } 
})
