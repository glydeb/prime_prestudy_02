function squared(num) {
	return num * num;
}

function acresFromSquareMiles(num) {
    return (num * 640);	
}

function valueOfAcres (num) {
	return (num * 800);
}

var costOfLand = valueOfAcres( acresFromSquareMiles ( squared(5)));
console.log(costOfLand);

function splinter (num1, num2) {
  var z = num1 * num2;
  return ([num1, num2, z]);
}
console.log( splinter(1,2) );
