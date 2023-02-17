//Traingle Area
document.getElementById('btn-traingle').addEventListener('click', function(){
    const traingle=document.getElementById('traingle').innerText;
    const b=getInputFieldValue('input-b');
    const h=getInputFieldValue('input-h');
    const traingleArea=0.5*b*h;
    dispalyResult(traingle, traingleArea);
})
