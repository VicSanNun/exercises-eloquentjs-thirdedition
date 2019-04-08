function arrayToList(array){
	const initialBraces = "{";
	const finalBraces = "}";
	const arrayLenght = lenght(array);
	const finalItem = lenght(array)-1;
	
	let object = "";
	
	for(let count = 0; count < arrayLenght; count++){
		if(count == 0) object += initialBraces;
		object += `"value": ${array[count]}, "rest": `;
		if(count == finalItem){
			object+="null ";
			for(let count = 0; count < arrayLenght; count++){
				object+=finalBraces;
			}
		}
		else{
			object+=initialBraces;
		}
	}
	return object;
}

function lenght(array){
	let c = 0;
	for(let item of array){
		c++;
	}
	return c;
}


arrayToList([1,2,3]);