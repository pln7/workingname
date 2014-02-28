// TODO : ameliorer fonction semaine
function semaine(date) {

	var moisAnnee = ((date.getMonth()+1)+"/"+date.getFullYear());
	
	
	document.write("Lundi ");
	// Lundi
	if (date.getDay()==1) {
	
		document.write(
					   date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
					   )
	
	}

	else if (date.getDay()==2) {
		document.write(
					   (date.getDate()-1)+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
					   )
	}

	else if (date.getDay()==3) {
		document.write(
					   (date.getDate()-2)+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
					   )
	}

	else if (date.getDay()==4) {
		document.write(
					   (date.getDate()-3)+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
					   )
	}

	else if (date.getDay()==5) {
		document.write(
					   (date.getDate()-4)+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
					   )
	}

}