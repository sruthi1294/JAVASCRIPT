## What is JSON?
JSON: 
- JavaScript Object Notation.
- JSON is a syntax for storing and exchanging data.
- JSON is text, written with JavaScript object notation.
- JSON is a lightweight data-interchange format

## Why use JSON?
Since the JSON format is text only, it can easily be sent to and from a server, and used as a data format by any programming language.
JavaScript has a built in function to convert a string, written in JSON format, into native JavaScript objects: JSON.parse()
So, if you receive data from a server, in JSON format, you can use it like any other JavaScript object.

## Exchanging Data
When exchanging data between a browser and a server, the data can only be text.JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
We can also convert any JSON received from the server into JavaScript objects.This way we can work with the data as JavaScript objects, with no complicated parsing and translations

## Sending Data
If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server using **JSON.stringify** function.

## Receiving Data
If you receive data in JSON format, you can convert it into a JavaScript object using **JSON.parse()** function.



