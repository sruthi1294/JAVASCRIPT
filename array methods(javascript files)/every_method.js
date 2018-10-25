var ages = [32, 16, 34, 40];
function checkAdult(age) 
{
    return age >= 18;
}
document.getElementById("demo").innerHTML = ages.every(checkAdult);