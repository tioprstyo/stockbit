import {GET_MOVIES, MOVIES_ERROR} from '../types'
import axios from 'axios'

export const getMovies = (type, val, page, list) => async dispatch => {

    if (type.includes('detail')) {
        try{
            const res = await axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&t=${val}&plot=full`)
            dispatch( {
                type: GET_MOVIES,
                payload: res.data
            })
        }
        catch(e){
            dispatch( {
                type: MOVIES_ERROR,
                payload: console.log(e),
            })
        }
        
    } else {
        try{
            const res = await axios.get(`https://www.omdbapi.com/?apikey=faf7e5bb&s=${val}&page=${page}`)
            var data = res.data.Search;
            if (list.length > 0) {
                data = list.concat(data)
            }
            dispatch( {
                type: GET_MOVIES,
                payload: data
            })
        }
        catch(e){
            dispatch( {
                type: MOVIES_ERROR,
                payload: console.log(e),
            })
        }
    }
    
    

}