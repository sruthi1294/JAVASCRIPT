var numbers = [65, 44, 12, 4];

function getSum(total, num) 
{
    return total + num;
}
function myFunction(item) 
{
    document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}
