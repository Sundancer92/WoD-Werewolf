class Character {
	#name;
	#iniciative;
	#team;
	#invocacion;
	#buff;
	#debuff;
	constructor(name, iniciative, team, invocacion, buff, debuff) {
		this.#name = name;
		this.#iniciative = iniciative;
		this.#team = team;
		this.#invocacion = invocacion;
		this.#buff = buff;
		this.#debuff = debuff;
	}

	getName() {
		return this.#name;
	}

	setName(newName) {
		this.#name = newName;
	}

	getIniciative() {
		return this.#iniciative;
	}

	getTeam() {
		return this.#team;
	}

	setTeam(newTeam) {
		this.#team = newTeam;
	}

	getIniciative() {
		return this.#iniciative;
	}

	getInvocacion() {
		return this.#invocacion;
	}

	setInvocacion(nuevaInvocacion) {
		this.#invocacion = nuevaInvocacion;
	}

	getBuff() {
		return this.#buff;
	}

	setBuff(nuevoBuff) {
		this.#buff = nuevoBuff;
	}

	getDebuff() {
		return this.#debuff;
	}

	setDebuff(nuevoDebuff) {
		this.#debuff = nuevoDebuff;
	}
}

class Player extends Character {
	constructor(name, iniciative, team, invocacion, buff, debuff) {
		super(name, iniciative, team, invocacion, buff, debuff);
	}
}

export { Player };
