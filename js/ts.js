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
	                	    	   matin : 'abs',
	                	    	   aprem : 'abs',
	                	       },
	                	       {
	                	    	   matin : 'null',
	                	    	   aprem : 'null',
	                	       },
	                	       {
	                	    	   matin : 'vac',
	                	    	   aprem : 'abs',
	                	       },
	                	       {
	                	    	   matin : 'vac',
	                	    	   aprem : 'vac',
	                	       },
	                	       {
	                	    	   matin : 'vac',
	                	    	   aprem : 'abs',
	                	       }
	                	       ]
	                 },
	                 
	                 {
	                	 name : 'jaques',
	                	 ts : [
	                	       {
	                	    	   matin : 'abs',
	                	    	   aprem : 'abs',
	                	       },
	                	       {
	                	    	   matin : 'vac',
	                	    	   aprem : 'abs',
	                	       },
	                	       {
	                	    	   matin : 'vac',
	                	    	   aprem : 'abs',
	                	       },
	                	       {
	                	    	   matin : 'vac',
	                	    	   aprem : 'vac',
	                	       },
	                	       {
	                	    	   matin : 'vac',
	                	    	   aprem : 'abs',
	                	       }
	                	       ]
	                 }
	                 ];	
	
	$scope.click = function(toPrint) {
		alert(toPrint);
	}
}



