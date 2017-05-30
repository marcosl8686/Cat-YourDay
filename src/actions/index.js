import axios from 'axios';

export const FETCH_GIF = 'fetch_gif';

const ROOT_URL = "http://api.giphy.com/v1/gifs/search?q=funny+cat"
const API_KEY = "dc6zaTOxFJmzC"
export function fetchGif() {
	const request = axios.get(`${ROOT_URL}&api_key=${API_KEY}`);

	console.log('request:', request);
	return {
		type: FETCH_GIF,
		payload: request
	};
}
