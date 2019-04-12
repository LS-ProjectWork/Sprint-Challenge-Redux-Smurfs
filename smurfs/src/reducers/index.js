import {
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_FAILURE,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../actions'

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOAD_START:
      return {
        ...state,
        addingSmurf: true,
      }
    case LOAD_SUCCESS: 
      return {
        ...state,
        addingSmurf: false,
        smurfs: payload
      }
    case LOAD_FAILURE:
      return {
        ...state,
        error: payload.data.error
      } 
    case FETCH_START:
      return {
        ...state, 
        fetchingSmurfs: false
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: payload,
        fetchingSmurfs: false
      }
    case FETCH_FAILURE:
      return {
        ...state,
        error: payload.data.error
      }
    default:
     return state
  }
}

export default reducer;