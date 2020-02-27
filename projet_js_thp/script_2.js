function factorial(n) {
	if(n > 0 && n <= 1) {
		return 1;
	}
	else {
		return n * factorial(n-1);	
	}
}

var nombre
var result
nombre = prompt("De quel nombre veux-tu calculer la factorielle ?")
result = factorial(nombre)
console.log(result)