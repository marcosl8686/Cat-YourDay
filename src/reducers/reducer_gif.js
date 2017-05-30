import { FETCH_GIF} from '../actions';

export default function(state = [], action) {
	console.log("action:", action);
	switch (action.type) {
		case FETCH_GIF:
			console.log([...state,...action.payload.data.data])
			return [...state,...action.payload.data.data];
		default:
			return state;
	}
}