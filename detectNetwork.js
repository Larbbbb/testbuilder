// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (cardNumber.length === 14 && (cardNumber.startsWith("38") === true || cardNumber.startsWith("39") === true)) {
  	return "Diner's Club";
  }

  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (cardNumber.length === 15 && (cardNumber.startsWith("34") === true || cardNumber.startsWith("37") === true)) {
  	return "American Express";
  }

  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  if (cardNumber.startsWith("4") === true && (cardNumber.length === 13 || 16 || 19)) {
  	return "Visa";
  }

  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16
  if (cardNumber.length === 16 &&  (cardNumber.startsWith("51") === true || 
  									cardNumber.startsWith("52") === true || 
  									cardNumber.startsWith("53") === true || 
  									cardNumber.startsWith("54") === true ||
  									cardNumber.startsWith("55") === true)) {
  	return "MasterCard";
  }

  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if ((cardNumber.length === 16 || 19) &&  (cardNumber.startsWith("6011") === true ||
  											cardNumber.startsWith("644") === true ||
  											cardNumber.startsWith("645") === true ||
  											cardNumber.startsWith("646") === true ||
  											cardNumber.startsWith("647") === true ||
  											cardNumber.startsWith("648") === true ||
  											cardNumber.startsWith("649") === true ||
  											cardNumber.startsWith("65") === true)) {
  	return "Discover";
  }

  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if ((cardNumber.length >= 12 && cardNumber.length <= 19) &&  (cardNumber.startsWith("5018") === true ||
					  											cardNumber.startsWith("5020") === true ||
					  											cardNumber.startsWith("5038") === true ||
					  											cardNumber.startsWith("6304") === true)) {
  	return "Maestro";
  } 

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


