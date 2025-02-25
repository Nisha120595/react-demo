import React , { useReducer , useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading : true ,
    post : {},
    error : ''
}

const reducer = (state , action) => {
     switch(action.type){
         case 'FETCH_SUCCESS' : 
            return {
                loading : false,
                post : action.payload,
                error : ''
            }
         case 'FETCH_ERROR' :
             return {
                loading : false,
                post : {},
                error : 'Something went wrong...'
             }
        default : return state
     }
}

function DataFetchingThree() {

    const [state , dispatch] = useReducer(reducer , initialState)

    useEffect(() => {
        console.log('fetching data...')
        axios.get(`https://jsonplaceholder.typicode.com/posts/50`)
        .then(response => {
            console.log(response)
            dispatch({type : 'FETCH_SUCCESS' , payload : response.data})
        })
        .catch(error => {
            console.log(error)
            dispatch({type : 'FETCH_ERROR'})
        })
    },[])

    return(
        <div>
           {state.loading ? 'Loading data...' : state.post.title}
           {state.error ? state.error : null}
        </div>
    )
}

export  default DataFetchingThree