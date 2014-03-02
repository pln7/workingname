/*
 * page javascript gérant le tableau de service dynamique. 
 * 
 */



/*
 * controleur angular du tableau de service
 */
function tsCtrl($scope) {


	




	$scope.agents = [ // liste des agents TODO : récupérer à partir du JSON
	                  {
	                	  name : 'pierre', // matricule TODO : récupérer à partir du JSON
	                	  ts : [
	                	        {
	                	        	jourSem : 'Lundi', 
	                	        	matin : 'abs',
	                	        	aprem : 'abs'
	                	        },
	                	        {
	                	        	jourSem : 'Mardi',
	                	        	matin : 'null',
	                	        	aprem : 'null'
	                	        },
	                	        {
	                	        	jourSem : 'Mercredi',
	                	        	matin : 'vac',
	                	        	aprem : 'abs'
	                	        },
	                	        {
	                	        	jourSem : 'Jeudi',
	                	        	matin : 'vac',
	                	        	aprem : 'vac'
	                	        },
	                	        {
	                	        	jourSem : 'Vendredi',
	                	        	matin : 'vac',
	                	        	aprem : 'abs'
	                	        }
	                	        ]
	                  },

	                  {
	                	  name : 'jacques',
	                	  ts : [
	                	        {
	                	        	jourSem : 'Lundi',
	                	        	matin : 'abs',
	                	        	aprem : 'abs'
	                	        },
	                	        {
	                	        	jourSem : 'Mardi',
	                	        	matin : 'vac',
	                	        	aprem : 'abs'
	                	        },
	                	        {
	                	        	jourSem : 'Mercredi',
	                	        	matin : 'vac',
	                	        	aprem : 'abs'
	                	        },
	                	        {
	                	        	jourSem : 'Jeudi',
	                	        	matin : 'vac',
	                	        	aprem : 'vac'
	                	        },
	                	        {
	                	        	jourSem : 'Vendredi',
	                	        	matin : 'vac',
	                	        	aprem : 'abs'
	                	        }
	                	        ]
	                  }
	                  ]

	$scope.click = function() {
		
	};

	$scope.dblclick = function(jour,matin_ou_aprem) {
		window.open('form_ts.html?jour='+jour+'&matin_ou_aprem='+matin_ou_aprem,'_blank');
		return false;
	};
	
	$scope.getGabarits = function() {
		//récupération des gabarits de vacations du serveur
		var json = listeGabaritsVacations();
		var objet = json2Object(json);
		var listegabarits = objet["gabarits"];

		var temp;
		var tab = new Array();
		for (i in listegabarits) {
			temp = listegabarits[i];
			tab.push(temp["gabcourt"]);
		}
		return tab;
	};

	$scope.listeGabVacation = $scope.getGabarits();



};



