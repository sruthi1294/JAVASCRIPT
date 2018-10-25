
## Conditional Statements 
Conditional statements are used to decide the flow of execution based on different conditions. 
If a condition is true, you can perform one action and if the condition is false, you can perform another action.

 Different types of conditional statements:

###  If Statement:
 Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax:
if (condition) {
    block of code to be executed if the condition is true
}


### If...Else Statement:
Use the else statement to specify a block of code to be executed if the condition is false.

Syntax:
if (condition)
 {
    block of code to be executed if the condition is true
 } 
else 
{ 
    block of code to be executed if the condition is false
}



###  Nested if Statement:
Use the else if statement to specify a new condition if the first condition is false.

Syntax:
if (condition1) 
{
    block of code to be executed if condition1 is true
}
 else if (condition2)
 {
    block of code to be executed if the condition1 is false and condition2 is true
 }
 else 
{
    block of code to be executed if the condition1 is false and condition2 is false
}



###  Switch Statement:
Use the switch statement to select one of many code blocks to be executed.

Syntax:
switch(expression) {
    case x:
        code block
        break;
    case y:
        code block
        break;
    default:
        code block
}


 
###  Break:
When JavaScript reaches a break keyword, it breaks out of the switch block.
This will stop the execution of more code and case testing inside the block.
When a match is found, and the job is done, it's time for a break. There is no need for more testing.

### Default :
The default keyword specifies the code to run if there is no case match:


### Iteration Statements:
Statements which are used to execute a set of statements repeatedly based on a condition are known as loop statements or iteration statements. 
JavaScript supports different kinds of loops:

I)for - loops through a block of code a number of times.
II)for/in - loops through the properties of an object.
III)while - loops through a block of code while a specified condition is true.
IV)do/while - also loops through a block of code while a specified condition is true.

### For Loop:
syntax:

for (statement 1; statement 2; statement 3) 
{
    //code block to be executed
}



###  For/In Loop:
The JavaScript for/in statement loops through the properties of an object:

Syantax:

for (x in person) 
{
      //code block to be executed
 }
         

###  While Loop:
The while loop loops through a block of code as long as a specified condition is true.

Syntax:
while (condition) {
    code block to be executed
}


###  Do/While Loop:
The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax:
do {
    code block to be executed
}
while (condition);

