function getObjectProperties(obj){
var props = "";
for (prop in obj) {
	props += prop + " => " + obj[prop] + "\n";
}
return props;
}