import { FETCH_GIFS, SELECT_GIF} from '../actions';

// export default function(state = [], action) {
// 	console.log("action:", action);
// 	switch (action.type) {
// 		case FETCH_GIF:
// 			console.log([...state,...action.payload.data.data])
// 			return [...state,...action.payload.data.data];
// 		default:
// 			return state;
// 	}
// }


export default function(state = {availableGifs: [], selectedGif:null}, action) {
console.log("action:", action);
	switch (action.type) {
	
		case FETCH_GIFS:
			return {
				...state,
				availableGifs: action.payload.data.data
			};
			
		case SELECT_GIF: 
			return {
				...state, 
				availableGifs: action.payload.availableGifs,
				selectedGif: action.payload.selectedGif
				
			}
		
		default:
		return state;
	}
}