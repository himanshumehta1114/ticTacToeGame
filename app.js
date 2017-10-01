$(document).ready(function(){
	input_symbol = prompt("What would Like to be X or 0(zero) ?");
	var cross = input_symbol;
	var zero = '0';
	if(cross === '0'){
		zero = 'x';		
	}
	var row = [];
	var column = [];
	var cRow = [];
	var cCol = [];
	var response = 0;
	var personArr = [];
	var compArr = [];
	var done = false;
	$('td').click(function(){
		response = $(this).attr('value');
		console.log(response);
		personArr.push(response);
		row.push(response[0]);
		column.push(response[2]);
		$(this).html(cross);
		console.log("row : " + row);
		console.log("column : " + column);
		if(personArr.length + compArr.length >= 8){
			done = true;
		}else{
			done = false;
		}
		comp();
		check();
		checkComp();
	});

	function comp(){
		while(done !== true){

			compRow = Math.floor(Math.random() * 3);
			compCol = Math.floor(Math.random() * 3);
			var compResponse = compRow + "," + compCol;
			console.log(compResponse);
				if(personArr.indexOf(compResponse) == -1 && compArr.indexOf(compResponse) == -1){
					compArr.push(compResponse);
					cRow.push(compRow);
					cCol.push(compCol);
					$('td[value=' + "'" + compRow + ',' + compCol + "']").html(zero);
					done = true;
				}
			}

	}

	function check(){
		row.sort();
		console.log(row);
		for(var i=0;i<row.length-2;i++){
			console.log("Person array: " + row);
			if(row[i] == row[i+1] && row[i+1] == row[i+2]){
				if(alert("You won!")){}
					else{
						window.location.reload();
					}
			}
		}
		column.sort();
		for(var i=0;i<column.length-2;i++){
			console.log("Person array: " + column);
			if(column[i] == column[i+1] && column[i+1] == column[i+2]){
				if(alert("You won!")){}
					else{
						window.location.reload();
					}
			}
		}
		if(personArr.indexOf('1,1') != -1 && personArr.indexOf('2,2') != -1 && personArr.indexOf('1,1') != -1){
				if(alert("You won!")){}
					else{
						window.location.reload();
					}
		}

		if(personArr.indexOf('2,0') != -1 && personArr.indexOf('0,2') != -1 && personArr.indexOf('1,1') != -1){
				if(alert("You won!")){}
					else{
						window.location.reload();
					}
		}

		
	}

	function checkComp(){
		cRow.sort();
		console.log(cRow);
		for(var i=0;i<cRow.length-2;i++){
			console.log("Person array: " + cRow);
			if(cRow[i] == cRow[i+1] && cRow[i+1] == cRow[i+2]){
				if(alert("Computer won!")){}
					else{
						window.location.reload();
					}
			}
		}
		cCol.sort();
		for(var i=0;i<cCol.length-2;i++){
			console.log("Person array: " + cCol);
			if(cCol[i] == cCol[i+1] && cCol[i+1] == cCol[i+2]){
								if(alert("Computer won!")){}
					else{
						window.location.reload();
					}
			}
		}
		if(compArr.indexOf('1,1') != -1 && compArr.indexOf('2,2') != -1 && compArr.indexOf('1,1') != -1){
				if(alert("Computer won!")){}
					else{
						window.location.reload();
					}
		}		
		
		if(compArr.indexOf('1,1') != -1 && compArr.indexOf('0,2') != -1 && compArr.indexOf('2,0') != -1){
				if(alert("Computer won!")){}
					else{
						window.location.reload();
					}
		}
	}

});