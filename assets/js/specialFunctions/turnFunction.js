export default function orderTurns(player) {
	console.log("player log");
	console.log(player);

	return player.sort((a, b) => (a.iniciative < b.iniciative ? 1 : -1));
}

// playersArray.sort(function (a, b) {
// 	if (a.getIniciative() > b.getIniciative()) {
// 		return 1;
// 	}
// 	if (a.getIniciative() < b.getIniciative()) {
// 		return -1;
// 	}
// 	return 0;
// });

// export default function orderTurns(players){
//     let mapped = players.map(function )
// };
