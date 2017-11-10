function winOpen(value) {
	// body...
	var str=value;
	if(main.elements.inNewWin.checked){
	window.open(str);
	}
	else{
		alert("wrong");
	}
}