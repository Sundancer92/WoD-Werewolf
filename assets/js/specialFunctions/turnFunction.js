// export default function orderTurns(playersArray) {
// 	return playersArray.sort((a, b) => (a.iniciative < b.iniciative ? 1 : -1));
// }

const orderedTurns = function (playersArray) {
	return playersArray.sort((a, b) => (a.iniciative > b.iniciative ? 1 : -1));
};

export default orderedTurns;

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
