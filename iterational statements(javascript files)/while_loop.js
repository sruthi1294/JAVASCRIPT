var text = "";
var i = 0;
while (i < 5) 
{
    text = text +"<br>The number is " + i;
    i++;
}
document.getElementById("demo").innerHTML = text;