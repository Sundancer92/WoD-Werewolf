import { Player } from "./Clases/Classes.js";
import orderTurns from "./specialFunctions/turnFunction.js";
import insertCard from "./specialFunctions/insertCard.js";

// Invocaciones DOM
const form = document.querySelector("form");

var modalAddPlayer = document.getElementById("addPlayerBtn");

// Declaracion Variables
const playersArray = [];
var sorted = [];
// eventListeners
form.addEventListener("submit", addPlayer);

// const original = [1, 7, 3, 5];
// const sorted = original.slice().sort((a, b) => a - b);

//  Creacion nuevo Jugador
function addPlayer(e) {
	e.preventDefault();

	const addForm = {
		name: form.addName.value,
		iniciative: Number(form.addIniciative.value),
		team: form.addTeam.value,
	};
	console.log(typeof addForm.iniciative);
	// console.log("Captura FORM");
	// console.log(addForm);

	const player = new Player(addForm.name, addForm.iniciative, addForm.team);

	playersArray.push(player);
	// console.log("Captura playersArray");
	// console.log(playersArray);

	const orderedTurns = orderTurns(playersArray);
	console.log(orderedTurns);
	// console.log("Array Ordenado");
	// console.log(orderedTurns);

	insertCard(orderedTurns);
}
