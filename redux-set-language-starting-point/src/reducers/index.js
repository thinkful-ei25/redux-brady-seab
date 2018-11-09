import {SET_LANGUAGE} from '../actions';

const initialState = { language : 'English'}; 
// Add your code for the languageReducer
export const languageReducer = (state=initialState, action) =>{ 
  if(action.type === SET_LANGUAGE){ 
    return {...state, language : action.language}; 
  }

  return state; 
}
