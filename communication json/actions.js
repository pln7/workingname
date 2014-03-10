//imputation année d'imputation, dateDebut et dateFin dates de début et de fin, matinApremDeb = 1 si début le matin et 2 si début l'après midi (idem matinApremFin)
//retour : un json de validation de pose d'abscense
function poserAbsence(absCourt, imputation, dateDebut, dateFin, matinApremDeb, matinApremFin, matricule) {

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
function supprimeAbsence(absCourt, imputation, dateDebut, dateFin, matinApremDeb, matinApremFin, matricule) {
	/*
	on ne passe pas par le métier pégase

	requete = "action=supprime&absCourt="+absCourt+"&imputation="+imputation;
	requete += "&dateDebut="+dateDebut+"&dateFin="+dateFin+"&matinApremDeb="+matinApremDeb+"&matinApremFin="+matinApremFin;
	 */

	var jsonRetour = "{\"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"18-02-2014 à 15:01:46 \", \"action\" : \"supprime\",\"msg\" : \"le serveur a supprimé une absence du 19-02-2014 au 19-02-2014\" }";

	return jsonRetour;
}


function visuAbsence(dateDebut, dateFin, matricule) {
	var jsonRetour = "{ "
		+"\"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"17-02-2014 à 16:37:10\", \"action\" : \"visuabsences\", \"msg\" : \"Succès de l'opération visualisation des absences. \", \"absences\" : "
		+"[ "
	/*	+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\"2014\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\"2014\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"4\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\"2014\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\"2014\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\"2014\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\"2014\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\"2014\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"6\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CMFP\", \"imputation\" :\"2014\", \"libelle\" :\"Congés de maladie ordinaire \", \"commentaire\" : \"\", \"nombreJours\" : \"3\", \"reste\" : \"\" , \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\"2014\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\"2014\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\"2014\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"2\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\"2014\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"2\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\"2014\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\"2014\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"SJRL\", \"imputation\" :\"2014\", \"libelle\" :\"JRTT libre \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"0\", \"typeAbsence\" : \"1\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"1\", \"absCourt\" : \"CANN\", \"imputation\" :\"2014\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"KJMI\", \"imputation\" :\"2014\", \"libelle\" :\"Compensation Missions ou autres \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"2\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"2\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\"2014\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"3.5\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"1\", \"absCourt\" : \"REBL\", \"imputation\" :\"2014\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"0.5\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\"2014\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\"2014\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"6\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"REBL\", \"imputation\" :\"2014\", \"libelle\" :\"Récupération bilan ou crédit/débit \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"\" , \"typeAbsence\" : \"3\", \"JNT\" : \"0\"} ,"
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140310\", \"dateFin\" :\"20140313\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"2\", \"absCourt\" : \"CANN\", \"imputation\" :\"2014\", \"libelle\" :\"Congés annuels \", \"commentaire\" : \"\", \"nombreJours\" : \"2\", \"reste\" : \"2\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} ,"*/
		+"{ \"insee\" : \"_______104\", \"dateDebut\" : \"20140307\", \"dateFin\" :\"20140311\", \"matinApremDeb\" :\"1\", \"matinApremFin\" :\"1\", \"absCourt\" : \"CAHS\", \"imputation\" :\"2014\", \"libelle\" :\"Jour de fractionnement pour congés annuels hors saison \", \"commentaire\" : \"\", \"nombreJours\" : \"1\", \"reste\" : \"1\", \"typeAbsence\" : \"1\", \"JNT\" : \"1\"} "
		+"]"
		+"}";

	return jsonRetour;
}


function visuVacations(dateDebut, dateFin, matricule) {

	var jsonRetour = "{ \"serveur\" : \"glycine31c\" , \"cr\" : 0 , \"date\" : \"17-02-2014 à 16:15:56\", \"action\" : \"visuvacations\", \"msg\" : \"Succès de l'opération liste des vacations du TS. \","
		+" \"vacations\" : "
		+" [ "
		+" { \"insee\" : \"_______104\", \"dateLundi\" : \"20140217\", \"vacCourt\": \"_bdg\", \"modifiable\": \"1\", \"vacExcept\": \"0\", \"vacSalon\": \"0\", \"vacNAS\": \"0\", \"vacCompensee\": \"0\",\"vacMission\": \"0\", \"vacBonifiée\": \"0\", \"vacBadgee\": \"1\", \"vacAstreinte\": \"\", \"libelle\": \"Vacation créée à partir d'infos badgeuse\", \"commvac\": \"\", \"dateDeb\": \"20140313\", \"dateFin\" :\"20140313\", \"hhdeb\" : \"13:00\", \"hhfin\" :\"17:09\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"489\", \"dureeReelle\": \"444\", \"dureeEffective\": \"444\", \"dureeCompensee\": \"0\", \"dureeDeplacmtAst\": \"0\", \"dureeInfoA\": \"0\", \"dureeInfoB\": \"0\", \"dureeInfoC\": \"0\"} ,"
		+" { \"insee\" : \"_______104\", \"dateLundi\" : \"20140217\", \"vacCourt\": \"_bgC\", \"modifiable\": \"1\", \"vacExcept\": \"0\", \"vacSalon\": \"0\", \"vacNAS\": \"0\", \"vacCompensee\": \"0\",\"vacMission\": \"0\", \"vacBonifiée\": \"0\", \"vacBadgee\": \"1\", \"vacAstreinte\": \"\", \"libelle\": \"Vacation créée à partir d'infos badgeuse corrigées\", \"commvac\": \"\", \"dateDeb\": \"20140314\", \"dateFin\" :\"20140314\", \"hhdeb\" : \"07:30\", \"hhfin\" :\"11:31\", \"HHPauseDeb\" :\"12:15\", \"HHPauseFin\" :\"13:00\", \"dureeT\": \"601\", \"dureeReelle\": \"556\", \"dureeEffective\": \"556\", \"dureeCompensee\": \"0\", \"dureeDeplacmtAst\": \"0\", \"dureeInfoA\": \"0\", \"dureeInfoB\": \"0\", \"dureeInfoC\": \"0\"} "//REMETTRE LA VIRGULE
	/*	+"   { \"insee\" : \"_______104\", \"dateLundi\" : \"20140217\", \"vacCourt\": \"_bdM\", \"modifiable\": \"1\", \"vacExcept\": \"0\", \"vacSalon\": \"0\", \"vacNAS\": \"0\", \"vacCompensee\": \"0\",\"vacMission\": \"0\", \"vacBonifiée\": \"0\", \"vacBadgee\": \"1\", \"vacAstreinte\": \"\", \"libelle\": \"Vacation créée à partir d'infos badgeuse modifiées\", \"commvac\": \"\", \"dateDeb\": \"20140313\", \"dateFin\" :\"20140313\", \"hhdeb\" : \"08:53\", \"hhfin\" :\"18:12\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"559\", \"dureeReelle\": \"514\", \"dureeEffective\": \"514\", \"dureeCompensee\": \"0\", \"dureeDeplacmtAst\": \"0\", \"dureeInfoA\": \"0\", \"dureeInfoB\": \"0\", \"dureeInfoC\": \"0\"} ,"
		+" { \"insee\" : \"_______105\", \"dateLundi\" : \"20140217\", \"vacCourt\": \"HB5a\", \"modifiable\": \"1\", \"vacExcept\": \"0\", \"vacSalon\": \"0\", \"vacNAS\": \"0\", \"vacCompensee\": \"0\",\"vacMission\": \"0\", \"vacBonifiée\": \"0\", \"vacBadgee\": \"0\", \"vacAstreinte\": \"\", \"libelle\": \"Journée Horaire de bureau 37h/5j\", \"commvac\": \"\", \"dateDeb\": \"20140313\", \"dateFin\" :\"20140313\", \"hhdeb\" : \"09:00\", \"hhfin\" :\"17:09\", \"HHPauseDeb\" :\"12:00\", \"HHPauseFin\" :\"12:45\", \"dureeT\": \"489\", \"dureeReelle\": \"444\", \"dureeEffective\": \"444\", \"dureeCompensee\": \"0\", \"dureeDeplacmtAst\": \"0\", \"dureeInfoA\": \"0\", \"dureeInfoB\": \"0\", \"dureeInfoC\": \"0\"} "
		*/+" ]"
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




function imprimeAbscence(insee, dateDebut, dateFin, matinApremDeb, matinApremFin, absCourt, imputation, libelle, commentaire, nombreJours, reste, typeAbsence, JNT) {

	return ("un pdf");
}


function listeAgents() {
	var jsonRetour = "{    \"serveur\": \"nomServeur\","
		+"\"cr\": 0,"
		+"\"date\": \"18-02-2014 à 15:25:02\","
		+"\"base\": \"NNN\","
		+"\"datelundi\": \"20140217\","
		+"\"action\": \"infoagents\","
		+"\"msg\": \"Retour des infos de tous les agents de la base NNN semaine du 17-02-2014 \","
		+"\"infoagents\": [        {            \"matricule\": \"MF0001234\","
		+"\"DateAppli\": \"20100101\","
		+"\"Nom\": \"DUPONT\","
		+"\"Prenom\": \"Pierre\","
		+"\"Grade\": \"ITM\","
		+"\"Echelon\": \"6\","
		+"\"Fonc\": \"\","
		+"\"Quotite\": \"100\","
		+"\"Modalite\": \"1\","
		+"\"TPNonTravaille\": \"\","
		+"\"MTT\": \"0\","
		+"\"NbJPivot\": \"5,00\","
		+"\"DureeHebdoPivot\": \"37:00\","
		+"\"PivotNonTravaille\": \"\","
		+"\"PivotPoste\": \"0\","
		+"\"ModeBonif\": \"5\","
		+"\"CadreAuto\": \"0\","
		+"\"CadreDir\": \"0\","
		+"\"CadreTerritorial\": \"0\","
		+"\"Categorie\": \"\","
		+"\"Brigadiste\": \"0\","
		+"\"BrigRattache\": \"0\","
		+"\"ModeTravail\": \"2\","
		+"\"ClasseServ\": \"2\","
		+"\"AgentAstreint\": \"0\","
		+"\"LogementService\": \"0\","
		+"\"DomAstreinte\": \"255\","
		+"\"QualifInfo\": \"1\","
		+"\"Pseudo\": \"PDUPO\","
		+"\"insee\": \"_______104\","
		+"\"TPdeDroit\": \"faux\"			        },"
		+"{\"matricule\": \"MF0004321\","
		+"\"DateAppli\": \"20120601\","
		+"\"Nom\": \"SMITH\","
		+"\"Prenom\": \"John\","
		+"\"Grade\": \"TSE\","
		+"\"Echelon\": \"4\","
		+"\"Fonc\": \"\","
		+"\"Quotite\": \"80\","
		+"\"Modalite\": \"3\","
		+"\"TPNonTravaille\": \"00300\","
		+"\"MTT\": \"0\","
		+"\"NbJPivot\": \"5,00\","
		+"\"DureeHebdoPivot\": \"37:00\","
		+"\"PivotNonTravaille\": \"\","
		+"\"PivotPoste\": \"0\","
		+"\"ModeBonif\": \"5\","
		+"\"CadreAuto\": \"0\","
		+"\"CadreDir\": \"0\","
		+"\"CadreTerritorial\": \"0\","
		+"\"Categorie\": \"\","
		+"\"Brigadiste\": \"0\","
		+"\"BrigRattache\": \"0\","
		+"\"ModeTravail\": \"2\","
		+"\"ClasseServ\": \"2\","
		+"\"AgentAstreint\": \"0\","
		+"\"LogementService\": \"0\","
		+"\"DomAstreinte\": \"255\","
		+"\"QualifInfo\": \"1\","
		+"\"Pseudo\": \"JSMIT\","
		+"\"insee\": \"_______105\","
		+"\"TPdeDroit\": \"faux\"}    ]}";
	return jsonRetour;
}


function infoAgentCourant (matricule, date) {
	var jsonRetour = "{ \"serveur\" : \"nomServeur\" ,"
		+" \"cr\" : 0 ,"
		+" \"date\" : \"18-02-2014 à 15:25:02\","
		+" \"action\" : \"infobilans\","
		+" \"msg\" : \"Retour des infos bilan semaine du 17-02-2014\","
		+" \"bilans\" :[{\"matricule\": \"MF0004321\","
		+" \"teHebdo\" : \"36:45\","
		+" \"teFinal\": \"220:28\","
		+" \"teCalcul\": \"220:28\","
		+" \"bilanCumulé\" : \"+67:28 \","
		+" \"bilanFinal\" : \"+54:30\","
		+" \"bilanHebdo\" : \"+05:34\","
		+" \"bilanBrut\":\"+54:30\","
		+" \"iphaFinal\": \"00:00\","
		+" \"nuitHebdo\": \"09:00\","
		+" \"nuitPaye\": \"00:00\","
		+" \"compensationHebdo\":\"00:00\","
		+" \"compensationFinal\":\"+00:00\","
		+" \"IndemAstHebdo\":\"00:00\","
		+" \"DeplacmtAstHebdo\":\"00:00\","
		+" \"BHHebdo\":\"02:08\","
		+" \"BHFinal\":\"07:52\","
		+" \"BHRFinal\":\"00:00\","
		+" \"BHIFinal\": \"00:00\","
		+" \"RCHebdo\": \"00:54\","
		+" \"RCFinal\": \"05:10\","
		+" \"RCCAFinal\":\"05:10\","
		+" \"RCRECFinal\": \"00:00\","
		+" \"InfoA1Hebdo\": \"00:00\","
		+" \"InfoB1Hebdo\": \"00:00\","
		+" \"InfoC1Hebdo\": \"00:00\","
		+" \"InfoA2Hebdo\": \"00:00\","
		+" \"InfoB2Hebdo\": \"00:00\","
		+" \"InfoC2Hebdo\": \"00:00\","
		+" \"ObligHebdo\": \"35:00\","
		+" \"ObligFinal\": \"251:36\","
		+" \"ObligCalcul\": \"251:36\","
		+" \"AbsCompens\": \"0\","
		+" \"Nb1_2jNTHebdo\": \"2\"}]}";
	return jsonRetour;
}


/*
 * fonctions travaillant sur les objets afin de pouvoir les manipuler de manière plus pratique
 */

/*
 * renvoie un objet date contenant la date du vendredi précédent
 * parametre : un objet de type Date à la date du lundi
 * retour : un objet de type date à la date du vendredi de la semaine correspondante
 */
function getFriday(_dLundi) {
	var dateVendrediDble = new Date();
	var dateVendredi = clone(_dLundi);
	dateVendrediDble.setTime(Date.parse(dateVendredi));
	var toAdd = 86400000*4; // 4 jours en milisecondes
	dateVendrediDble.setTime(dateVendrediDble.getTime()+toAdd);
	return dateVendrediDble;
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
 * retourne un String représentant la date passée en paramètre sous la forme "20141222"
 */
function getDateStr(_d) {
	d = new Date();
	d = _d;
	var annee = d.getFullYear();
	var mois;
	var jour;
	//on rajoute les "0" pour les mois et jours avant le 10
	if ((d.getMonth()+1) < 10) {
		mois = "0"+(d.getMonth()+1);
	} else {
		mois = (d.getMonth()+1);
	}
	
	if (d.getDate() < 10) {
		jour = "0"+d.getDate();
	} else {
		jour = d.getDate();
	}
	
	var strReturn = annee+""+mois+""+jour;
	return strReturn;
	
};

/* 
 * calcule la différence en nombre de jours entre 2 dates (en valeur absolue, arrondie au supérieur
 */
function diffdate(d1,d2){
	var WNbJours = d2.getTime() - d1.getTime();
	WNbJours = WNbJours/(1000*60*60*24);
	if (WNbJours < 0) {
		WNbJours = -WNbJours;
	}
	return WNbJours;
}

/*
 * convertit une date au format "20142103" en objet de type Date (à 0h00m00s)
 */
function getDate(dStr) {
	d = new Date();
	var annee = dStr.substring(0,4);
	var mois = dStr.substring(4,6);
	var jour = dStr.substring(6,8);
	d.setFullYear(annee, mois, jour);
	d.setHours(0, 0, 0, 0);
	
	return d;
}

/*
 * Fonction de clonage
 * @author Keith Devens
 * @see http://keithdevens.com/weblog/archive/2007/Jun/07/javascript.clone
 */
function clone(srcInstance)
{
	/*Si l'instance source n'est pas un objet ou qu'elle ne vaut rien c'est une feuille donc on la retourne*/
	if(typeof(srcInstance) != 'object' || srcInstance == null)
	{
		return srcInstance;
	}
	/*On appel le constructeur de l'instance source pour crée une nouvelle instance de la même classe*/
	var newInstance = srcInstance.constructor();
	/*On parcourt les propriétés de l'objet et on les recopies dans la nouvelle instance*/
	for(var i in srcInstance)
	{
		newInstance[i] = clone(srcInstance[i]);
	}
	/*On retourne la nouvelle instance*/
	return newInstance;
}









/*
 * crée un objet contenant la correspondance INSEE/Pseudo
 * paramètre : une liste d'agents  (renvoyée par json2Object(listeAgents()) )
 * retour : un tableau contenant dans chaque ligne {insee : num_insee, pseudo = pseudo_agent}
 */
function correspondancePseudoInsee(listeAgents) {
	var agents = listeAgents["infoagents"];

	var tableauRetour = new Array(); // tableau à retourner
	var ligne = {}; // ligne du tableau correspondant à un agent
	var temp;
	for (prop in agents) {
		temp = agents[prop];
		ligne = {
				insee : temp["insee"],
				pseudo : temp["Pseudo"]
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



function getAbsencesByPseudo(listeAbsences, pseudo, correspondances) {
	var insee;
	var temp;
	// récupère l'inse correspondant au pseudo dans correspondances
	for (prop in correspondances) {
		temp = correspondances[prop];
		if (temp["Pseudo"] == pseudo) {
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

















