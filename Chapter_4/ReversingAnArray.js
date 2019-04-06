function reverseArray(array){
	let newArray = [];
	const tamanho = arrayLength(array);
	for(let count = 0; count < tamanho; count++){
		let item = array.pop();
		newArray.push(item);
	}
	return(newArray);
}

reverseArray(["V", "I", "C", "T", "O", "R"]);

function arrayLength(array){
	let c = 0;
	for(let item of array){
		c++;
	}	
	return c;
}