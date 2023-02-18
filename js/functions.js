//Function for area calculation by shape id. 
function areaCalculationById(shapeId, input1, input2){
    const shapeName=document.getElementById(shapeId).innerText;
    const b=getInputFieldValue(input1);
    const h=getInputFieldValue(input2);
    let area;
    if(shapeId=='traingle'||shapeId=='rhombus'||shapeId=='pentagon'){
        area=0.5*b*h;
    }else{
        area=b*h;
    }
    //show result
    if(!isNaN(area)){
        removeError();
        dispalyResult(shapeName, area);
    } 
}

//Function to Get Input Field value as integer number 
    function getInputFieldValue(id){
        const getInputString=document.getElementById(id).value;
        const getNumber=parseFloat(getInputString);
        document.getElementById(id).value='';
        if(isNaN(getNumber)){
            const msg=`<strong>${id}</strong> can not be empty or string`;
            setError('error', msg);
        }else if(getNumber<0){
            const msg=`<strong>${id}</strong> must be positive number`;
            setError('error', msg);
        }
        else{
            return getNumber;
        }  
    }

// Function to Display result 
    let i=0;
    function dispalyResult(itemName, area){
        i+=1;
        const tBody=document.getElementById('table-body');
        const tr=document.createElement('tr');
        tr.innerHTML=`
        <td>${i}</td>
        <td>${itemName}</td>
        <td>${area.toFixed(2)} <sub class='text-lg'> cm</sub> 2.</td>
        `;
        tBody.appendChild(tr);
    }

