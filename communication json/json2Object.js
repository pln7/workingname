/*
	Convertit un json en objet javascript réutilisable facilement
	
	/!\ importer json2.js pour permettre une compatibilité IE
*/


function json2Object(json) {
	var object = JSON.parse(json, null);
	if (typeof object == "object") {
		return object ;
	}
	else {
		alert('Erreur lors du parse du json');
		return null;
	}
}
