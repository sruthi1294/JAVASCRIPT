Array.prototype.myUcase = function() 
{
    var i;
    for (i = 0; i < this.length; i++) 
    {
        this[i] = this[i].toUpperCase();
    }
};

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();
document.getElementById("demo").innerHTML = fruits;