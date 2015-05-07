function dayConvert (daySpec) {

  // Here are day names
  dayNames = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
  dayUp = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  
  var isString = (typeof daySpec === 'string'),
  index;
 
  if (isString)
    daySpec = daySpec.toLowerCase();
 
  if (isString)
    if((index = dayNames.indexOf(daySpec)) >=  0)
      return index + 1;
    else
      return 'Not a valid day name';
  else
    if (daySpec >= 1 && daySpec <= 7)
      return dayUp[daySpec-1];
   else
      return 'Not a valid day number'; 
  }

print('Convert: FRIDAY: ' + dayConvert('FRIDAY'));
print('Convert 7: ' + dayConvert(7));
print('Convert 8: '  + dayConvert(8));
print('Convert Uselessday: ' + dayConvert('Uselessday'));
