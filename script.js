function isDate(input) {
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  const date = new Date(input);
  return !isNaN(date.getTime());
}

// Example:
// alert(isDate(input));

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
