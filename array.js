var values = [{ name: 1, value:2, three:3 }, {name: 2, value: 3, three: 4}, {name: 3, value: 3, three: 4}, {name: 4, value: 2, three: 15}];
print(JSON.stringify(values.filter(function(someEntry) {
	if (someEntry.value == 3) 
	  return this;
	})));
