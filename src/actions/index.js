import axios from 'axios';

export const FETCH_GIFS = 'fetch_gifs';
export const SELECT_GIF = 'select_gif'

const ROOT_URL = "http://api.giphy.com/v1/gifs/search?q=funny+cat"
const API_KEY = "dc6zaTOxFJmzC"


export function fetchGif() {
	const request = axios.get(`${ROOT_URL}&api_key=${API_KEY}`);

	console.log('request:', request);
	return {
		type: FETCH_GIFS,
		payload: request
	};
}
export function selectGif(gifArr) {
	//with the gifArr, randomly select one gif and store it into a var
//then remove it from the gifArr so that it can't be selected again
//then return the following object




	return {
		type: SELECT_GIF,
		payload: {
			availableGifs: action.payload.availableGifs,
			selectedGif: action.payload.selectedGif
		}
	}
}
