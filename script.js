function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    
    document.getElementByID("result").innerText="If you deposit"+principal+",/n at an interest of "+rate+"%./n You will receive an amount of "+interest+",/n in the year "+year;
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}