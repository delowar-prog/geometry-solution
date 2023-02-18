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
        <td><span>${area.toFixed(2)}cm</span><sup class='text-sm'> 2.</sup> </td>
        <td><button class="p-2 my-10 bg-sky-500 text-white rounded text-sm">convert m<sup class='text-sm'>2</sup></button></td>
        <td><button onclick="deleteResult(event)" class="text-xl text-red-500 font-bold bg-gray-300 px-2 rounded" ><i class="fa-solid fa-xmark"></i></button></td>
        `;
        tBody.appendChild(tr);
    }

//Set Error to display
function setError(id, msg){
    const textField=document.getElementById(id);
    textField.style.display="block";
    const li=document.createElement('li');
    li.innerHTML=msg;
    textField.appendChild(li);
}

//remove message
function removeError(){
    const textField=document.getElementById('error');
    textField.style.display="none";
}

//Rendom Color
function setHover(event){
    const card=event.target;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    card.style.backgroundColor = "#" + randomColor;
  }
  
// Delete result Item
function deleteResult(event){
    const targetElement=event.target;
    const parent=targetElement.parentNode.parentNode.parentNode.parentNode.removeChild(targetElement.parentNode.parentNode.parentNode);
}
