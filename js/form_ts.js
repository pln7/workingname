  
// Récupération des infos de la journée sélectionnée
window.onload = function ecrireInfos()
  {
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    jour = unescape(temp[1]);
    temp = parameters[1].split("=");
    matin_ou_aprem = unescape(temp[1]);
    temp = parameters[2].split("=");
    pseudoAgent = unescape(temp[1]);
    document.getElementById("jour").innerHTML = 'du '+jour +' '+matin_ou_aprem;
    document.getElementById("pseudoAgent").innerHTML =pseudoAgent;
  }
