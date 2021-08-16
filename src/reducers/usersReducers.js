import {GET_MOVIES} from '../types'

const initialState = {
    movies:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_MOVIES:
        return {
            ...state,
            movies:action.payload,
            loading:false

        }
        default: return state
    }

}