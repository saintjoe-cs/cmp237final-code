// Make a date object for today
var today = new Date();

// Print for reference
print(today);

// Long way around the barn, but how do I expect you to know the API?
var thirty = 30 * 24 * 60 * 60 * 1000;
var future = new Date(today.getTime() + thirty);

// Print result
print(future);

