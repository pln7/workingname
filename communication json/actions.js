//imputation année d'imputation, dateDebut et dateFin dates de début et de fin, matinApremDeb = 1 si début le matin et 2 si début l'après midi (idem matinApremFin)
//retour : un json de validation de pose d'abscense
function poserAbsence(absCourt, imputation, dateDebut, dateFin, matinApremDeb, matinApremFin) {

	/*
	on ne passe pas par le métier pégase

	requete = "action=pose&absCourt="+absCourt+"&imputation="+imputation;
	requete += "&dateDebut="+dateDebut+"&dateFin="+dateFin+"&matinApremDeb="+matinApremDeb+"&matinApremFin="+matinApremFin;
	 */

	var jsonRetour = "{ \"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"18-02-2014 à 15:05:19\", \"action\" : \"pose\", \"msg\" : \"Succès de l'opération pose de du 23-02-2014 au 23-02-2014\" }";

	return jsonRetour;
}




//imputation année d'imputation, dateDebut et dateFin dates de début et de fin, matinApremDeb = 1 si début le matin et 2 si début l'après midi (idem matinApremFin)
//retour : un json de validation de suppression d'abscence
function supprimeAbsence(absCourt, imputation, dateDebut, dateFin, matinApremDeb, matinApremFin) {
	/*
	on ne passe pas par le métier pégase

	requete = "action=supprime&absCourt="+absCourt+"&imputation="+imputation;
	requete += "&dateDebut="+dateDebut+"&dateFin="+dateFin+"&matinApremDeb="+matinApremDeb+"&matinApremFin="+matinApremFin;
	 */

	var jsonRetour = "{\"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"18-02-2014 à 15:01:46 \", \"action\" : \"supprime\",\"msg\" : \"le serveur a supprimé une absence du 19-02-2014 au 19-02-2014\" }";

	return jsonRetour;
}


function visuAbsence(_anneeImputation) {
	var anneeImputation = toString(_anneeImputation);
	var jsonRetour = "{ "
		+"\"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"17-02-2014 à 16:37:10\", \"action\" : \"visuabsences\", \"msg\" : \"Succès de l'opération visualisation des absences. \", \"absences\" : "
		+"[ "
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20120914\", \"dateFin\" :\"20120914\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20120920\", \"dateFin\" :\"20120925\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"4\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130111\", \"dateFin\" :\"20130111\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130118\", \"dateFin\" :\"20130118\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130130\", \"dateFin\" :\"20130130\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130215\", \"dateFin\" :\"20130215\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130226\", \"dateFin\" :\"20130305\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"6\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130306\", \"dateFin\" :\"20130308\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CMFP\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés de maladie ordinaire \", \"commentaire\" : \"\", \"nombreJours\" : \"3\", \"reste\" : \"\" , \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130315\", \"dateFin\" :\"20130315\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130322\", \"dateFin\" :\"20130322\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130329\", \"dateFin\" :\"20130402\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"2\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130506\", \"dateFin\" :\"20130507\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"2\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130527\", \"dateFin\" :\"20130527\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130531\", \"dateFin\" :\"20130531\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130607\", \"dateFin\" :\"20130607\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130708\", \"dateFin\" :\"20130708\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"1\", \"absCourt\" : \"CANN\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130708\", \"dateFin\" :\"20130708\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"KJMI\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Compensation Missions ou autres \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"2\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130716\", \"dateFin\" :\"20130719\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"3.5\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130726\", \"dateFin\" :\"20130726\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"1\", \"absCourt\" : \"REBL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130802\", \"dateFin\" :\"20130802\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130812\", \"dateFin\" :\"20130821\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"6\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130925\", \"dateFin\" :\"20130925\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20130926\", \"dateFin\" :\"20130927\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"2\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20131112\", \"dateFin\" :\"20131112\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CAHS\", \"imputation\" :\""+anneeImputation+"\", \"libelle\" :\"Jour de fractionnement pour congés annuels hors saison \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"1\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} "
		+"]"
		+"}";

	return jsonRetour;
}


function visuVacations(dateDebut, dateFin) {

	var jsonRetour = "{ \"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"17-02-2014 à 16:15:56\", \"action\" : \"visuvacations\", \"msg\" : \"Succès de l'opération liste des vacations du TS. \","
		+" \"vacations\" : "
		+" [ "
		+" { \"insee\" : \"_______104\", \"dateLundi\" : \"20140217\", \"vacCourt\": \"_bdg\", \"modifiable\": \"1\", \"vacExcept\": \"0\", \"vacSalon\": \"0\", \"vacNAS\": \"0\", \"vacCompensee\": \"0\",\"vacMission\": \"0\", \"vacBonifiée\": \"0\", \"vacBadgee\": \"1\", \"vacAstreinte\": \"\", \"libelle\": \"Vacation créée à partir d'infos badgeuse\", \"commvac\": \"\", \"dateDeb\": \"20140217\", \"dateFin\" :\"20140217\", \"hhdeb\" : \"09:00\", \"hhfin\" :\"17:09\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"489\", \"dureeReelle\": \"444\", \"dureeEffective\": \"444\", \"dureeCompensee\": \"0\", \"dureeDeplacmtAst\": \"0\", \"dureeInfoA\": \"0\", \"dureeInfoB\": \"0\", \"dureeInfoC\": \"0\"} ,"
		+" { \"insee\" : \"_______104\", \"dateLundi\" : \"20140217\", \"vacCourt\": \"_bgC\", \"modifiable\": \"1\", \"vacExcept\": \"0\", \"vacSalon\": \"0\", \"vacNAS\": \"0\", \"vacCompensee\": \"0\",\"vacMission\": \"0\", \"vacBonifiée\": \"0\", \"vacBadgee\": \"1\", \"vacAstreinte\": \"\", \"libelle\": \"Vacation créée à partir d'infos badgeuse corrigées\", \"commvac\": \"\", \"dateDeb\": \"20140218\", \"dateFin\" :\"20140218\", \"hhdeb\" : \"07:30\", \"hhfin\" :\"17:31\", \"HHPauseDeb\" :\"12:15\", \"HHPauseFin\" :\"13:00\", \"dureeT\": \"601\", \"dureeReelle\": \"556\", \"dureeEffective\": \"556\", \"dureeCompensee\": \"0\", \"dureeDeplacmtAst\": \"0\", \"dureeInfoA\": \"0\", \"dureeInfoB\": \"0\", \"dureeInfoC\": \"0\"} ,"
		+"   { \"insee\" : \"_______104\", \"dateLundi\" : \"20140217\", \"vacCourt\": \"_bdM\", \"modifiable\": \"1\", \"vacExcept\": \"0\", \"vacSalon\": \"0\", \"vacNAS\": \"0\", \"vacCompensee\": \"0\",\"vacMission\": \"0\", \"vacBonifiée\": \"0\", \"vacBadgee\": \"1\", \"vacAstreinte\": \"\", \"libelle\": \"Vacation créée à partir d'infos badgeuse modifiées\", \"commvac\": \"\", \"dateDeb\": \"20140219\", \"dateFin\" :\"20140219\", \"hhdeb\" : \"08:53\", \"hhfin\" :\"18:12\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"559\", \"dureeReelle\": \"514\", \"dureeEffective\": \"514\", \"dureeCompensee\": \"0\", \"dureeDeplacmtAst\": \"0\", \"dureeInfoA\": \"0\", \"dureeInfoB\": \"0\", \"dureeInfoC\": \"0\"} ,"
		+" { \"insee\" : \"_______105\", \"dateLundi\" : \"20140217\", \"vacCourt\": \"HB5a\", \"modifiable\": \"1\", \"vacExcept\": \"0\", \"vacSalon\": \"0\", \"vacNAS\": \"0\", \"vacCompensee\": \"0\",\"vacMission\": \"0\", \"vacBonifiée\": \"0\", \"vacBadgee\": \"0\", \"vacAstreinte\": \"\", \"libelle\": \"Journée Horaire de bureau 37h/5j\", \"commvac\": \"\", \"dateDeb\": \"20140220\", \"dateFin\" :\"20140220\", \"hhdeb\" : \"09:00\", \"hhfin\" :\"17:09\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"489\", \"dureeReelle\": \"444\", \"dureeEffective\": \"444\", \"dureeCompensee\": \"0\", \"dureeDeplacmtAst\": \"0\", \"dureeInfoA\": \"0\", \"dureeInfoB\": \"0\", \"dureeInfoC\": \"0\"} "
		+" ]"
		+" }";
	return jsonRetour;
}


function listeGabaritsVacations() {
	var jsonRetour = "{ \"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"17-02-2014 à 16:15:56\", \"action\" : \"listegabaritsvac\", \"msg\" : \"Succès de l'opération liste des gabarits de vacs. \","
	 +" \"gabarits\" : "
	 +" [ "
	 +" { \"gabcourt\" : \"HB5j\", \"libelle\" : \"Journée Horaire de bureau 37h/5j\", \"hhdeb\" : \"09:00\", \"hhfin\" :\"17:09\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"489\", \"VacModif\" : \"1\", \"Oblig\" :\"0\"},"
	 +" { \"gabcourt\" : \"HB6a\", \"libelle\" : \"Après midi horaire de bureau 36h/4,5j\", \"hhdeb\" : \"14:00\", \"hhfin\" :\"18:00\", \"HHPauseDeb\" :\"\", \"HHPauseFin\" :\"\", \"dureeT\": \"240\", \"VacModif\" : \"1\", \"Oblig\" :\"0\"},"
	 +" { \"gabcourt\" : \"HB4j\", \"libelle\" : \"Journée horaire de bureau 36h/4j\", \"hhdeb\" : \"09:00\", \"hhfin\" :\"18:45\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"585\", \"VacModif\" : \"1\", \"Oblig\" :\"0\"},"
	 +"  { \"gabcourt\" : \"HB5m\", \"libelle\" : \"Matinée horaire de bureau 37h/5j\", \"hhdeb\" : \"09:00\", \"hhfin\" :\"12:42\", \"HHPauseDeb\" :\"\", \"HHPauseFin\" :\"\", \"dureeT\": \"224\", \"VacModif\" : \"1\", \"Oblig\" :\"0\"},"
	 +"  { \"gabcourt\" : \"E100\", \"libelle\" : \"Mission ordinaire\", \"hhdeb\" : \"09:00\", \"hhfin\" :\"17:09\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"489\", \"VacModif\" : \"1\", \"Oblig\" :\"0\"}"
	 +" ]"
	 +" }";
	return jsonRetour;
	}

function poseVacations(absCourt, imputation, dateDebut, dateFin, matinApremDeb, matinApremFin) {
	var jsonRetour = "{ \"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"18-02-2014 à 15:05:19\", \"action\" : \"pose\", \"msg\" : \"Succès de l'opération pose de du 23-02-2014 au 23-02-2014\" }";
	return jsonRetour;
}


function visuVacations(dateDebut, dateFin) {
	var jsonRetour = "{ \"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"17-02-2014 à 16:15:56\", \"action\" : \"visuvac\", \"msg\" : \"Succès de l'opération liste des vacations du TS. \","
		+" \"vacations\" : "
		+" [ "
		+" { \"insee\" : \"_______104\", \"dateLundi\" : \"20140217\", \"vacCourt\": \"_bdg\", \"modifiable\": \"1\", \"vacExcept\": \"0\", \"vacSalon\": \"0\", \"vacNAS\": \"0\", \"vacCompensee\": \"0\",\"vacMission\": \"0\", \"vacBonifiée\": \"0\", \"vacBadgee\": \"1\", \"vacAstreinte\": \"\", \"libelle\": \"Vacation créée à partir d'infos badgeuse\", \"commvac\": \"\", \"dateDeb\": \"20140217\", \"dateFin\" :\"20140217\", \"hhdeb\" : \"09:00\", \"hhfin\" :\"17:09\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"489\", \"dureeReelle\": \"444\", \"dureeEffective\": \"444\", \"dureeCompensee\": \"0\", \"dureeDeplacmtAst\": \"0\", \"dureeInfoA\": \"0\", \"dureeInfoB\": \"0\", \"dureeInfoC\": \"0\"} "
		+"]"
		+"}";
	return jsonRetour;
}


function imprimeAbscence(insee, dateDebut, dateFin, matinApremDeb, matinApremFin, absCourt, imputation, libelle, commentaire, nombreJours, reste, typeAbsence, JNT) {

	return ("un pdf");
}


function listeAgents() {
	var jsonRetour = "{ \"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"17-02-2014 à 16:15:56\", \"action\" : \"listeagents\", \"msg\" : \"Succès de l'opération liste des agents. \","
		+" \"agents\" : "
		+" [ "
		+" { \"insee\" : \"_______104\", \"nom\" : \"Durand\", \"prenom\" : \"Pierre\", \"matricule\" : \"PDURA\"},"
		+" { \"insee\" : \"_______105\", \"nom\" : \"Dupond\", \"prenom\" : \"Jacques\", \"matricule\" : \"JDUPO\"}"
		+"]"
		+"}";
	return jsonRetour;
}


/*
 * 
 * 
 * fonctions travaillant sur les objets afin de pouvoir les manipuler de manière plus pratique
 * 
 * 
 */


/*
 * crée un objet contenant la correspondance INSEE/Matricule
 * paramètre : une liste d'agents  (renvoyée par json2Object(listeAgents()) )
 * retour : un tableau contenant dans chaque ligne {insee : num_insee, matricule = matr_agent}
 */
function correspondanceMatriculeInsee(listeAgents) {
	var agents = listeAgents["agents"];

	var tableauRetour = new Array(); // tableau à retourner
	var ligne = {}; // ligne du tableau correspondant à un agent
	var temp;
	for (prop in agents) {
		temp = agents[prop];
		ligne = {
				insee : temp["insee"],
				matricule : temp["matricule"]
		};
		tableauRetour.push(ligne);
	}
	return tableauRetour;
}

/*
 * renvoie un objet ne contenant que les absences de la semaine passée en paramètre
 * parametre : liste d'absences et date du lundi de la semaine concernée (sous forme d'un objet Date)
 * retour : liste d'absences ne contenant que celles de la semaine
 */
function getAbsencesSemaine(listeAbsences, _dateLundi) {
	//début de la semaine le lundi à 0h
	var dateLundi = new Date();
	dateLundi = _dateLundi;
	dateLundi.setHours(0, 0, 0, 0);
	
	//fin de la semaine le vendredi à 23h59
	var dateVendredi = new Date();
	dateVendredi = dateLundi;
	dateVendredi.setHours(23, 59, 0, 0);
	var toAdd = 86400000*4; // 4 jours en milisecondes
	dateVendredi.setTime(dateVendredi.getTime()+toAdd);

	
	var tableauRetour = new Array();
	var temp;
	var dateDeb = new Date();
	var dateFin;
	for (prop in listeAbsences) {
		temp = listeAbsences[prop];
		dateDeb = Date.parse(temp["dateDebut"].substring(0,4)+"/"+temp["dateDebut"].substring(4,6)+"/"+temp["dateDebut"].substring(6,8));
		dateFin = Date.parse(temp["dateFin"].substring(0,4)+"/"+temp["dateFin"].substring(4,6)+"/"+temp["dateFin"].substring(6,8));
		if ((dateDeb<dateVendredi.getTime()) && dateFin>dateLundi.getTime()) {
			tableauRetour.push(temp);
		}
	}
	return tableauRetour;
}


/*
 * renvoie un tableau contenant les absences de l'agent donc le matricule est pasé en paramètre
 * paramètre : liste des absences de base 
 * 			   matricule concerné
 * 			   tableau de correspondances insee/matricule
 */
function getAbsencesByMatricule(listeAbsences, matricule, correspondances) {
	var insee;
	var temp;
	// récupère l'inse correspondant au matricule dans correspondances
	for (prop in correspondances) {
		temp = correspondances[prop];
		if (temp["matricule"] == matricule) {
			insee = temp["insee"];
		}
	}
	
	// renvoie un tableau ne contenant que les absences correspondant à l'insee donné
	var tableauRetour = new Array();
	for (prop in listeAbsences) {
		temp = listeAbsences[prop];
		if (temp["insee"] == insee) {
			tableauRetour.push(temp);
		}
	}
	return tableauRetour;
}


/*
 * renvoie un objet date contenant la date du lundi précédent
 * parametre : un objet de type Date
 * retour : un objet de type date à la date du lundi précédent
 */
function getMonday(_d) {
	var d = new Date();
	var numJour = d.getDay();//numéro du jour - Dimanche = 0, Lundi 1,...
	//o ndécale les numéros pour que lundi = 0, mardi = 1,...
	if (numJour == 0) { 
		numJour = 6;
	} else {
		numJour = numJour - 1;
	}

	//calcul de la date du lundi en millisecondes depuis le 1/1/1970
	var milliToAdd = d.getTime() - (numJour*86400000); 

	d.setTime(milliToAdd);

	return d;
}


/*
 * a voir si a coder
 * */

//idem poserAbscence, mais modifie un objet Tableau de service pour prendre en compte la modification
function poserAbscenceMod(absCourt, imputation, dateDebut, dateFin, matinApremDeb, matinApremFin, objetAModifier) {
	var retour = objetAModifier;
	var json = "{ \"insee\" : \"_______104\", \"dateDebut\" : "+dateDebut+", \"dateFin\" : "+dateFin+", \"matinApremDeb\" :"+matinApremDeb+", \"matinApremFin\" :"+matinApremFin+", \"absCourt\" : "+absCourt+", \"imputation\" :"+imputation+", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"}";
	var nouvelleAbs = JSON.parse(json);
	retour.abscences.push(nouvelleAbs);
	return retour;
}



//idem supprimeAbscence, mais modifie un objet Tableau de service pour prendre en compte la modification
function supprimeAbscenceMod(absCourt, imputation, dateDebut, dateFin, matinApremDeb, matinApremFin, objetAModifier) {
	var retour = objetAModifier;

	return retour;
}


















