import {RECEIVE_MEMES} from './memeAction';
import {combineReducers} from 'redux';


function memes(state = [], action){
  switch(action.type){
    case RECEIVE_MEMES:
      return action.memes
    default:
      return state
  }
}

const rootReducer = combineReducers({
  memes,
})

export default rootReducer;