var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() 
{
    fruits.splice(2, 0, "Lemon", "Kiwi");
    document.getElementById("demo").innerHTML = fruits;
}