export default function insertCard(name, iniciative, team) {
	const combatList = document.querySelector(".combatList");
	const newCard = `
    <div class="card my-1 playerCard">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            This is some text within a card body.
        </div>
    </div>`;

	const list = document.createElement("div");
	list.innerHTML = newCard;
	combatList.appendChild(list);
}
