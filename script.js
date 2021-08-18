//Calculate result and display
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    
    var principalHTML = "<br> If you deposit <span class='highlight'>"+principal+"</span>";
    var rateHTML = ",<br>at an interest of <span class='highlight'>"+rate+"%</span>";
    var interestHTML = ",<br>you will receive an amount of <span class='highlight'>"+interest+"</span>";
    var yearHTML = ",<br>in the year <span class='highlight'>"+year+"</span>";

    document.getElementById("result").innerHTML = principalHTML+rateHTML+interestHTML+yearHTML;
}


//Dynamically display slider value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}


//Check principal input
function checkPrincipal()
{
    var principal = document.getElementById("principal").value;
    if ((principal == '') || (principal <= '0'))
    {
        alert("Enter a positive number.");
        principal.focus();
        return false;
    }
    
    return true;
}