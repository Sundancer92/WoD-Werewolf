export default function insertCard(turns) {
	// Identifica el contenedor de los turnos
	let combatList = document.querySelector(".combatList");

	// Crea el espacio para una nueva card
	const list = document.createElement("div");

	// Limpia el contenido del contenedor de los turnos
	combatList.innerHTML = "";

	for (let character in turns) {
		const newCard = `
	    <div class="card my-1 playerCard ${turns[character].team}">
	        <div class="card-body">
	            <h5 class="card-title">${turns[character].name}</h5>
	            <p class="card-text">Iniciative: ${turns[character].iniciative}</p>
	            <p class="card-text">Team: ${turns[character].team}</p>
	        </div>
	    </div>
	            `;
		list.innerHTML += newCard;
	}
	combatList.appendChild(list);
}
