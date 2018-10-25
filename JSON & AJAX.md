## JSON,XML structures

### JSON: 
JSON stands for JavaScript Object Notation.It is a syntax for storing and exchanging data and it is a text, written with JavaScript object notation and we can convert any JavaScript object into JSON, and send JSON to the server.
We can also convert any JSON received from the server into JavaScript objects.
1.JavaScript function JSON.stringify() to convert it into a string.
2.JavaScript function JSON.parse() to convert text into a JavaScript object

### JSON Syntax Rules:
Data is in name/value pairs,Eg:"name":"John"
Data is separated by commas
Curly braces hold objects,Eg:{ "name":"John" }
Square brackets hold arrays,Eg:[ "Ford", "BMW", "Fiat" ]

### XML:
XML stands for eXtensible Markup Language.It was designed to store and transport data and was designed to be self-descriptive.It is a W3C Recommendation.
XML was designed to carry data - with focus on what data is,But HTML was designed to display data - with focus on how data looks and XML tags are not predefined like HTML tags.

#### Syntax:
<root>
  <child>
    <subchild>.....</subchild>
  </child>
</root>

#### Example:
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <date>2015-09-01</date>
  <hour>08:30</hour>
  <to>Tove</to>
  <from>Jani</from>
  <body>Don't forget me this weekend!</body>
</note>

#### Output:
Note
To: Tove
From: Jani
Date: 2015-09-01 08:30
Don't forget me this weekend!

## AJAX,Http Request and XML Http Request

### AJAX:
AJAX stands for Asynchronous JavaScript and XML. AJAX is a new technique for creating better, faster, and more interactive web applications with the help of XML, HTML, CSS, and Java Script. Ajax uses XHTML for content, CSS for presentation, along with Document Object Model and JavaScript for dynamic content display.It is a technique for accessing web servers from a web page.
1.Read data from a web server - after the page has loaded
2.Update a web page without reloading the page
3.Send data to a web server - in the background

### AJAX Http Request:To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object.
#### Syntax:
open(method, url, async)
Specifies the type of request
method: the type of request: GET or POST
url: the server (file) location
async: true (asynchronous) or false (synchronous)
send(): Sends the request to the server (used for GET)
send(string): Sends the request to the server (used for POST)

#### Example1:
//using GET method
xhttp.open("GET", "demo_get.asp", true); 
xhttp.send();
OR
//using GET method add the information to the URL
xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
xhttp.send();

#### Example2:
//using POST method
xhttp.open("POST", "demo_post.asp", true); 
xhttp.send();
OR
 //using POST method
xhttp.open("POST", "ajax_test.asp", true);
//add an HTTP header with setRequestHeader()
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
//Specify the data you want to send in the send() method
xhttp.send("fname=Henry&lname=Ford"); 

#### Explanation:
The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php(which can perform actions on the server before sending the response back).

Asynchronous(true): JavaScript does not have to wait for the server response,execute other scripts while waiting for server response and deal with the response after the response is ready.

Synchronous(false):Since the code will wait for server completion, there is no need for an onreadystatechange function

setRequestHeader(header, value)
Adds HTTP headers to the request
header: specifies the header name
value: specifies the header value

#### GET or POST:
GET is simpler and faster than POST
However, always use POST requests when:
I)update a file or database on the server.
II)Sending a large amount of data to the server (POST has no size limitations).
III)Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

### XML Http Request:
The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

#### Syntax:
variable = new XMLHttpRequest();

