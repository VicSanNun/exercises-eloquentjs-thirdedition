function range(start, end){
	let listOfNumbers = [];	
	if(end < start){
		for(let count = start; count >= end; count--){
			listOfNumbers.push(count);
		}
	}
	for(let count = start; count <= end; count++){
		listOfNumbers.push(count);
	}

	return listOfNumbers;
}

function sum(AlistOfNumbers){
	let sum = 0;
	for(let number of AlistOfNumbers){
		sum+=number
	}
	return sum;
}

function rangeWithSteps(start, end, step = 1){
	let listOfNumbers = [start];
	let count = start;
	let newNumber = start;
	while(count <= end){
		newNumber+=step;
		if(newNumber > end) break;
		listOfNumbers.push(newNumber);
		count++;
	}
	return listOfNumbers;
}
