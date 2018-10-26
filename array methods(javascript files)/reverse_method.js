<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.shift();
    document.getElementById("demo").innerHTML = fruits;
}
</script>