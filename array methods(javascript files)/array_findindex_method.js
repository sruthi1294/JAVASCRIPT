var marks = [110, 210, 210, 120];

function student(marks) 
{
    return marks >= 140;
}
document.getElementById("demo").innerHTML = marks.findIndex(student);