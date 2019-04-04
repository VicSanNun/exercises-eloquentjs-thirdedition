function countBs(string){
	const lengthOfString = string.length;
	const arrayOfString = string.split("");
	let quantityOfBs = 0;
	for(let count = 0; count <= lengthOfString - 1; count++){
		if(arrayOfString[count] == "B"){
			quantityOfBs++;
		}
	}
	return(quantityOfBs);
}

function countChar(string, char){
	const lengthOfString = string.length;
	const arrayOfString = string.split("");
	let quantityOfChar = 0;
	for(let count = 0; count <= lengthOfString - 1; count++){
		if(arrayOfString[count] == char){
			quantityOfChar++;
		}
	}
	return(quantityOfChar);
}

function countBsRefactored(string){
	return countChar(string, "B");
}

