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
                <div>
                   <input 
                    type="button" 
					class="btn btn-primary rage"
                    id='${turns[character].name}' 
                    value="Actuar Ahora"
                    />
                </div>
	        </div>
	    </div>`;
		console.log(turns[character].name);

		// INSERT CARD
		list.innerHTML += newCard;
		combatList.appendChild(list);

		// BTN DECLARATION & EVENT LISTENER
		// const instantActionBtn = document.querySelector(
		// 	`#${turns[character].name}`,
		// );
		// console.log(instantActionBtn);

		// instantActionBtn.addEventListener("click", () => {
		// 	console.log(turns[character].name);
		// });

		combatList.appendChild(list);

	}

	// LOOP PARA IDENTIFICAR LOS instantActionBTN
	const instantActionBtn = document.querySelectorAll(".rage");
	for(let i = 0; i < instantActionBtn.length; i++){
		instantActionBtn[i].addEventListener("click", () => {
			console.log(instantActionBtn[i].id);
		});
	}
	console.log(instantActionBtn);
}
