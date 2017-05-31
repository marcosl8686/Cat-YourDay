import { FETCH_GIFS, SELECT_GIF} from '../actions';

export default function(state = {availableGifs: [], selectedGif:null}, action) {
console.log("action:", action);
	switch (action.type) {
	
		case FETCH_GIFS:
			let gifArr = action.payload.data.data;
			let initialGif = gifArr[0];
			gifArr.splice(0,1);

			return {
				...state,
				availableGifs: action.payload.data.data,
				selectedGif: initialGif
			};
			
		case SELECT_GIF:
			console.log(action.payload);
			return {
				...state, 
				availableGifs: action.payload.availableGifs,
				selectedGif: action.payload.selectedGif
				
			};
		
		default:
		return state;
	}
}