import {createStore} from 'redux';
//createstore from redux
import {defaultState} from '../app/server/defaultState'

//reducer with parameter, action and state
export const store = createStore(
    function reducer(state = defaultState,action)
    {
        return state;
    }
)