/*
 * page javascript gérant le tableau de service dynamique. 
 * 
 */



/*
 * controleur angular du tableau de service
 */
function tsCtrl($scope) {


	$scope.dateLundi = getMonday(new Date());

	/*
	 * fonction d'initialisation du tableau de service à une semaine donnée
	 */
	$scope.initTs = function(dateLundi) {

		$scope.agents = new Array(); // on initialise la liste des agents

		var tsVide = [
		              {
		            	  jourSem : 'Lundi', 
		            	  matin : 'null',
		            	  aprem : 'null'
		              },
		              {
		            	  jourSem : 'Mardi',
		            	  matin : 'null',
		            	  aprem : 'null'
		              },
		              {
		            	  jourSem : 'Mercredi',
		            	  matin : 'null',
		            	  aprem : 'null'
		              },
		              {
		            	  jourSem : 'Jeudi',
		            	  matin : 'null',
		            	  aprem : 'null'
		              },
		              {
		            	  jourSem : 'Vendredi',
		            	  matin : 'null',
		            	  aprem : 'null'
		              }
		              ];

		var objectAgents = json2Object(listeAgents());
		var agents = objectAgents["infoagents"];

		var temp;
		var a = {}; // un agent
		for (prop in agents) {
			temp = agents[prop];
			a = {
					pseudo : temp["Pseudo"],
					matricule : temp["matricule"],
					name : temp["Prenom"]+" "+temp["Nom"],
					insee : temp["insee"],
					ts : tsVide

			};
			$scope.agents.push(a); // on ajoute l'agent à la liste
		}


		// $scope.agent contient la liste de tous les agents avec pseudo, name, insee, matricule initialisés, et un ts vide

		//remplissage du ts de chaque agent
		//on initialise toutes les variables en dehors des boucles pour optimiser le temps d'exécution
		var dateLundiStr = getDateStr($scope.dateLundi); // format 20141221
		var dateVendrediStr = getDateStr(getFriday($scope.dateLundi)); // format 20141221 
		var temp;
		var tempTS;
		var matricule;
		var insee;
		var absences = new Array(); // stocke les abs d'un agent
		var vacations = new Array(); // stocke les vacs d'un agent
		var dateDeb;
		var dateFin;
		var ecart1;//stocke le nombre de jours d'écart entre dateDebut et dateLundi
		var ecart2;//stocke le nombre de jours d'écart entre dateFin et dateVendredi
		var i;
		var hhdeb;
		var hhfin;

		for (prop in $scope.agents) {
			temp = $scope.agents[prop]; // chaque agent
			tempTS = temp["ts"]; // le ts de l'agent
			matricule = temp["matricule"];
			insee = temp["insee"];

			//boucle de parcours des absences de l'agent
			absences = json2Object(visuAbsence(dateLundiStr, dateVendrediStr, matricule))["absences"]; // liste des absences
			for (abs in absences) {
				dateDeb = absences[abs]["dateDebut"];
				dateFin = absences[abs]["dateFin"];
				

				if (dateDeb >= dateLundiStr) { //début en milieu de semaine
					if (dateFin <= dateVendrediStr) { // fin en milieu de semaine
						ecart2 = diffdate(getDate(dateFin), getDate(dateVendrediStr));
						ecart1 = diffdate(getDate(dateDeb), getDate(dateLundiStr));
						for (i=ecart1; i<(5-ecart2); i++) {
							if ((i == 4-ecart2) && (absences[abs]["matinApremFin"] == 1)) {
								tempTS[i]["matin"] = 'abs';
							} else if((i == ecart1) && (absences[abs]["matinApremDeb"] == 2)) {
								tempTS[i]["aprem"] = 'abs';
							}
							else {
								tempTS[i]["matin"] = 'abs';
								tempTS[i]["aprem"] = 'abs';
							}
						}
					}
					
					else { // début milieu de semaine - fin semaine suivante
						ecart1 = diffdate(getDate(dateDeb), getDate(dateLundiStr));
						for (i=ecart1; i<5; i++) { 
							if ((i == ecart1) && (absences[abs]["matinApremDeb"] == 2)) {
								tempTS[i]["aprem"] = 'abs';
							} else {
								tempTS[i]["matin"] = 'abs';
								tempTS[i]["aprem"] = 'abs';
							}
						}
					}
				}
				
				else { // début en semaine précédente
					if (dateFin <= dateVendrediStr) { // début semaine précédente - fin en milieu de semaine
						ecart2 = diffdate(getDate(dateFin), getDate(dateVendrediStr));
						for (i=0; i<(5-ecart2); i++) { // de 0 (lundi) à (5- nb de jours entre dateFin et vendredi)
							if ((i == 4-ecart2) && (absences[abs]["matinApremFin"] == 1)) {
								tempTS[i]["matin"] = 'abs';
							} else {
								tempTS[i]["matin"] = 'abs';
								tempTS[i]["aprem"] = 'abs';
							}
						}
					}
					
					else { // absence toute la semaine
						for (i=0; i<5; i++) {
							tempTS[i]["matin"] = 'abs';
							tempTS[i]["aprem"] = 'abs';
						}
					}
				}
			}
			
			
			//boucle de parcours des vacations de l'agent
			vacations = json2Object(visuVacations(dateLundiStr, dateVendrediStr, matricule))["vacations"]; // liste des vacations
			for (vac in vacations) {
				hhdeb = vacations[vac]["hhdeb"];
				hhfin = vacations[vac]["hhfin"];
				dateDeb = vacations[vac]["dateDeb"];
				dateFin = vacations[vac]["dateFin"];
				
				if (dateDeb >= dateLundiStr) { //début en milieu de semaine
					if (dateFin <= dateVendrediStr) { // fin en milieu de semaine
						ecart2 = diffdate(getDate(dateFin), getDate(dateVendrediStr));
						ecart1 = diffdate(getDate(dateDeb), getDate(dateLundiStr));
						for (i=ecart1; i<(5-ecart2); i++) {
							if ((i == 4-ecart2) && (hhfin <= "12:00")) {
								tempTS[i]["matin"] = 'vac';
							} else if((i == ecart1) && (hhdeb >= "12:00")) {
								tempTS[i]["aprem"] = 'vac';
							}
							else {
								tempTS[i]["matin"] = 'vac';
								tempTS[i]["aprem"] = 'vac';
							}
						}
					}
					
					else { // début milieu de semaine - fin semaine suivante
						ecart1 = diffdate(getDate(dateDeb), getDate(dateLundiStr));
						for (i=ecart1; i<5; i++) { 
							if ((i == ecart1) && (hhdeb >= "12:00")) {
								tempTS[i]["aprem"] = 'vac';
							} else {
								tempTS[i]["matin"] = 'vac';
								tempTS[i]["aprem"] = 'vac';
							}
						}
					}
				}
				
				else { // début en semaine précédente
					if (dateFin <= dateVendrediStr) { // début semaine précédente - fin en milieu de semaine
						ecart2 = diffdate(getDate(dateFin), getDate(dateVendrediStr));
						for (i=0; i<(5-ecart2); i++) { // de 0 (lundi) à (5- nb de jours entre dateFin et vendredi)
							if ((i == 4-ecart2) && (hhfin <= "12:00")) {
								tempTS[i]["matin"] = 'vac';
							} else {
								tempTS[i]["matin"] = 'vac';
								tempTS[i]["aprem"] = 'vac';
							}
						}
					}
					
					else { // vacation toute la semaine
						for (i=0; i<5; i++) {
							tempTS[i]["matin"] = 'vac';
							tempTS[i]["aprem"] = 'vac';
						}
					}
				}
			}
		}

	};
	

	$scope.semPrec = function() {
		$scope.dateLundi.setTime($scope.dateLundi.getTime()-1000*3600*24*7);
		initTs($scope.dateLundi);
	}
	
	$scope.semSuiv = function() {
		$scope.dateLundi.setTime($scope.dateLundi.getTime()+1000*3600*24*7);
		initTs($scope.dateLundi);
	}

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



