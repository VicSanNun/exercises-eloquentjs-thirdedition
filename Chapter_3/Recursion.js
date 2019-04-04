function isEven(n){
	let number = n-2;
	if(number == 1){
		return 0;
	}
	else if(number == 0){
		return 1;
	}
	else{
		return isEven(number);
	}
}

console.log(isEven(8));