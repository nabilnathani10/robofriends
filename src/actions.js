import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => {
    //console.log(text);
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
};

//higher order function
//request robots is a function that returns a function expecting a dispatch
export const requestRobots = () => (dispatch) => {

    dispatch( { type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { return response.json() })
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch( error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
}

