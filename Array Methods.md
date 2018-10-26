## Array Methods
 
### concat() Method:
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

#### Syntax:
```
array1.concat(array2, array3, ..., arrayX)
```
### copyWithin() Method:
The copyWithin() method copies array elements within the array, to and from specified positions.

#### Syntax:
```
arr.copyWithin(target)
arr.copyWithin(target, start)
arr.copyWithin(target, start, end)
```

### Array entries() Method:
The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

#### Syntax
```
array.entries()
```
### Array every() Method:
1. The every() method checks if all elements in an array pass a test (provided as a function).
2. The every() method executes the function once for each element present in the array.
3. If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
4. If no false occur, every() returns true.

#### Syntax:
```
array.every(function(currentValue, index, arr), thisValue).
```
### Array fill() Method:
The fill() method fills all the elements of an array from a start index to an end index with a static value. The end index is not included.

#### Syntax
```
array.fill(value, start, end)
```
### Array filter() Method:
The filter() method creates an array filled with all array elements that pass a test (provided as a function).

#### Syntax
```
array.filter(function(currentValue, index, arr), thisValue).
```
### Array find() Method:
1. The find() method returns the value of the first element in an array that pass a test (provided as a function).
2. The find() method executes the function once for each element present in the array.
3. If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
Otherwise it returns undefined.

#### Syntax
```
array.find(function(currentValue, index, arr),thisValue).
```

### Array findIndex() Method:
1.The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
2.The findIndex() method executes the function once for each element present in the array:
3.If it finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
Otherwise it returns -1.

#### Syntax:
```
array.findIndex(function(currentValue, index, arr), thisValue).
```
### Array forEach() Method:
The forEach() method executes a provided function once for each array element.

#### Syntax
```
array.forEach(function(currentValue, index, arr), thisValue).
```

### Array from() Method:
The Array.from() method returns an Array object from any object with a length property or an iterable object.

#### Syntax
```
Array.from(object, mapFunction, thisValue)
```
### Array includes() Method:
1.The includes() method determines whether an array contains a specified element.
2.This method returns true if the array contains the  element, and false if not.

#### Syntax:
```
array.includes(element, start).
```

### Array indexOf() Method:
1.The indexOf() method searches the array for the specified item, and returns its position.
2.The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.
3.Returns -1 if the item is not found.
4.If the item is present more than once, the indexOf method returns the position of the first occurence.

#### Syntax
```
array.indexOf(item, start);
```
### Array isArray() Method:
The Array.isArray() method determines whether the passed value is an Array.

#### Syntax
```
Array.isArray(obj).
```

### Join() Method:
1. The join() method joins the elements of an array into a string, and returns the string.
2. The elements will be separated by a specified separator. The default separator is comma (,).

#### Syntax
```
array.join(separator).
```

### Array keys() Method:
The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

#### Syntax
```
array.keys()
```

### Array lastIndexOf() Method:
1. The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. 
2. The array is searched backwards, starting at fromIndex.

#### Syntax
```
Syntax
array.lastIndexOf(item, start)
```

### Array map() Method:
- The map() method creates a new array with the results of calling a function for every array element.
- The map() method calls the provided function once for each element in an array, in order.

#### Syntax
```
array.map(function(currentValue, index, arr), thisValue)
```

### Array pop() Method:
The pop() method removes the last element of an array, and returns that element.

#### Syntax:
```
array.pop()
```
###  Array push() Method:
The push() method adds the one or more elements to the end of an array and returns the new length .

#### Syntax:
```
array.push(item1, item2, ..., itemX)
```

### Array reduce() Method:
- The reduce() method reduces the array to a single value.
- The reduce() method executes a provided function for each value of the array (from left-to-right).
- The return value of the function is stored in an accumulator (result/total).

#### Syntax:
```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

### Array reduceRight() Method:
- The reduceRight() method reduces the array to a single value.
- The reduceRight() method executes a provided function for each value of the array (from right-to-left).
- The return value of the function is stored in an accumulator (result/total).

#### Syntax
```
 array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
```

### Array reverse() Method:
The reverse() method reverses the order of the elements in an array.

#### Syntax
```
array.reverse()
```

### Array shift() Method:
The shift() method removes the first item of an array.

#### Syntax
```
array.shift()
```

### Array slice() Method:
- The slice() method returns the selected elements in an array, as a new array object.
- The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

#### Syntax
```
array.slice(start, end)
```

### Array some() Method:
 The some() method checks if any of the elements in an array pass a test (provided as a function).
 The some() method executes the function once for each element present in the array:
 -  If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining    values)
 -  Otherwise it returns false.

 #### Syntax
 ```
 array.some(function(currentValue, index, arr), thisValue)
 ```
 
 ### Array sort() Method:
 - The sort() method sorts the items of an array.
 - The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
  By default, the sort() method sorts the values as strings in alphabetical and ascending order.
  
 #### Syntax
  ```
   array.sort(compareFunction)
   ```
 ### Array splice() Method:
  The splice() method adds/removes items to/from an array, and returns the removed item(s).
  
 #### Syntax
  ```
   array.splice(index, howmany, item1, ....., itemX)
   ```
   
 ### Array toString() Method:
  The toString() method converts an array into a String and returns the result.
  
 #### Syntax
 ```
 array.toString()
 ```
 
 ### Array unshift() Method:
 The unshift() method adds new items to the beginning of an array, and returns the new length.
 
 #### Syntax
 ```
 array.unshift(item1, item2, ..., itemX)
 ```
 
 ### Array valueOf() Method:
 - The valueOf() method returns the array.
 - This method is the default method of the array object. Array.valueOf() will return the same as Array.
 
#### Syntax
```
array.valueOf()
```


 
  








