function chessboard(x,y){
	const height = y;
	const width = x;
	let board = "";

	for (let y = 0; y < height; y++) {
	    if(y>0) board += "\n";
	    for (let x = 0; x < width; x++) {
	        if ((x + y) % 2 == 0){
	            board += " ";
	        }
	        else{
	            board += "#";
	        }
	    }
	}

	console.log(board);
}

chessboard(16,16);