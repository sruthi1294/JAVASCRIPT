var ages = [32, 33, 16, 40];
function checkAdult(age) 
{
    return age >= 18;
}
document.getElementById("demo").innerHTML = ages.filter(checkAdult);