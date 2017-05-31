import axios from 'axios';
import _ from 'lodash';

export const FETCH_GIFS = 'fetch_gifs';
export const SELECT_GIF = 'select_gif'

const ROOT_URL = "http://api.giphy.com/v1/gifs/search?q=funny+cat"
const API_KEY = "dc6zaTOxFJmzC"


export function fetchGif() {
	const request = axios.get(`${ROOT_URL}&limit=100&api_key=${API_KEY}`);

	return {
		type: FETCH_GIFS,
		payload: request
	};
}
export function selectGif(gifArr) {
	//randomly select a number based on the length of the array
	let randomNum = _.random(gifArr.length);
	let randomSelection = gifArr[randomNum];
	//remove one object from the array with randomNum
	gifArr.splice(randomNum, 1);

	return {
		type: SELECT_GIF,
		payload: {
			availableGifs: gifArr,
			selectedGif: randomSelection
		}
	}
}
