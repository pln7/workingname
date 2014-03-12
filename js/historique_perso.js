// Page javascript gérant l'historique personnel 

// Controleur angular
function historiquePersoCtrl($scope) {

    // Reste à récupérer les bonnes infos côté serveur
    // Infos actuelles non suffisantes pour la page
	$scope.getInfos = function(annee, matricule){
    	var json = infoAgentCourant(matricule,annee);
		$scope.infos = json2Object(json);
	}
}