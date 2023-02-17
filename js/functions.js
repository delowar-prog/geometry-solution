//Function to Get Input Field value as integer number 
    function getInputFieldValue(id){
        const getInputString=document.getElementById(id).value;
        const getNumber=parseInt(getInputString);
        return getNumber;
    }

// Function to Dispaly result 
    let i=0;
    function dispalyResult(itemName, area){
        i+=1;
        const tBody=document.getElementById('table-body');
        const tr=document.createElement('tr');
        tr.innerHTML=`
        <td>${i}</td>
        <td>${itemName}</td>
        <td>${area}</td>
        `;
        tBody.appendChild(tr);
    }