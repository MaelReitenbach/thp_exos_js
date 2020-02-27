
var depart = 0
var base = 0
var etage
etage = prompt("Combien d'étages veux tu dans ta pyramide ?")
var cont = 1
var eh = etage - cont


for(var o = 0; o < etage; o++) {
	var arreh = []

	base = 0 
  	depart++
  	eh = etage - cont


	while(eh > 0) {
	arreh.unshift(" ")
	eh = eh - 1
	}

	while(base < depart) {
		arreh.push("#")
		base++
	}

	cont++

	var result = arreh.join("")
	console.log(result)
}

