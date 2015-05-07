var test = /^\$[0-9]*\.[0-9][0-9]$/;

var values = ['$1.25', '.25', '$.25', '$1.25.25', '$1.2523', '$13431312313.1', '$1234.22'];

values.forEach(function (value) {
  if (value.match(test)) 
    print(value + ' passes');
  else
    print(value + ' does NOT pass');
  }
);



