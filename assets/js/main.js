import { Player } from "./Clases/Classes.js";
import orderTurns from "./specialFunctions/turnFunction.js";
import insertCard from "./specialFunctions/insertCard.js";

// Invocaciones DOM
const form = document.querySelector("form");

// Declaracion Variables
const playersArray = [];

// eventListeners
form.addEventListener("submit", addPlayer);

//  Creacion nuevo Jugador
function addPlayer(e) {
	e.preventDefault();

	const addForm = {
		name: form.addName.value,
		iniciative: Number(form.addIniciative.value),
		team: form.addTeam.value,
	};
	// CREACION NUEVO JUGADOR
	const player = new Player(addForm.name, addForm.iniciative, addForm.team);
	playersArray.push(player);
	// TURNOS ORDENADOS
	const orderedTurns = orderTurns(playersArray);
	// INSERCION NUEVO JUGADOR
	insertCard(orderedTurns);
}
