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

// Retourne la numéro de la semaine courante
function getWeekNumber() {
	var d = new Date();
	var DoW = d.getDay();
	d.setDate(d.getDate() - (DoW + 6) % 7 + 3); // Nearest Thu
	var ms = d.valueOf(); // GMT
	d.setMonth(0);
	d.setDate(4); // Thu in Week 1
	return Math.round((ms - d.valueOf()) / (7 * 864e5)) + 1;
}