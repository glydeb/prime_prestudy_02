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