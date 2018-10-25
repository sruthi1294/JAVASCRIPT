## Var,Let & Const Keywords

### Variables(var): JavaScript variables are containers for storing data values.You declare a JavaScript variable with the var keyword.After the declaration, the variable has no value 
(Technically it has the value of undefined).To assign a value to the variable, use the equal sign.You can declare many variables in one statement.Start the statement with var and 
separate the variables by comma.For example,var a =10;
the variable value updated when we try to reassign the existing variable.
#### Example:
 var  a = 10;
              

### Let & Const Keywords:ES6 introduced two important new JavaScript keywords,let & const.These two keywords provide Block Scope variables (and constants) in JavaScript.

### let:It is similar to var, in that we can optionally initialize the variable.
The code will throw an error when we try to reassign the existing let variable.

#### Example: 
 let  x = 11;
        
### const keyword :const statement values can be assigned once and they cannot be reassigned.The scope of const statement works similar to let statements.For example,const a=10;
The code will throw an error when we try to reassign the existing const variable.

#### Example: 
const x = 10;
