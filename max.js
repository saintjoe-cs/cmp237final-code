var values = [{first: 4, second: "people"}, {first: 10, second: "animals"}, {first: 12, second: "feet"}, {first: 9, second: "excitement"}];

print(values.reduce(function(max, entry) {
  //print(JSON.stringify(entry));
  return (entry.first > max)?entry.first:max;
  },0));
