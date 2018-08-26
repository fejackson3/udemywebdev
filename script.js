var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(63deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	
	css.textContent = body.style.background + ";";
}

function setInputs() {
	input.color1.value = #ffff00;
	input.color2.value = #ff0000;

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color1.addEventListener("load", setInputs);

color2.addEventListener("load", setInputs);
