function minimum(n1, n2){
	let min;
	if(n1 < n2){
		min = n1;
	}
	else if(n2 < n1){
		min = n2;
	}
	else{
		min = n1;
	}

	return min;
}

console.log(minimum(5,5));