// Page javascript gérant le récapitulatif alimentation

// Controleur angular
function recapAlimCtrl($scope) {

	$scope.liste_annees = [
	  {
        num : '2014'
      },
      {
        num : '2013'
      },
      {
        num : '2012'
      },
      {
        num : '2011'
      },
      {
        num : '2010'
      },
      {
        num : '2009'
      },
      {
        num : '2008'
      },
      {
        num : '2007'
      },
      {
        num : '2006'
      },
	  {
        num : '2005'
      },
      {
        num : '2004'
      },
      {
        num : '2003'
      },
	  {
        num : '2002'
      },
      {
        num : '2001'
      },
      {
        num : '2000'
      }
    ];

  // Reste à récupérer les bonnes infos côté serveur
  // Infos actuelles non suffisantes pour la page
	$scope.getInfos = function(annee, matricule){
		var json = infoAgentCourant(matricule,annee);
		$scope.infos = json2Object(json);
	}
}