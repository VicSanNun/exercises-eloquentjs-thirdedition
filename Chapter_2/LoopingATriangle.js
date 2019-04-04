function triangle(numberOfLines){
	let hash = "";
	let count = 0;
	while(count < numberOfLines){
		console.log(hash+="#");
		count++;
	}
}

function triangleDoWhile(numberOfLines){
	let hash = "#";
	let count = 0;
	do{
		console.log(hash);
		hash+="#";
		count++;
	}while(count < numberOfLines);
}

function triagleWithFor(numberOfLines){
	let hash = "#"
	for(let i = 0; i < numberOfLines; i++){
		console.log(hash);
		hash+="#";
	}
}

triangle(6);
triangleDoWhile(6);
triagleWithFor(6);