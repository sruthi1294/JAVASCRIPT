
  var txt;
  var person = prompt("Please enter your name:");
  if (person == null || person == "")
 {
    txt = "User cancelled the name.";
  }
  else
 {
    txt = "Hello " + person + "! How are you today?";
  }
  document.writeln("txt");
