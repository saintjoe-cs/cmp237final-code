// Show all four kinds of flow control

// sequence
print('This is a line');
print('This is the next line, showing sequential flow');

// selection
var flag = true;
if(flag)
  print('Here is an example of selection');

// iteration
for(var i = 0; i < 5; i++)
  print('I am demonstrating iterative control')

// exception
var x = 10; 
try {
  print('Can I divide by zero?');
  print(x/"hello");
  throw "What the heck??";
  }

catch(e) {
  print('I got an error: ' + e);
  } 
