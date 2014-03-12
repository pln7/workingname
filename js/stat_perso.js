// Page javascript gérant les statistiques personnelles

// Controleur angular
function GabCtrl($scope, filterFilter){

    // A intégrer : fonction de récupération des infos en fonction des choix de l'utilisateur

    // Fonctions pour gérer le dynamisme du nombre de gabarits séléctionnés
    $scope.$watch('list_gab_exec', function(){
      $scope.nb_gab_exec = filterFilter($scope.list_gab_exec, {selected:true}).length;
    },true);
    
    $scope.$watch('list_gab_abs', function(){
      $scope.nb_gab_abs = filterFilter($scope.list_gab_abs, {selected:true}).length;
    },true);

    //Liste de tous les gabarits d'exécution
    $scope.list_gab_exec = [
      {
        name : 'DP   : Développement produits',
        abrev : 'DP',
        selected : false
      },
      {
        name : 'DPap : Développement produits',
        abrev : 'DPap',
        selected : false
      },
      {
        name : 'DPma : Développement produits',
        abrev : 'DPma',
        selected : false
      },
      {
        name : 'EIB  : Missions Bureau Pivot 37h30',
        abrev : 'EIB',
        selected : false
      },
      {
        name : 'EIBC : Missions Bueau Compensé',
        abrev : 'EIBC',
        selected : false
      },
      {
        name : 'EIP : Missions Service Permanent',
        abrev : 'EIP',
        selected : false
      },
      {
        name : 'EIPC : Missions Service Permanent Compensé',
        abrev : 'EIPC',
        selected : false
      },
      {
        name : 'EISG : Missions ordinaires St-Genis',
        abrev : 'EISG',
        selected : false
      },
      {
        name : 'ER   : Réunions',
        abrev : 'ER',
        selected : false
      },
      {
        name : 'FP   : Formation permanente autres',
        abrev : 'FP',
        selected : false
      },
      {
        name : 'FPCT : Formation permanente autres',
        abrev : 'FPCT',
        selected : false
      },
      {
        name : 'FPF  : Formation permanente autres',
        abrev : 'FPF',
        selected : false
      },
      {
        name : 'HB   : Horaire de bureau',
        abrev : 'HB',
        selected : false
      },
      {
        name : 'HBT6 : Télétravail Service Posté',
        abrev : 'HBT6',
        selected : false
      },
      {
        name : 'PR   : Prévision régionale',
        abrev : 'PR',
        selected : false
      },
      {
        name : 'PR1  : Prévision régionale',
        abrev : 'PR1',
        selected : false
      },
      {
        name : 'PR2  : Prévision régionale',
        abrev : 'PR2',
        selected : false
      },
      {
        name : 'PRAD : PAR Double',
        abrev : 'PRAD',
        selected : false
      },
      {
        name : 'PRAn : PAR Double Nuit',
        abrev : 'PRAn',
        selected : false
      },
      {
        name : 'PRC  : CPR',
        abrev : 'PRC',
        selected : false
      },
      {
        name : 'PRCD : CPR Double',
        abrev : 'PRCD',
        selected : false
      },
      {
        name : 'PRCn : CPR Nuit',
        abrev : 'PRCn',
        selected : false
      },
      {
        name : 'PRD  : Prévision régionale',
        abrev : 'PRD',
        selected : false
      },
      {
        name : 'PRD1 : Prévision régionale',
        abrev : 'PRD1',
        selected : false
      },
      {
        name : 'PRD2 : Prévision régionale',
        abrev : 'PRD2',
        selected : false
      },
      {
        name : 'PRDn : CPR Double Nuit',
        abrev : 'PRDn',
        selected : false
      },
      {
        name : 'PRE  : PAR Alpes',
        abrev : 'PRE',
        selected : false
      },
      {
        name : 'PREn : PAR Alpes Nuit',
        abrev : 'PREn',
        selected : false
      },
      {
        name : 'PRI  : Prévision régionale',
        abrev : 'PRI',
        selected : false
      },
      {
        name : 'PRID : Prévision régionale',
        abrev : 'PRID',
        selected : false
      },
      {
        name : 'PRIN : Prévision régionale',
        abrev : 'PRIN',
        selected : false
      },
      {
        name : 'PRId : Prévision régionale',
        abrev : 'PRId',
        selected : false
      },
      {
        name : 'PRIn : Prévision régionale',
        abrev : 'PRIn',
        selected : false
      },
      {
        name : 'PRK  : Prévi Conseil Kiosque',
        abrev : 'PRK',
        selected : false
      },
      {
        name : 'PRKM : Prévision Conseil Kiosque Double',
        abrev : 'PRKM',
        selected : false
      },
      {
        name : 'PRM  : Prévi Conseil Média',
        abrev : 'PRM',
        selected : false
      },
      {
        name : 'PRMD : Prévision Conseil Média Double',
        abrev : 'PRMD',
        selected : false
      },
      {
        name : 'PRO  : PAR Auvergne-Rhône',
        abrev : 'PRO',
        selected : false
      },
      {
        name : 'PROn : PAR Auvergne-Rhône Nuit',
        abrev : 'PROn',
        selected : false
      },
      {
        name : 'PRR  : Prévision Renfort Brigade',
        abrev : 'PRR',
        selected : false
      },
      {
        name : 'PRRn : Prévision Renfort Brigade Nuit',
        abrev : 'PRRn',
        selected : false
      },
      {
        name : 'SCHC : CCHS: Comité Central Hygiène et Sécurité',
        abrev : 'SCHC',
        selected : false
      },
      {
        name : 'SCHL : Actions sociales participation CHS LOCAL.',
        abrev : 'SCHL',
        selected : false
      },
      {
        name : 'SCLC : CCAS : Comité Central Actions Sociales',
        abrev : 'SCLC',
        selected : false
      },
      {
        name : 'SCLL : CLASS : Comité Local Actions Sociales',
        abrev : 'SCLL',
        selected : false
      },
      {
        name : 'SPCA : Actions syndicales : CONSEIL ADMINISTRATION',
        abrev : 'SPCA',
        selected : false
      },
      {
        name : 'SPCC : Actions syndicales participations CTP CENTRAL',
        abrev : 'SPCC',
        selected : false
      },
      {
        name : 'SPCL : Actions syndicales participations CTP LOCAL',
        abrev : 'SPCL',
        selected : false
      },
      {
        name : 'SPCP : Actions syndicales participations CAP',
        abrev : 'SPCP',
        selected : false
      },
      {
        name : 'SPOP : Actions syndicales participations CTP, CAP, etc.',
        abrev : 'SPOP',
        selected : false
      },
      {
        name : 'SYDS : Décharges d\'activité de service pour exercice du droit syndical',
        abrev : 'SYDS',
        selected : false
      },
      {
        name : '_bdg : Vacation créée à partir d\'infos badgeuse',
        abrev : '_bdg',
        selected : false
      },
      {
        name : '_bgC :Vacation créée à partir d\'infos badgeuse corrigées',
        abrev : '_bgC',
        selected : false
      },
      {
        name : '_bgM : Vacation créée à partir d\'infos badgeuse avec intervention Opérateur',
        abrev : '_bgM',
        selected : false
      },
      {
        name : 'BR__ : Brigade réalisée dans un autre service',
        abrev : 'BR__',
        selected : false
      }


    ];


  // Liste de tous les gabarits d'absence
  $scope.list_gab_abs = [
     {
      name : 'AHAD : Aut. d\'abs. pour siéger en commission d\'adoption',
      abrev : 'AHAD',
      selected : false
     },
     {
      name : 'AHAL : Aut. d\'abs. pour allaitement',
      abrev : 'AHAL',
      selected : false
     },
     {
      name : 'AHDS : Aut. d\'abs. pour don du sang et de ses composantes',
      abrev : 'AHDS',
      selected : false
     },
     {
      name : 'AHFE : Aut. d\'abs. facilité horaire accordée aux femmes enceintes',
      abrev : 'AHFE',
      selected : false
     },
     {
      name : 'AHME : Aut. d\'abs. pour examen médicaux spéciaux',
      abrev : 'AHME',
      selected : false
     },
     {
      name : 'AHPE : Aut. d\'abs. aux parents d\'élèves pour réunions de comités d\'établiss. ou de pare',
      abrev : 'AHPE',
      selected : false
     },
     {
      name : 'AHPO : Aut. d\'abs. pour un mandat local ou territorial',
      abrev : 'AHPE',
      selected : false
     },
     {
      name : 'AHSY : Facilité horaire pour l\'information syndicale',
      abrev : 'AHSY',
      selected : false
     },
     {
      name : 'ATAS : Autorisation temporaire d\'activités sociales',
      abrev : 'AHSY',
      selected : false
     },
     {
      name : 'AUAC : Aut. d\'abs. prépa à l\'accouchement sans douleur',
      abrev : 'AHSY',
      selected : false
     },
     {
      name : 'AUAD : Aut. d\'abs. pour siéger en commission d\'adoption',
      abrev : 'AUAD',
      selected : false
     },
     {
      name : 'AUCO : Aut. d\'abs. pour un congrès politique',
      abrev : 'AUCO',
      selected : false
     },
     {
      name : 'AUEC : Congé pour préparation et participation aux examens et concours',
      abrev : 'AUEC',
      selected : false
     },
     {
      name : 'AUEM : Aut. d\'abs. pour garder un enfant malade',
      abrev : 'AUEM',
      selected : false
     },
     {
      name : 'AUEV : Aut. d\'abs. pour évènement de famille',
      abrev : 'AUEV',
      selected : false
     },
     {
      name : 'AUJU : Aut. d\'abs. pour un jury d\'assise',
      abrev : 'AUJU',
      selected : false
     },
     {
      name : 'AUMA : Aut. d\'abs. à l\'occasion de la maternité',
      abrev : 'AUMA',
      selected : false
     },
     {
      name : 'AUME : Aut. d\'abs. pour les examens médicaux',
      abrev : 'AUME',
      selected : false
     },
     {
      name : 'AUMI : Aut. d\'abs. pour cohabitant avec une personne contagieuse',
      abrev : 'AUMI',
      selected : false
     },
     {
      name : 'AUPO : Aut. d\'abs. pour un mandat local ou territorial',
      abrev : 'AUPO',
      selected : false
     },    
     {
      name : 'AUPR : Aut. d\'abs. à l\'occasion des élections prud\'homales',
      abrev : 'AUPR',
      selected : false
     },    
     {
      name : 'AUPT : Aut. d\'abs. pour candidature à un mandat parlementaire ou territorial',
      abrev : 'AUPT',
      selected : false
     },    
     {
      name : 'AURE : Aut. d\'abs. à l\'occasion des fêtes religieuses',
      abrev : 'AURE',
      selected : false
     },    
     {
      name : 'AUSP : Aut. d\'abs. pour les sapeurs-pompiers volontaires',
      abrev : 'AUSP',
      selected : false
     },    
     {
      name : 'AUSY : Aut. d\'abs. pour, à titre syndical, élection ou participation à diff. organismes',
      abrev : 'AUSY',
      selected : false
     },    
     {
      name : 'AUXM : Autorisation d\'absence exceptionnelle ministérielle',
      abrev : 'AUXM',
      selected : false
     },    
     {
      name : 'CAAD : Congés annuels administratifs',
      abrev : 'CAAD',
      selected : false
     },    
     {
      name : 'CAHS : Jour de fractionnement pour congés annuels hors saison',
      abrev : 'CAHS',
      selected : false
     },    
     {
      name : 'CANN : Congés annuels',
      abrev : 'CANN',
      selected : false
     },    
     {
      name : 'CAOM : Congés bonifiés pour l\'Outre-mer',
      abrev : 'CAOM',
      selected : false
     },    
     {
      name : 'CCET : Congé Compte Epargne Temps',
      abrev : 'CCET',
      selected : false
     },    
     {
      name : 'CMAC : Congés de maladie pour accident de service',
      abrev : 'CMAC',
      selected : false
     },    
     {
      name : 'CMFP : Congés de maladie ordinaire',
      abrev : 'CMFP',
      selected : false
     },    
     {
      name : 'CMLD : Congés de maladie de longue durée',
      abrev : 'CMLD',
      selected : false
     },    
     {
      name : 'CMLM : Congés de maladie de longue maladie',
      abrev : 'CMLM',
      selected : false
     },    
     {
      name : 'CSAN : Congé pour formation à l\'animation',
      abrev : 'CSAN',
      selected : false
     },    
     {
      name : 'CSDO : Congé d\'adoption',
      abrev : 'CSDO',
      selected : false
     },    
     {
      name : 'CSDS : Congé supplémentaire d\'adoption',
      abrev : 'CSDS',
      selected : false
     },    
     {
      name : 'CSFP : Congé formation professionnelle',
      abrev : 'CSFP',
      selected : false
     },    
     {
      name : 'CSMA : Congé de maternité',
      abrev : 'CSMA',
      selected : false
     },    
     {
      name : 'CSMI : Congé pour période d\'instruction militaire ou activité dans la réserve',
      abrev : 'CSMI',
      selected : false
     },    
     {
      name : 'CSNA : Congé supplémentaire de naissance',
      abrev : 'CSNA',
      selected : false
     },    
     {
      name : 'CSPA : Congé parental',
      abrev : 'CSPA',
      selected : false
     },    
     {
      name : 'CSPP : Congé pour présence parentale',
      abrev : 'CSPP',
      selected : false
     },    
     {
      name : 'CSPR : Congé de paternité',
      abrev : 'CSPR',
      selected : false
     },    
     {
      name : 'CSSP : Conditions particulières d\'emploi pour les sportifs de haut niveau',
      abrev : 'CSSP',
      selected : false
     },    
     {
      name : 'CSSY : Congé pour formation syndicale',
      abrev : 'CSSY',
      selected : false
     },    
     {
      name : 'CSVI : Congé pour accompagnement d\'un parent ou cohabitant en fin de vie',
      abrev : 'CSVI',
      selected : false
     },    
     {
      name : 'GREV : Jour de Grève',
      abrev : 'GREV',
      selected : false
     },    
     {
      name : 'KHMI : Compensation horaire Missions ou autres',
      abrev : 'KHMI',
      selected : false
     },      
     {
      name : 'KJMI : Compensation Missions ou autres',
      abrev : 'KJMI',
      selected : false
     },    
     {
      name : 'REAG : Récupération "après-midi DIR/AG"',
      abrev : 'REAG',
      selected : false
     }, 
     {
      name : 'REBL : Récupération bilan ou crédit/débit',
      abrev : 'REBL',
      selected : false
     }, 
     {
      name : 'RETP : Récupération temps partiel Posté mensuel/annuel',
      abrev : 'RETP',
      selected : false
     }, 
     {
      name : 'RHAG : Récupération horaire "après-midi DIR/AG"',
      abrev : 'RHAG',
      selected : false
     }, 
     {
      name : 'RHBL : Récupération horaire bilan ou crédit/débit',
      abrev : 'RHBL',
      selected : false
     }, 
     {
      name : 'SJMT : Jour mi-temps thérapeutique',
      abrev : 'SJMT',
      selected : false
     }, 
     {
      name : 'SJRL : JRTT libre',
      abrev : 'SJRL',
      selected : false
     }, 
     {
      name : 'SJTP : Jour Temps Partiel',
      abrev : 'SJTP',
      selected : false
     }, 
     {
      name : 'TJMI : Trajet mission',
      abrev : 'TJMI',
      selected : false
     }
  ]

  // Affiche par défaut les statistiques d'absence
  $scope.isExec = false;

  // Clic sur bouton Execution affiche les statistiques d'éxecution
  $scope.clicExec = function() {
	 $scope.isExec = true;
  }
  
  // Clic sur bouton Absence affiche les statistiques d'absence
  $scope.clicAbs = function() {
	 $scope.isExec = false;
	}
  
}