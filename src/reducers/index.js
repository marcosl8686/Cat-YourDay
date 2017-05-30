import { combineReducers } from 'redux';
import GifReducer from './reducer_gif';


const rootReducer = combineReducers({
  gif: GifReducer
});

export default rootReducer;
